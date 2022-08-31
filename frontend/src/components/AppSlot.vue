<template>
    <div>
        <!-- 한 칸 -->
        <div class="d-flex  justify-center  ">
        <!-- 텍스트 -->
        <v-col cols="1" class="mb-4  ">
        <span class=""><slot name="name"></slot></span>
        </v-col>
        <!-- 인풋 -->
        <v-col cols="9" class="pa-0 ma-0  ">
        <slot name="input">  <v-text-field
            placeholder="내용을 입력해주세요."
            outlined
            dense
            class="pa-0 ma-0 "
          ></v-text-field></slot>
         </v-col>
         </div>



         </div>
</template>

<script>
export default {
    name: '0817AppSlot',
    components:{},
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>