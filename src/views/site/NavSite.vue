<template>
  <div class="navsite">
    <TabSite></TabSite>
  </div>
</template>

<script>
export default {
  name: "NavSite",
  components: {
    TabSite: () => import("@/views/site/TabSite.vue")
  }
};
</script>
