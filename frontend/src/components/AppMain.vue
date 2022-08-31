<template>
  <v-app>
    <v-container class="d-flex flex-row px-0 py-0 mx-0" height="100%" fluid>
      <!-- navigation drawer -->

      <v-sheet
        width="15vw"
        height="100%"
        class="blue-grey lighten-5 d-flex flex-column"
        style="min-width: 288px"
        id="side"
      >
        <!-- 탑 -->
        <v-sheet dark class="primary d-flex justify-center align-center">
          <h3 class="ma-0" style="padding-top: 50px; padding-bottom: 50px">
            김이슬님
          </h3>
          <v-dialog v-model="dialog" persistent max-width="400">
            <template v-slot:activator="{ on, attrs }">
              <v-btn text v-bind="attrs" v-on="on">
                <p class="text-subtitle-1 text-md-h6"></p>
                <h6 id="logout">
                  <i class="fa-solid fa-arrow-right-from-bracket pr-1"></i
                  >로그아웃
                </h6>
              </v-btn>
            </template>
            <v-card class="pt-3">
              <v-card-title class="py-3 text-h6 d-flex justify-center">
                로그아웃 하시겠습니까?
              </v-card-title>
              <v-card-actions>
                <v-btn color="green darken-1" text @click="logOut()">
                  예
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialog = false">
                  아니오
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-sheet>
        <!-- 미들 -->
        <v-sheet
          class="blue-grey lighten-5 d-flex justify-center"
          style="padding-top: 50px; padding-bottom: 20px; overflow: inherit"
        >
          <v-date-picker
            class="mb-4 rounded-0"
            v-model="picker"
            id="date"
            locale="ko-KR"
          ></v-date-picker>
        </v-sheet>
        <!-- 바텀 -->

        <v-sheet class="blue-grey lighten-5">
          <v-list class="blue-grey lighten-5">
            <v-list-group :value="true" class="pl-3">
              <template v-slot:activator>
                <v-list-item-title>내 캘린더</v-list-item-title>
              </template>
              <v-checkbox
                label="[기본]내 캘린더"
                color="red"
                value="red"
                v-model="selected"
                @change="showVal()"
                hide-details
              ></v-checkbox>
              <v-checkbox
                label="선행연구팀"
                color="green"
                @change="showVal()"
                v-model="selected"
                value="green"
                hide-details
              ></v-checkbox>
            </v-list-group>
          </v-list>
        </v-sheet>
      </v-sheet>
      <!-- 콘텐츠영역 -->
      <v-content width="85vw">
        <AppCalendar
          :componentValue="componentValue"
          @change="change"
          v-if="componentValue == 0"
        ></AppCalendar>
        <AppMake
          :componentValue="componentValue"
          @change="change"
          v-if="componentValue == 1"
        ></AppMake>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import AppCalendar from './AppCalender.vue';
import AppMake from './AppMake.vue';
export default {
  name: 'AppMain',
  components: { AppCalendar, AppMake },
  data() {
    return {
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
      ],
      count: 1,
      dialog: false,
      right: null,
      // 미니달력
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      componentValue: 0,
      selected: ['red'],
    };
  },

  mounted() {},

  methods: {
    logOut() {
      this.$router.push('/');
    },
    change(value) {
      this.componentValue = value;
      console.log('자식한테받은값', this.componentValue);
    },
    showVal() {
      console.log('밸루값', this.value);
    },
  },
};
</script>

<style scoped>
#top {
  position: sticky;
}
#bottom {
  position: sticky;
}
#logout {
  cursor: pointer;
}
#drawer {
  min-width: 290px;
  position: sticky;
}
@media (max-width: 800px) {
  #side {
    display: none;
  }
}

::v-deep .v-picker__body {
  width: 250px !important;
  display: inherit;
}

::v-deep .v-picker__title {
  display: none;
}
</style>
