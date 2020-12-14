<template>
  <div class="situ">
    <header>
      <mt-header title="现场机械管理系统">
        <router-link
        to=""
          slot="left"
        >
          <i class="el-icon-arrow-left" @click="back"></i>
        </router-link>
        <mt-button slot="right">
          <i class="el-icon-bell"></i>
        </mt-button>
      </mt-header>
    </header>
    <main>
      <mt-button
        type="primary"
        @click="add"
      >+</mt-button>
      <mt-button
        type="primary"
        @click="zhLt"
      >张浩李涛</mt-button>
    </main>
  </div>
</template>

<script>
export default {
  name: "Situ",
  methods: {
    add() {
      this.$router.push({
        name: "AddFather",
      });
    },
          back(){
      this.$router.go(-1)
  },
  //张浩李涛按钮
  zhLt(){

  }
  },
};
</script>

<style lang="scss" scoped>
.situ {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    height: 45px;
    .mint-header {
      background-color: #2988ff;
    }
    .mint-header-title {
      font-size: 17px;
    }
    .el-icon-arrow-left,
    .el-icon-bell {
      font-size: 21px;
    }
  }
}
</style>