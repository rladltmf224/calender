<template>
  <v-app>
    <v-container class="pa-0" fluid fill-height>
      <!-- 콘텐츠영역 -->
      <v-sheet width="50%" height="100%" style="min-width: 570px">
        <!-- 탑 -->
        <div>
          <!-- 제목 -->
          <v-sheet class="pt-6 px-9 d-flex align-center pb-3"
            ><p class="my-0 py-0">제목</p>
            <v-text-field
              class="pl-10"
              outlined
              v-model="subject"
              maxlength="30"
              placeholder="제목을 입력해주세요.(최대 30자)"
            ></v-text-field
          ></v-sheet>
          <!-- 타입 -->
          <v-sheet class="px-9 d-flex align-center pb-3"
            ><p class="my-0 py-0">타입</p>
            <v-select
              label="타입"
              class="pl-10"
              outlined
              :items="type"
              v-model="Type"
              @change="changeContent()"
            >
            </v-select>
          </v-sheet>
          <!-- 일시 -->
          <v-sheet class="px-9 d-flex align-center pb-3"
            ><p class="my-0 py-0" style="white-space: nowrap">일시</p>
            <!-- 시작일 -->
            <div style="width: 60%">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                :return-value.sync="date"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    class="pl-10 pr-10"
                    v-model="dateRangeText"
                    label="날짜를 지정해주세요."
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable range>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </div>
            <!-- ~ -->
            <!-- <p class="px-3 mt-4">~</p> -->
            <!-- 종료일 -->
            <!-- <v-menu
              v-model="menu3"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  class="pr-4"
                  v-model="date4"
                  label="종료일"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date4"
                @input="menu3 = false"
              ></v-date-picker>
            </v-menu> -->
            <!-- 시간 -->
            <div style="width: 40%">
              <v-select
                label="시간"
                outlined
                dense
                :items="time"
                v-model="timeSelect"
              >
              </v-select>
            </div>
          </v-sheet>
          <v-divider></v-divider>
        </div>
        <!-- 미들 -->
        <div v-if="!vacationValue">
          <v-sheet class="pt-6 px-9 d-flex align-center pb-3"
            ><p class="my-0 py-0">참석자</p>
            <v-select
              class="pl-6"
              placeholder="참석자를 추가해주세요."
              outlined
              v-model="attendees"
              :items="items"
            >
            </v-select
          ></v-sheet>
          <!-- 타입 -->
          <v-sheet class="px-9 d-flex align-center pb-3"
            ><p class="my-0 py-0">장소</p>
            <v-text-field
              placeholder="장소를 입력해주세요.(최대 50자)"
              class="pl-10"
              outlined
              maxlength="50"
              :items="type"
              v-model="address"
            >
            </v-text-field>
          </v-sheet>
          <v-sheet class="px-9 d-flex align-center pb-3"
            ><p class="my-0 py-0">캘린더</p>
            <v-select
              outlined
              v-model="calendarSelect"
              placeholder="캘린더를 선택해주세요."
              class="pl-6"
              :items="calendar"
            >
            </v-select>
          </v-sheet>

          <v-divider></v-divider>
        </div>
        <!-- 타입이 휴가 일 시 -->

        <div v-if="Type == '휴가'">
          <!-- 근태구분 -->
          <v-sheet class="pt-6 px-9 d-flex align-center pb-3"
            ><p class="my-0 py-0">근태구분</p>
            <v-select
              class="pl-6"
              placeholder="근태를 구분해주세요."
              outlined
              :items="work"
            >
            </v-select
          ></v-sheet>
          <!-- 캘린더 -->

          <v-sheet class="px-9 d-flex align-center pb-3"
            ><p class="my-0 py-0">캘린더</p>
            <v-select
              outlined
              placeholder="캘린더를 선택해주세요."
              class="pl-6"
              :items="calendar"
            >
            </v-select>
          </v-sheet>

          <v-divider></v-divider>
        </div>
        <!-- 설명 -->
        <v-sheet class="pt-6 px-9 d-flex align-center pb-3"
          ><p class="my-0 py-0">설명</p>
          <v-textarea
            outlined
            v-model="detail"
            class="pl-10"
            maxlength="200"
            label="설명을 입력해주세요.(최대 200자)"
            name="input-7-4"
          ></v-textarea
        ></v-sheet>
        <!-- 등록 취소버튼 -->
        <v-sheet class="d-flex justify-center pt-2">
          <v-dialog v-model="submit" persistent max-width="400">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                width="100px"
                class="primary mr-3"
                v-bind="attrs"
                v-on="on"
                @click="checkForm()"
                >등록</v-btn
              >
            </template>
            <v-card class="pt-3">
              <v-card-title class="py-3 text-h6 d-flex justify-center">
                등록하시겠습니까?
              </v-card-title>
              <v-card-actions>
                <v-btn color="green darken-1" text> 예 </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="submit = false">
                  아니오
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialog" persistent max-width="400">
            <template v-slot:activator="{ on, attrs }">
              <v-btn width="100px" v-bind="attrs" v-on="on">취소</v-btn>
            </template>
            <v-card class="pt-3">
              <v-card-title class="py-3 text-h6 d-flex justify-center">
                취소하시겠습니까?
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
      </v-sheet>
    </v-container>
  </v-app>
