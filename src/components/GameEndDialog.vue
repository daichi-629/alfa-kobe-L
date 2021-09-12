<template>
  <div class="card" :style="this.style">
    <h1>ゲームをやめますか？</h1>
    <button @click="onYes">はい</button>
    <button @click="onNo">いいえ</button>
  </div>
</template>

<script>
export default {
  name: "dialog",
  props: ["style"],
  methods: {
    onYes() {
      this.$emit("yes");
    },
    onNo() {
      this.$emit("no");
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #999999;
}
</style>
