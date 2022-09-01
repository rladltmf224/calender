<template>
  <v-app>
    <v-row justify="center" align="center">
      <v-card
        width="500"
        class="pa-6 mx-12 d-flex flex-column"
        height="500"
        outlined
      >
        <div class="d-flex justify-center pt-4 pb-6">
          <h3>선행연구팀 공유캘린더</h3>
        </div>
        <div class="d-flex flex-column">
          <h5 class="pb-2">아이디</h5>
          <v-text-field
            placeholder="아이디를 입력해주세요."
            outlined
          ></v-text-field>
        </div>
        <div class="d-flex flex-column">
          <h5 class="pb-2">비밀번호</h5>
          <v-text-field
            placeholder="비밀번호를 입력해주세요."
            outlined
            :type="show1 ? 'text' : 'password'"
          ></v-text-field>
        </div>
        <div class="d-flex justify-center mb-12">
          <v-btn block class="primary" height="56px" @click="goMain()"
            >로그인</v-btn
          >
        </div>
        <div class="d-flex justify-center pt-8" top="30px">
          <h5>
            아직 회원이 아니신가요?
            <v-btn text color="primary pa-0 ma-0" @click="goRegi()"
              >회원가입</v-btn
            >
          </h5>
        </div>
      </v-card>
    </v-row>
    <v-row justify="center" v-if="!count">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              ref="name"
              v-model="name"
              :rules="[() => !!name || 'This field is required']"
              :error-messages="errorMessages"
              label="Full Name"
              placeholder="John Doe"
              required
            ></v-text-field>
            <v-text-field
              ref="address"
              v-model="address"
              :rules="[
                () => !!address || 'This field is required',
                () =>
                  (!!address && address.length <= 25) ||
                  'Address must be less than 25 characters',
                addressCheck,
              ]"
              label="Address Line"
              placeholder="Snowy Rock Pl"
              counter="25"
              required
            ></v-text-field>
            <v-text-field
              ref="city"
              v-model="city"
              :rules="[() => !!city || 'This field is required', addressCheck]"
              label="City"
              placeholder="El Paso"
              required
            ></v-text-field>
            <v-text-field
              ref="state"
              v-model="state"
              :rules="[() => !!state || 'This field is required']"
              label="State/Province/Region"
              required
              placeholder="TX"
            ></v-text-field>
            <v-text-field
              ref="zip"
              v-model="zip"
              :rules="[() => !!zip || 'This field is required']"
              label="ZIP / Postal Code"
              required
              placeholder="79938"
            ></v-text-field>
            <v-autocomplete
              ref="country"
              v-model="country"
              :rules="[() => !!country || 'This field is required']"
              :items="countries"
              label="Country"
              placeholder="Select..."
              required
            ></v-autocomplete>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <v-btn text> Cancel </v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip v-if="formHasErrors" left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    class="my-0"
                    v-bind="attrs"
                    @click="resetForm"
                    v-on="on"
                  >
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn color="primary" text @click="submit"> Submit </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: 'AppLogin',

  data() {
    return {
      count: true,
    };
  },

  mounted() {},

  methods: {
    goMain() {
      this.$router.push('./AppMain'); // <router-link to="/home">홈</router-link>
    },
    goRegi() {
      this.$router.push('./AppRegister'); // <router-link to="/home">홈</router-link>
    },
  },
};
</script>

<style></style>
