<template>
  <v-app>
    <!-- 전체 -->
    <v-container class="pa-0" fluid>
      <!-- 콘텐츠영역 -->
      <v-sheet>
        <!-- 탑 -->
        <v-sheet class="px-6 py-8 d-flex align-center justify-space-between">
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
        <v-sheet class="blue-grey lighten-5">dd</v-sheet>
      </v-sheet>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'AppDelete',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
