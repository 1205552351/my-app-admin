<template >
  <div class="c">
    <el-card class="box-card" v-for="o in 3" :key="o">
      <div slot="header" class="clearfix">
        <span v-if="o === 1">商品总览</span>
        <span v-if="o === 2">用户总览</span>
        <span v-if="o === 3">销售总览</span>
      </div>
      <div class="text item">
        {{ "列表内容 " }}
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.c {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 400px;
  /* margin-left: 20px; */
}
</style>
