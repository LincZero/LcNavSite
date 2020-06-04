<template>
  <div class="box_site">
    <div>
      <button>
        <img src alt />
        <p>这是一个网站</p>
        <div class="tag l t">1</div>
        <div class="tag r t">2</div>
        <div class="tag l b">3</div>
        <div class="tag r b">4</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Box_Site"
};
</script>

<style lang="scss">
.box_site {
  $hei: 70px;
  $wid: 178px;
  $mar: 9px 8px;
  $radius: 3px;
  height: $hei;
  width: $wid;
  margin: $mar;
  float: left;
  div {
    height: $hei;
    width: $wid;
    position: relative;
  }
  button {
    height: $hei;
    width: $wid;
    border: none;
    cursor: pointer;
    background-color: bisque;
    border-radius: $radius;
    img {
      width: 32px;
      height: 32px;
      background: violet;
    }
    p {
      font-size: 16px;
      font-weight: bold;
      margin: 0;
      padding: 0;
    }
  }
  .tag {
    $mar: 3px;
    width: 30px;
    height: 15px;
    border-radius: 2px;
    position: absolute;
    background: blue;
    color: white;
    &.l {
      left: $mar;
    }
    &.r {
      right: $mar;
    }
    &.t {
      top: $mar;
    }
    &.b {
      bottom: $mar;
    }
  }
}
</style>