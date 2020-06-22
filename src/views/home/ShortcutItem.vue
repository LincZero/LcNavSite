<template>
  <div class="shortcutItem">
    <button :title="item.webName">
      <img v-lazy="img" alt="Error" />
    </button>
    <p>{{item.webName}}</p>
    <div class="delete" v-if="editAble">
      <a @click="deleteItem">
        <i class="el-icon-error" style="color:#f56c6c"></i>
      </a>
    </div>
  </div>
</template>

<script>
import findFavicon from "@/common/findFavicon.js"
export default {
  name: "ShortcutItem",
  props: {
    index: Number,
    item: Object,
    editAble: Boolean
  },
  computed: {
    img() {
      return this.item.favicon ? this.item.favicon : findFavicon(this.item.href);
    }
  },
  methods:{
    deleteItem(){
      this.$emit("deleteDiy", this.index);
    }
  }
};
</script>

<style lang="scss">
.shortcutItem {
  position: relative;
  width: 100px;
  height: 80px;
  margin: 10px;
  button {
    height: 50px;
    border-radius: 25px;
    overflow: hidden;
    background: #fff;
    img {
      margin: 10px;
      width: 30px;
      height: 30px;
    }
  }
  p {
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .delete {
    position: absolute;
    top: 0;
    right: 22px;
  }
}
</style>