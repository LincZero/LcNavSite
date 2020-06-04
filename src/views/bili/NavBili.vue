<template>
  <div>
    <h2>这里是NavBili.vue</h2>
    <BoxBili/>
    <BoxBili/>
    <BoxBili/>
    <BoxBili/>
    <BoxBili/>
    <BoxBili/>
    <BoxBili/>
    <BoxBili/>
    <BoxBili/>
  </div>
</template>

<script>
export default {
  name: "NavBili",
  components: {
    BoxBili: () => import("@/views/bili/BoxBili.vue")
  }
};
</script>