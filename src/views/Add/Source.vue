<template>
  <div class="source">
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
    <main>
      <div class="search">
        <mt-search
          cancel-text="取消"
          placeholder="按名称过滤"
        >
        </mt-search>
      </div>
      <div
        class="content"
        ref="content"
      >
        <div class="scroll">
          <div class="childs">
            <div
              class="child"
              v-show="!iconFlag"
              v-for="(item,index) in tree"
              :key="index"
            >
              <i
                class="el-icon-caret-bottom"
                v-show="item.isDelete"
              ></i>
              <i
                class="el-icon-caret-top"
                v-show="!item.isDelete"
              ></i>

              <span @click="child(item)">{{item.name}}</span>
              <div
                class="children"
                v-for="(items,ind) in item.children"
                :key="ind"
                v-show="item.isDelete"
                @click="children(items)"
              >
                {{items.name}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
//机械类别

import { Category } from "@/common/httpApi";
import BScroll from "better-scroll";
import { Indicator } from "mint-ui";
export default {
  name: "Source",
  data() {
    return {
      tree: [],
      iconFlag: false,
    };
  },
  async mounted() {
    Indicator.open("加载中...");
    let res = await Category();
    this.tree = res.result;
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.content, { click: true });
    });
    if (this.tree != []) {
      Indicator.close();
    }
  },
  methods: {

    child(val) {
      val.isDelete = !val.isDelete;
    },
    children(val) {
      this.$router.push({
          name:'Add',params:{Sourceval:val}
      })
    },
    back() {
      console.log(1);
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.source {
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