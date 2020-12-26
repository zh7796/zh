<template>
  <div class="home">
    <header>
      <mt-header title="现场机械管理系统">
        <router-link slot="left" to="">
          <i class="el-icon-s-operation"></i>
        </router-link>
        <mt-button slot="right">
          <i class="el-icon-bell"></i>
        </mt-button>
      </mt-header>
    </header>
    <main>
      <div
        class="nav"
        @click="nav"
      >
        地铁12号线建设工程黄俊杰修改
        <i class="
el-icon-arrow-down"></i>
      </div>
      <div class="main-top">
        <div>待办事项</div>
        <div class="top-red">待审核机械40</div>
      </div>
      <div class="main-center">
        <div class="center-top">最新登记机械</div>
        <div class="center-childs" ref="childs">
          <div class="scroll">
            <div
              class="center-child"
              v-for="(item, index) in mechanical"
              :key="index"
            >
              <div class="child-t">
                <div class="t-btn">使用中</div>
                <div class="t-txt">
                  {{ item.machineryTypeName }}
                </div>
                <div class="t-txt">
                  {{ item.specification }}
                </div>
              </div>
              <div class="child-c">
                <div class="c-txt">
                  {{ item.projectEquipmentCode }}
                </div>
                <div class="c-red" v-if="item.remark === '特'">特种</div>
                <div class="c-p" v-else-if="item.remark === '大'">大型</div>
                <div class="c-else" v-else>
                  <div class="c-red">特种</div>
                  <div class="c-p">大型</div>
                </div>

                <div class="c-c">信息未完善</div>
              </div>
              <div class="child-b">
                <div>
                  {{ item.projectName }}
                </div>
                <div>进场日期：{{ item.actualApproachDate }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { getJixie } from "../common/httpApi";
export default {
  name: "Home",
  data() {
    return {
      mechanical: [],
    };
  },
  async mounted() {
    let res = await getJixie();
    this.mechanical = res.result.content;
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.childs);
    });
    console.log(this.$route.params);
  },
  methods: {
    nav() {
      this.$router.push({
        path: "/about",
      });
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(to bottom, #2988ff, #fff);
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
    .el-icon-s-operation,
    .el-icon-bell {
      font-size: 21px;
    }
  }
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .nav {
      width: 100%;
      height: 38px;
      line-height: 38px;
      text-align: center;
      color: #fff;
      font-size: 15px;
    }
    .main-top {
      width: 355px;
      height: 44px;
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      line-height: 44px;
      padding: 0 11px;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 10px;
      .top-red {
        color: red;
      }
    }
    .main-center {
      overflow: hidden;
      width: 355px;
      margin: 0 auto;
      border-radius: 10px;
      margin-top: 7px;
      flex: 1;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      .center-top {
        width: 100%;
        height: 50px;
        line-height: 50px;
        padding-left: 15px;
        font-size: 16px;
      }
      .center-childs {
        overflow: hidden;
        flex: 1;
        .scroll {
          .center-child {
            width: 100%;
            height: 110px;
            border-bottom: 1px solid rgb(201, 195, 195);
            padding: 15px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            .child-t {
              display: flex;
              margin-bottom: 8px;
              .t-btn {
                width: 36px;
                height: 18px;
                font-size: 9px;
                color: #fff;
                background-color: #2988ff;
                border-radius: 10px;
                text-align: center;
                line-height: 18px;
              }
              .t-txt {
                font-size: 15px;
                margin-right: 2px;
              }
            }
            .child-c {
              display: flex;
              align-items: center;
              font-size: 10px;
              margin-bottom: 14px;
              .c-txt {
                font-size: 9px;
              }
              .c-red {
                width: 36px;
                height: 17px;
                color: #b44f57;
                border: solid 1px #b44f57;
                border-radius: 10px;
                text-align: center;
                line-height: 17px;
                margin: 0 4px;
              }
              .c-else {
                display: flex;
              }
              .c-p {
                width: 36px;
                height: 17px;
                color: #9755df;
                border: solid 1px #9755df;
                border-radius: 10px;
                text-align: center;
                line-height: 17px;
                margin: 0 4px;
              }
              .c-c {
                width: 66px;
                height: 17px;
                color: #dcdcdc;
                border: solid 1px #dcdcdc;
                border-radius: 10px;
                text-align: center;
                line-height: 17px;
              }
            }
            .child-b {
              display: flex;
              justify-content: space-between;
            }
          }
        }
      }
    }
  }
}
</style>
