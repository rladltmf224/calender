<template>
  <v-app>
    <v-row justify="center" align="center">
      <v-card
        width="500"
        class="py-auto pa-6 mx-12 d-flex flex-column"
        height="600"
        outlined
      >
        <div class="d-flex justify-center pt-4 pb-6"><h3>회원가입</h3></div>

        <v-form ref="form" lazy-validation>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="user_id"
                label="아이디*"
                :rules="user_id_rule"
                :disabled="state == 'ins' ? false : true"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="user_nm"
                label="이름*"
                :rules="user_nm_rule"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="user_pw"
                label="비밀번호*"
                type="password"
                :rules="user_pw_rule"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="user_pw_chk"
                label="비밀번호 확인*"
                type="password"
                :rules="user_pw_rule2"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
        <!-- 회원가입버튼 -->
        <div class="d-flex justify-center mb-12 pt-10">
          <v-dialog v-model="dialog" persistent max-width="400">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                block
                class="primary"
                height="56px"
                @click="goMain()"
                >회원가입</v-btn
              >
            </template>
            <v-card class="pt-3" v-if="checkVal">
              <v-card-title class="py-3 text-h6 d-flex justify-center">
                회원가입이 완료되었습니다.
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <router-link to="/" style="text-decoration: none"
                  ><v-btn color="green darken-1" text>ok</v-btn></router-link
                >
              </v-card-actions>
            </v-card>
            <v-card class="pt-3" v-if="!checkVal">
              <v-card-title class="py-3 text-h6 d-flex justify-center">
                입력하신 내용을 다시 확인해주세요.
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialog = false">
                  ok
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-card>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: '0817AppLogin',

  data() {
    return {
      dialog: false,
      checkVal: false,
      state: 'ins',
      authList: [
        { name: '관리자', value: 'A' },
        { name: '일반 사용자', value: 'M' },
      ],
      user_id: '',
      user_id_rule: [
        (v) => !!v || '아이디는 필수 입력사항입니다.',
        (v) =>
          /^[a-zA-Z0-9]*$/.test(v) || '아이디는 영문+숫자만 입력 가능합니다.',
        (v) =>
          !(v && v.length >= 15) || '아이디는 15자 이상 입력할 수 없습니다.',
      ],
      user_nm: '',
      user_nm_rule: [
        (v) => !!v || '이름은 필수 입력사항입니다.',
        (v) => !(v && v.length >= 30) || '이름은 30자 이상 입력할 수 없습니다.',
        (v) =>
          !/[~!@#$%^&*()_+|<>?:{}]/.test(v) ||
          '이름에는 특수문자를 사용할 수 없습니다.',
      ],
      user_pw: '',
      user_pw_chk: '',
      user_pw_rule: [
        (v) =>
          this.state === 'ins'
            ? !!v || '패스워드는 필수 입력사항입니다.'
            : true,
        (v) =>
          !(v && v.length >= 30) || '패스워드는 30자 이상 입력할 수 없습니다.',
      ],
      user_pw_rule2: [
        (v) =>
          this.state === 'ins'
            ? !!v || '패스워드는 필수 입력사항입니다.'
            : true,
        (v) =>
          !(v && v.length >= 30) || '패스워드는 30자 이상 입력할 수 없습니다.',
        (v) => v === this.user_pw || '패스워드가 일치하지 않습니다.',
      ],
      user_auth: '',
      user_auth_rule: [(v) => !!v || '권한은 필수 선택 사항입니다.'],
      user_desc: '',
      user_desc_rule: [
        (v) =>
          !(v && v.length >= 100) || '설명은 100자 이상 입력할 수 없습니다.',
      ],
    };
  },

  mounted() {},

  methods: {
    goMain() {
      const validate = this.$refs.form.validate();
      if (validate) {
        this.checkVal = true;
      } else {
        this.dialog = false;
      }
    },
  },
};
</script>

<style></style>
