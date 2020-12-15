<template>
  <div class="every">
    <header>
      <mt-header title="日常检查情况">
        <router-link to="" slot="left">
          <i class="el-icon-arrow-left" @click="back"></i>
        </router-link>
        <mt-button slot="right">
          <i class="el-icon-bell"></i>
        </mt-button>
      </mt-header>
    </header>
    <div class="header-bottom">
      <div class="active">今日任务</div>
      <div>周任务</div>
    </div>
    <main>
      <div class="list">
        <div class="table">
          <span class="tit">盾构机日常检查表</span>
          <span class="num">执行(0/16)</span>
        </div>
        <div class="list_item">
          <div class="table1">
            <span class="day">日检</span>
            <span class="name">2020.12.14土压平衡盾构机直</span>
            <span class="wait">待查</span>
          </div>
          <div class="taks">项目设备编码:111</div>
        </div>
        <div class="list_item">
          <div class="table1">
            <span class="day">日检</span>
            <span class="name">2020.12.14土压平衡盾构机直</span>
            <span class="wait">待查</span>
          </div>
          <div class="taks">项目设备编码:111</div>
        </div>
        <div class="list_item">
          <div class="table1">
            <span class="day">日检</span>
            <span class="name">2020.12.14土压平衡盾构机直</span>
            <span class="wait">待查</span>
          </div>
          <div class="taks">项目设备编码:111</div>
        </div>
        <div class="more">
          <p class="more_name">
            查看更多
            <i class="el-icon-bell"></i>
          </p>
        </div>
      </div>
      <div class="list">
        <div class="table">
          <span class="tit">盾构机日常检查表</span>
          <span class="num">执行(0/16)</span>
        </div>
        <div class="list_item">
          <div class="table1">
            <span class="day">日检</span>
            <span class="name">2020.12.14土压平衡盾构机直</span>
            <span class="wait">待查</span>
          </div>
          <div class="taks">项目设备编码:111</div>
        </div>
        <div class="list_item">
          <div class="table1">
            <span class="day">日检</span>
            <span class="name">2020.12.14土压平衡盾构机直</span>
            <span class="wait">待查</span>
          </div>
          <div class="taks">项目设备编码:111</div>
        </div>
        <div class="list_item">
          <div class="table1">
            <span class="day">日检</span>
            <span class="name">2020.12.14土压平衡盾构机直</span>
            <span class="wait">待查</span>
          </div>
          <div class="taks">项目设备编码:111</div>
        </div>
        <div class="more">
          <p class="more_name">
            查看更多
            <i class="el-icon-bell"></i>
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Every",
  data() {
    return {};
  },
  methods: {
    back() {
      console.log(111);
      this.$router.go(-1)
    },
  },
};
</script>

<style lang="scss">
.every {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgb(241, 238, 238);
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
  .header-bottom {
    width: 100%;
    height: 50px;
    display: flex;
    line-height: 50px;
    justify-content: center;
    background: #fff;
    div {
      margin: 0 15px;
      font-size: 14px;
    }
    .active {
      color: #2988ff;
      border-bottom: 1px solid #246ce9;
    }
  }
  main {
    flex: 1;
    overflow: hidden;
    overflow-y: auto;
    .list {
      width: 100%;
      height: auto;
      margin-top: 20px;
      background: #fff;
      .table {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 15px;
        padding: 10px 30px 0 30px;
        .num {
          color: #dd972d;
        }
      }
      .list_item {
        padding: 15px 30px;
        height: auto;
        border-bottom: 1px solid #ccc;

        .table1 {
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          font-size: 15px;
          padding: 10px 0;
          position: relative;
          .day {
            display: inline-block;
            width: 42px;
            height: 20px;
            background: #d7e8f8;
            color: #6f95dc;
            text-align: center;
            border-radius: 3px;
            margin-right: 13px;
          }
          .name {
            width: 180px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .wait {
            position: absolute;
            right: 0;
            top: 10px;
            font-size: 15px;
            color: #e73348e7;
          }
        }
        .taks {
          width: 100%;
          height: 30px;
          line-height: 30px;
          font-size: 15px;
        }
      }
      .more {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        .more_name {
          width: 200px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          background: #f1f3f2;
          border-radius: 20px;
          font-size: 15px;
        }
      }
    }
  }
}
</style>