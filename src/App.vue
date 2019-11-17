<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang='scss' scoped>
#app{
  width: 100%;
  height: 100%;
  background: url('./assets/page-bg-3.jpg');
  background-repeat:no-repeat;
  background-size: 100% 100%;
}
</style>
