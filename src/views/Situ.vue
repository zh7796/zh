<template>
  <div class="situ">
    <header>
      <mt-header title="现场机械管理系统">
        <router-link to="" slot="left">
          <i class="el-icon-arrow-left" @click="back"></i>
        </router-link>
        <mt-button slot="right">
          <i class="el-icon-bell"></i>
        </mt-button>
      </mt-header>
    </header>
    <main>
      <mt-button type="primary" @click="add">+</mt-button>
      <!-- 弹出层 -->
      <van-button is-link @click="zhLt">日常检查</van-button>
      <van-popup v-model="show" position="right" :style="{ height: '100%' }">
        <div class="state">
          <p>状态</p>
          <div class="state_conter">
            <p>未申报</p>
            <p>未申报</p>
            <p>未申报</p>
            <p>未申报</p>
            <p>未申报</p>
            <p>未申报</p>
          </div>
        </div>
        <div class="nature">
          <p>属性</p>
          <div class="nature_conter">
            <p>特大机器</p>
            <p>特大机器</p>
            <p>特大机器</p>
          </div>
        </div>
        <div class="source">
          <p>来源</p>
          <div class="source_conter">
            <p>自由</p>
            <p>自由</p>
            <p>自由</p>
          </div>
        </div>
        <div class="affair">
          <button>重置</button>
          <button>默认</button>
        </div>
      </van-popup>
      <button type="primary" class="dzzy" @click="dzzy">吊装作业</button>
    </main>
  </div>
</template>

<script>
export default {
  name: "Situ",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    add() {
      this.$router.push({
        name: "AddFather",
      });
    },
    back() {
      this.$router.go(-1);
    },
    //张浩李涛按钮
    zhLt() {
      this.show = true;
    },
    back() {
      this.$router.go(-1);
    },
    dzzy() {
      this.$router.push({
        path: "HoistingOperation",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.dzzy {
  width: 70px;
  height: 40px;
  font-size: 16px;
  margin-left: 100px;
}
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
.van-popup--right {
  width: 200px;
  .state {
    width: 100%;
    height: 100px;
    padding: 5px;
    & > p {
      font-size: 15px;
      color: #000;
      font-weight: 500;
      width: 100%;
      height: 40px;
      line-height: 40px;
    }
    .state_conter {
      width: 100%;
      height: 60px;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      & > p {
        margin-right: 5px;
        width: 50px;
        height: 20px;
        background: #ccc;
        text-align: center;
        line-height: 20px;
        border-radius: 15px;
        margin-bottom: 5px;
      }
    }
  }
  .source {
    width: 100%;
    height: 60px;
    padding: 5px;
    & > p {
      font-size: 15px;
      color: #000;
      font-weight: 500;
      width: 100%;
      height: 40px;
      line-height: 40px;
    }
    .source_conter {
      width: 100%;
      height: 30px;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      & > p {
        margin-right: 5px;
        width: 50px;
        height: 20px;
        background: #ccc;
        text-align: center;
        line-height: 20px;
        border-radius: 15px;
        margin-bottom: 5px;
      }
    }
  }
  .nature {
    width: 100%;
    height: 60px;
    padding: 5px;
    & > p {
      font-size: 15px;
      color: #000;
      font-weight: 500;
      width: 100%;
      height: 40px;
      line-height: 40px;
    }
    .nature_conter {
      width: 100%;
      height: 30px;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      & > p {
        margin-right: 5px;
        width: 50px;
        height: 20px;
        background: #ccc;
        text-align: center;
        line-height: 20px;
        border-radius: 15px;
        margin-bottom: 5px;
      }
    }
  }
  .affair{
    display: flex;
    width: 100%;
    margin-top: 100px;
    &>button{
      width: 50%;
      height: 50px;
      text-align: center;
      line-height: 50px;
      border: 0;
      &:nth-child(1){
        background: #f6f6f6;
        color: #6f6f6f;
      }
       &:nth-child(2){
        background: #2a87ff;
        color: #fff;
      }
    }
  }
}
</style>