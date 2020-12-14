<template>
  <div class="HoistingOperation">
     <mt-header title="现场机械管理系统">
        <router-link
          to=""
          slot="left"
        >
          <i
            class="el-icon-arrow-left"
            @click="back"
          ></i>
        </router-link>
        <mt-button slot="right">
          <i class="el-icon-bell"></i>
        </mt-button>
        <div>
          123456
        </div>
      </mt-header>
  </div>
</template>

<script>
export default {
    name:'HoistingOperation',
    data(){
        return{

        }
    },
    methods:{
       back() {
      this.$router.go(-1);
    },
    }
}
</script>

<style lang='scss' scoped>

</style>