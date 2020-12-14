<template>
  <div id="app">
    <div class="header3">
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
      <div class="mechanical_file">
        <div class="mechanical_type">
          <p><span>使用中</span><span>昂贵的删除· 产生新的6.66</span></p>
          <p><span>DGJ-08-155-12</span>
            <span>大型</span>
            <span>信息为完善</span>
          </p>
        </div>
        <div class="mechanical_date">
          <p><span>所属工地：大悲~大难</span><span>进场日期：2020.10.56</span></p>
          <p><span>申报人：两露露</span><span>申报时间：1020-20-5 11：80</span></p>
        </div>
      </div>
      <div class="Switch_info">
        <ul>
          <li class="active">设备信息</li>
          <li>设备资料</li>
          <li>检查及伪报</li>
          <li>更多信息</li>
        </ul>
      </div>
    </div>

    <div class="main3">
      <div class="xxs">
        <div class="huakuai">
          <div class="Basic_Information">
            <h2>基本信息</h2>
            <ul>
              <li><span>机械名称</span><span>涂鸦你睡双模盾构及</span></li>
              <li><span>规格型号</span><span>直径6.66</span></li>
              <li><span>项目设备编码</span><span>DGJ-08-112-Z215</span></li>
              <li><span>属性</span><span>大</span></li>
            </ul>
            <div class="look_More">
              查看更多<i class="icon iconfont icon-angle-down"></i>
            </div>
          </div>
          <div class="Basic_Information">
            <h2>基本信息</h2>
            <ul>
              <li><span>机械名称</span><span>涂鸦你睡双模盾构及</span></li>
              <li><span>规格型号</span><span>直径6.66</span></li>
              <li><span>项目设备编码</span><span>DGJ-08-112-Z215</span></li>
              <li><span>属性</span><span>大</span></li>
            </ul>
            <div class="look_More">
              查看更多<i class="icon iconfont icon-angle-down"></i>
            </div>
          </div>
          <div class="Basic_Information">
            <h2>基本信息</h2>
            <ul>
              <li><span>机械名称</span><span>涂鸦你睡双模盾构及</span></li>
              <li><span>规格型号</span><span>直径6.66</span></li>
              <li><span>项目设备编码</span><span>DGJ-08-112-Z215</span></li>
              <li><span>属性</span><span>大</span></li>
            </ul>
            <div class="look_More">
              查看更多<i class="icon iconfont icon-angle-down"></i>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$route.params;
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}

@function px($px) {
  @return $px / 75 * 1rem;
}
#app {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  .header3 {
    height: px(556);
    width: 100%;
    // background-color: #2887ff;
    // border-bottom: solid px(1) #000;
    .level_one {
      height: px(110);
      width: 100%;
      font-size: px(38);
      background-color: #2887ff;
      color: white;
      // display: flex;
      // justify-content: space-around;
      position: relative;
      padding: 0 px(45);
      box-sizing: border-box;
      line-height: px(98);
      & > span {
        &:nth-of-type(1) {
          float: left;
        }

        &:nth-of-type(3) {
          float: right;
        }

        &:nth-of-type(2) {
          position: absolute;
          left: px(200);
        }
      }
    }
    .mechanical_file {
      display: flex;
      flex-direction: column;
      padding: 0 px(45);
      .mechanical_type {
        height: px(152);
        width: 100%;
        & > p {
          &:nth-of-type(1) {
            & > span {
              &:nth-of-type(1) {
                font-size: px(16);
                display: inline-block;
                width: px(83);
                height: px(44);
                text-align: center;
                line-height: px(44);
                border-radius: px(5);
                color: white;
                background-color: #2988ff;
              }
              &:nth-of-type(2) {
                font-size: px(30);
                margin-left: px(15);
              }
            }
          }
          &:nth-of-type(2) {
            margin-top: px(30);
            font-size: px(18);
            & > span {
              &:nth-of-type(2) {
                width: px(68);
                height: px(40);
                display: inline-block;
                border-radius: px(10);
                border: solid px(1) #6b2bdd;
                color: #6b2bdd;
                text-align: center;
                line-height: px(40);
              }
              &:nth-of-type(3) {
                width: px(128);
                height: px(40);
                display: inline-block;
                text-align: center;
                line-height: px(40);
                border-radius: px(15);
                border: solid px(1) #ccc;
                color: #ccc;
              }
            }
          }
        }
      }
      .mechanical_date {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: px(21);
        margin-top: px(50);
        & > p {
          color: #666666;
          display: flex;
          justify-content: space-between;

          &:nth-of-type(2) {
            margin-top: px(30);
          }
        }
      }
    }
    .Switch_info {
      // flex-shrink: 6;
      margin-top: px(58);
      width: 100%;
      height: px(91);
      line-height: px(91);
      font-size: px(29);
      & > ul {
        display: flex;
        justify-content: space-evenly;
      }
      .active {
        color: #2988ff;
        border-bottom: solid px(1) #2988ff;
      }
    }
  }
  .main3 {
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .xxs {
      background-color: #f5f5f5;
      overflow: hidden;
      width: 100%;
      height: 100%;
      .huakuai {
        // background-color: #f5f5f5;
        // overflow: hidden;
        // width: 100%;
        // height: 100%;
        .Basic_Information {
          box-sizing: border-box;
          width: px(708);
          height: px(467);
          border-radius: px(20);
          margin: 0 auto;
          margin-top: px(21);
          background-color: white;
          font-size: px(26);
          padding: px(32);
          display: flex;
          flex-direction: column;
          & > h2 {
            height: px(31);
            margin-top: px(30);
          }
          & > ul {
            margin-top: px(42);
            & > li {
              & > span {
                display: inline-block;
                height: px(60);
                &:nth-of-type(1) {
                  width: px(250);
                }
              }
            }
          }
          .look_More {
            width: px(250);
            height: px(48);
            border-radius: px(19);
            background-color: #f2f2f2;
            margin: 0 auto;
            text-align: center;
            line-height: px(48);
          }
        }
      }
    }
  }
}
</style>