</template>

<script>
export default {
  props: ['componentValue'],
  components: {},
  name: 'AppMake',
  computed: {
    dateRangeText() {
      return this.date.join(' ~ ');
    },
  },
  data() {
    return {
      subject: null,
      timeSelect: '오전 12:00',
      address: null,
      calendarSelect: null,
      detail: null,
      attendees: null,
      date5: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),

      type: ['회의', '미팅', '출장', '휴가', '외근', '기타'],
      time: [
        '오전 12:00',
        '오전 01:00',
        '오전 02:00',
        '오전 03:00',
        '오전 04:00',
        '오전 05:00',
        '오전 06:00',
        '오전 08:00',
        '오전 09:00',
        '오전 10:00',
        '오전 11:00',
        '오후 12:00',
        '오후 01:00',
        '오후 02:00',
        '오후 03:00',
        '오후 04:00',
        '오후 05:00',
        '오후 06:00',
        '오후 07:00',
        '오후 08:00',
        '오후 09:00',
        '오후 10:00',
        '오후 11:00',
      ],
      dates: ['2018-09-15', '2018-09-20'],
      datepicker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),

      date: ['2018-09-15', '2018-09-20'],
      menu: false,
      select: { state: 'Florida', abbr: 'FL' },
      items: ['김이슬', '김삼슬', '김사슬', '김오슬', '김육슬'],
      calendar: ['내 캘린더', '선행연구팀'],
      work: ['오전반차', '오후반차', '연차', '병가'],
      count: 1,
      dialog: false,
      Type: null,
      vacationValue: false,
      submit: false,
      menu2: false,
      menu3: false,
      date3: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      date4: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
    };
  },

  mounted() {},

  methods: {
    checkForm() {
      if (
        this.subject == null ||
        this.Type == null ||
        this.attendees == null ||
        this.address == null ||
        this.calendarSelect == null ||
        this.detail == null
      ) {
        alert('입력값을 확인해주세요.');
      }
    },

    changeContent() {
      console.log('선택된 타입명', this.Type);
      if (this.Type == '휴가') {
        this.vacationValue = true;
      } else {
        this.vacationValue = false;
      }
    },

    logOut() {
      this.$emit('change', this.componentValue - 1);
    },
  },
};
</script>

<style lang="scss" scoped>
#container {
  position: sticky;
}
::v-deep .v-text-field__details {
  display: none;
}
::v-deep .v-input__slot {
  padding-bottom: 0px;
}
::v-deep .v-application--wrap {
  flex-direction: row;
}
</style>
