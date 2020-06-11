<template>
  <div class="box_bili">
    <div class="img">
      <img :src="item.pic" alt="Error" />
      <div class="tag">
        <div>
          <i class="el-icon-finished"></i>
          <p>{{item.s_like}}</p>
        </div>
        <div>
          <i class="el-icon-star-off"></i>
          <p>{{item.s_favorite}}</p>
        </div>
        <div>
          <i class="el-icon-view"></i>
          <p>{{item.s_view}}</p>
        </div>
      </div>
    </div>
    <div class="text">
      <p>{{item.title}}</p>
    </div>
    <div class="label">
      <div class="tag">
        <i class="el-icon-collection-tag" style="display: inline-block;"></i>
        <p style="display: inline-block;margin-left:2px">{{item.class}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Box_Bili",
  props: {
    item: Object
  }
};
</script>

<style lang="scss">
.box_bili {
  $radius: 6px;
  border-radius: $radius;
  overflow: hidden;
  height: 190px;
  width: 206px;
  background-color: #ffffff;
  float: left;
  margin: 5px;
  .img {
    position: relative;
    height: 116px;
    width: 206px;
    img {
      height: 100%;
      width: 100%;
    }
    .tag {
      position: absolute;
      left: 3px;
      bottom: 2px;
      color: aliceblue;
      font-size: 14px;
      font-weight: bolder;
      text-shadow: 1px 1px 1px #aaaaaa;
      text-align: left;
      > div > * {
        display: inline-block;
      }
      p {
        margin-left: 3px;
      }
    }
  }
  .text {
    box-sizing: border-box;
    height: 50px;
    padding: 5px;
    font-size: 15px;
    line-height: 21px;
    overflow: hidden;
    text-overflow: ellipsis;
    // white-space: nowrap;
  }
  .label {
    margin-left: 4px;
    height: 24px;
    text-align: left;
    .tag {
      display: inline-block;
      width: auto;
      background-color: $color-el-blue;
      color: aliceblue;
      font-size: 14px;
      border-radius: 3px;
      padding: 0 4px;
    }
  }
}
</style>