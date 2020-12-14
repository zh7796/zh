<template>
  <div class="add">
    <header>
      <mt-header title="新增机械">
        <router-link
          slot="left"
          to=""
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
    <main ref="add">
      <div class="scroll">
        <el-steps
          :active="active"
          finish-status="success"
        >
          <el-step title="基本信息"></el-step>
          <el-step title="完善信息"></el-step>
        </el-steps>

        <mt-cell
          title="机械类别"
          is-link
          :value="source==='' ? '请选取' :source"
          to="/source"
        >
        </mt-cell>
        <div @click="JxType">
          <mt-cell
            title="机械名称-型号"
            is-link
            
            :value="ModelVal==='' ? '请选取' :ModelVal"
          >
          </mt-cell>
        </div>
        <mt-field
          label="项目设备编码"
          placeholder="请填写"
        ></mt-field>
        <mt-cell
          title="机械来源"
          is-link
          value="请选取"
        >
        </mt-cell>
        <mt-cell
          title="产权单位"
          is-link
          value="请选取"
        >
        </mt-cell>
        <mt-field
          label="车牌号"
          placeholder="请填写"
        ></mt-field>
        <mt-cell
          title="现场照片"
          is-link
          value=""
        >
        </mt-cell>
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img
            width="100%"
            :src="dialogImageUrl"
            alt=""
          >
        </el-dialog>
        <span>最多上传10张</span>
        <mt-field
          label="实际进场日期"
          placeholder="2020-12-11"
          type="date"
        ></mt-field>
        <mt-field
          label="拟退场日期"
          placeholder="选择日期"
          type="date"
        ></mt-field>
        <mt-cell
          title="设备管理员"
          is-link
          value="请选取"
        >
        </mt-cell>
        <mt-cell
          title="使用单位"
          is-link
          value="请选取"
        >
        </mt-cell>
        <mt-cell
          title="安装拆除单位"
          is-link
          value="请选取"
        >
        </mt-cell>
        <el-input placeholder="用途"></el-input>
        <mt-button
          type="primary"
          @click="next"
        >保存并继续</mt-button>
      </div>

    </main>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Add",
  data() {
    return {
      active: 0,
      dialogImageUrl: "",
      dialogVisible: false,
      source: "",
      ModelVal: "",
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    back() {
      this.$router.go(-2);
    },
    //机械型号跳转页面
    JxType() {
      if (this.source !== "") {
        this.$router.push({
          name: "Model",
        });
      } else {
        alert("请选择机械型号");
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.add, { click: true });
    });
    this.source = this.$route.params.Sourceval
      ? JSON.parse(JSON.stringify(this.$route.params.Sourceval.name))
      : "";
    this.ModelVal = this.$route.params.ModelVal
      ? this.$route.params.ModelVal
      : "";
    console.log(this.$route.params.ModelVal);
  },
};
</script>

<style lang="scss">
.add {
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
    overflow: hidden;
  }
}
</style>