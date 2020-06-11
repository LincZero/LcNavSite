<template>
  <div id="right">
    <!-- <div>
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div> -->
    <div>
      <el-button icon="el-icon-user-solid" circle />
    </div>
    <div>
      <el-button icon="el-icon-s-promotion" circle />
    </div>
    <div>
      <el-button icon="el-icon-s-tools" circle />
    </div>
    <div>
      <el-button icon="el-icon-s-home" circle />
    </div>
    <div>
      <el-button icon="el-icon-star-on" circle />
    </div>
    <div>
      <el-button icon="el-icon-share" circle />
    </div>
    <div>
      <el-button icon="el-icon-warning" circle />
    </div>
  </div>
</template>

<style lang="scss">
// $header-hei
#right {
  // margin-top: -$header-hei;
  height: 100%;
  float: right;
  box-sizing: border-box;
  padding-right: 10px;
  > div {
    margin-top: 10px;
  }
}
</style>