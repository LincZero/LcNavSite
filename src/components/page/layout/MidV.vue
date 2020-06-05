<template>
  <div class="midv">
    <slot></slot>
  </div>
</template>

<style lang="scss">
// $header-hei
.midv {
  height:calc(100% - #{$header-hei} - #{$footer-hei});
  display:flex;
  flex-flow:row nowrap;
}
</style>