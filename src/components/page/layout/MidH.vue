<template>
  <div class="midh">
    <div class="thinmode">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.midh {
  overflow-y: auto;
  width: auto;
  margin: 0 auto;
  > .thinmode {
    @include conta-width();
    margin: 0 auto;
  }
}
</style>