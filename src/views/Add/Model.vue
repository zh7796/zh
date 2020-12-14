<template>
  <div class="model">
    <header>
      <mt-header title="组织结构">
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
    </header>
    <main ref="content">
      <div class="scroll">
        <div
          v-for="(item,index) in names"
          :key="index"
          @click="ModelClick(item.name,item.specification)"
        >
          <mt-cell
            :title="item.name+item.specification "
            :value="'单位:'+item.unit"
            :key="index"
          ></mt-cell>
        </div>

      </div>
    </main>
  </div>
</template>

<script>
//机械类别

import { getNames } from "@/common/httpApi";
import BScroll from "better-scroll";
import { Indicator } from "mint-ui";
export default {
  name: "Model",
  data() {
    return {
      names: [],
      iconFlag: false,
    };
  },
  async mounted() {
    Indicator.open("加载中...");
    let res = await getNames({ id: "1230029003514249217" });
    this.names = res.data.result.records;
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.content, { click: true });
    });
    if (this.names != []) {
      Indicator.close();
    }
  },
  methods: {
    back() {
      console.log(1);
      this.$router.go(-1);
    },
    ModelClick(a, b) {
      let txt = a + b;
      console.log(txt);
      this.$router.push({
        name: "Add",
        params: { ModelVal: txt },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.model {
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
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .search {
      text-align: center;
      font-size: 15px;
      width: 100%;
      height: 47px;
      overflow: hidden;
      .mint-search {
        height: 47px;
      }
      .mintui {
        font-size: 15px;
      }
      .mint-searchbar-core {
        font-size: 15px;
      }
      .mint-searchbar-inner {
        text-align: center;
      }
    }
    .content {
      flex: 1;
      overflow: hidden;
      font-size: 15px;
      .childs {
        padding-left: 25px;
        .child {
          padding-left: 47px;
          margin-bottom: 20px;
          margin-top: 30px;
          .children {
            padding-left: 87px;
            margin-top: 20px;
          }
        }
      }
    }
  }
}
</style>