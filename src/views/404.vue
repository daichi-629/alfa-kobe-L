<template>
  <h1>存在しないページのようだ</h1>
  <button @click="gotoIndex">ホームに戻る</button>
</template>

<script>
export default {
  name: "404",
  methods: {
    gotoIndex() {
      this.$store.commit("resetState");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
