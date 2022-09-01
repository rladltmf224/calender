<template>
  <v-app>
    <!-- 전체 -->
    <v-container class="pa-0 ma-0" fluid height="100vh">
      <!-- 콘텐츠영역 -->
      <!-- 탑 -->
      <v-sheet
        class="px-6 py-8 d-flex align-center justify-space-between"
        style="height: 10vh"
      >
        <!-- 왼쪽 -->
        <div class="d-flex align-center" style="min-width: 570px">
          <!--  메뉴버튼 -->
          <v-btn icon class="pr-4"><i class="fa-solid fa-bars"></i></v-btn>
          <v-toolbar dense>
            <v-text-field
              placeholder="할일 검색"
              hide-details
              single-line
            ></v-text-field>
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-toolbar>
          <span class="pl-4">전체 할 일</span><span class="pl-3">|</span
          ><span class="pl-3">2</span
          ><v-btn class="ml-3" icon outlined color="primary"
            ><i class="fa-solid fa-rotate-right"></i
          ></v-btn>
        </div>
        <!-- 오른쪽 -->

        <div>
          <v-btn outlined color="primary"
            ><i class="fa-solid fa-calendar-days"></i>일정보기</v-btn
          >
        </div>
      </v-sheet>
      <v-divider></v-divider>

      <!-- 미들 -->
      <v-sheet class="d-flex flex-column grey lighten-4">
        <div class="pt-3 px-4">
          <v-toolbar>
            <v-btn
              icon
              @click="star = true"
              v-if="this.star == false"
              color="primary"
            >
              <v-icon>fa-regular fa-star</v-icon>
            </v-btn>

            <v-btn
              icon
              @click="star = false"
              v-if="this.star == true"
              color="primary"
            >
              <v-icon>fa-solid fa-star</v-icon>
            </v-btn>

            <v-text-field
              placeholder="내가 해야할 일을 기록해보세요."
              style="padding-right: 300px"
              hide-details
              single-line
            ></v-text-field>

            <v-btn icon>
              <v-icon>fa-solid fa-pen-to-square</v-icon>
            </v-btn>
          </v-toolbar>
        </div>
        <div class="d-flex flex-column align-center" style="padding-top: 300px">
          <i class="fa-solid fa-calendar-minus"></i>
          <h4 class="py-3">기록한 할 일이 없습니다.</h4>
          <span
            >캘린더에 내가 해야 할 일을 등록해서 편리하게 관리해보세요.</span
          >
        </div>
      </v-sheet>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'AppDelete',

  data() {
    return {
      star: false,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
