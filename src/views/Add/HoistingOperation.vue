<template>
  <div class="HoistingOperation">
    <mt-header title="吊装作业情况">
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

    </mt-header>
    <div class="main">
      <div class="nav">
        <div class="block">
          <!-- <span class="demonstration">默认</span> -->
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </div>
        <el-radio
          v-model="radio"
          label="1"
        >只看未生效</el-radio>
      </div>
      <div class="qzj">
        <span>汽车起重机吊装指令</span>
        <span>(0)</span>
      </div>
      <div class="main_mid">
        <div class="mid_tit">
          <span>履带起重机吊装令</span>
          <span>(2)</span>
        </div>
        <div class="mid_content">
          <div class="content_one">
            <p><span>11:00</span>
              <span>2020:11.30</span>
              <span>履带式起重机</span>
              <span>QUY50A</span>
            </p>
            <p><span>13:00</span>
              <span>项目设备编码：<span>QZA-0-054-Z355</span></span>

              <span>司机：氧化三</span>
            </p>
          </div>
          <div class="content_two">
            <p><span>11:00</span>
              <span>2020:11.30</span>
              <span>履带式起重机</span>
              <span>QUY50A</span>
            </p>
            <p><span>13:00</span>
              <span>项目设备编码：<span>QZA-0-054-Z355</span></span>

              <span>司机：氧化三</span>
            </p>
          </div>
        </div>

      </div>
      <div class="mens">
        <span>履带起重机吊装令</span>
        <span>(2)</span>
      </div>
      <div class="tas">
        <span>履带起重机吊装令</span>
        <span>(2)</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "HoistingOperation",
  data() {
    return {
      value1: "",
      radio: "",
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang='scss' scoped>
.HoistingOperation {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #f5f3f4;

  .nav {
    padding: 0 10px;
    display: flex;
    background-color: #fff;
    justify-content: space-between;
    overflow: hidden;
    .el-radio:last-child {
      width: 300px;
      margin-left: 10px;
    }
    .el-radio:last-child {
      line-height: 40px;
      margin-right: 10px;
    }
  }
  .qzj {
    box-sizing: border-box;
    overflow: hidden;
    padding: 0 10px;
    height: 47px;
    margin-top: 20px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    line-height: 47px;
  }
  .main_mid {
    margin-top: 20px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    height: 182px;
    width: 100%;
    .mid_tit {
      height: 47px;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      line-height: 47px;
    }
    .mid_content {
      // padding: 0 10px;
      display: flex;
      flex-direction: column;
      .content_one {
        display: flex;
        border-bottom: solid 2px #f5f3f4;
        // justify-content: space-between;
        flex-direction: column;
        & > p {
          width: 100%;
          display: flex;
          justify-content: space-between;
          &:nth-of-type(2) {
            margin-top: 10px;
            margin-bottom: 10px;
          }
        }
      }
      .content_two {
        display: flex;
        margin-top: 10px;
        // border-bottom: solid 2px #f5f3f4;
        // justify-content: space-between;
        flex-direction: column;
        & > p {
          width: 100%;
          display: flex;
          justify-content: space-between;
          &:nth-of-type(2) {
            margin-top: 10px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
  .mens {
    padding: 0 10px;
    margin-top: 20px;
    height: 47px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    line-height: 47px;
  }
  .tas {
    padding: 0 10px;
    margin-top: 20px;   
    height: 47px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    line-height: 47px;
  }
}
</style>