<template>
  <div class="box_site" v-if="$store.state.abroad || !item.abroad">
    <div class="relative">
      <button @click="SiteClick">
        <div class="static">
          <img :src="item.favicon" alt="Error" />
          <p>{{item.webName}}</p>
        </div>
        <div class="tag lt" v-if="item.abroad">
          <i class="el-icon-s-promotion"></i>
        </div>
        <div class="tag rt" v-if="item.tag">
          <p>{{item.tag}}</p>
        </div>
        <div class="tag lb" v-if="item.lang!='zh'">
          <p>{{item.lang}}</p>
        </div>
        <div class="tag rb">
          <p>{{item.clickRate}}</p>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Box_Site",
  props: {
    item: Object
  },
  methods: {
    SiteClick() {
      if (true) {
        // Search IS NULL
        window.open(this.item.href);
      }
    }
  }
};
</script>

<style lang="scss">
.box_site {
  $hei: 70px;
  $wid: 178px;
  $mar: 9px 8px;
  $radius: 6px;
  height: $hei;
  width: $wid;
  margin: $mar;
  div {
    height: $hei;
    width: $wid;
    position: relative;
  }
  button {
    height: $hei;
    width: $wid;
    padding: 0;
    border: none;
    cursor: pointer;
    border-radius: $radius;
    background-color: #fff;
    .static {
      margin: 0;
      padding: 7px 0 0 0;
      height: 100%;
      box-sizing: border-box;
      img {
        width: 32px;
        height: 32px;
      }
      p {
        font-size: 16px;
        font-weight: bold;
        margin-top: 5px;
      }
    }
  }
  .tag {
    $mar: 3px;
    $mar2: 49px;// 25px;
    width: 30px;
    height: 17px;
    border-radius: 5px;
    position: absolute;
    color: white;
    opacity: 0.9;
    p {
      font-size: 14px;
      line-height: 17px;
    }
    &.lt {
      left: $mar;
      top: $mar;
      background: $color-pink;
    }
    &.rt {
      width: 38px;
      right: $mar;
      top: $mar;
      background: $color-el-blue;
    }
    &.lb {
      left: $mar;
      top: $mar2;
      background: $color-el-orange;
    }
    &.rb {
      right: $mar;
      top: $mar2;
      background: $color-el-green;
    }
  }
}
</style>