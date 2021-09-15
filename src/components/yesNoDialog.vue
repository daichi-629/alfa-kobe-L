<template>
  <div
    :style="[
      this.style,
      {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
    ]"
  >
    <h1 :style="this.titleStyle">{{ this.message }}</h1>
    <div
      style="display: flex; flex-direction: row; justify-content: space-between"
    >
      <button @click="onYes" :style="this.buttonStyle">
        {{ this.yesMessage }}
      </button>
      <button @click="onNo" :style="this.buttonStyle">
        {{ this.noMessage }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "dialog",
  props: [
    "style",
    "message",
    "yesMessage",
    "noMessage",
    "titleStyle",
    "buttonStyle",
  ],
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
