<template>
  <img v-on:click="toggle" v-bind:src="this.images[this.number]" />
</template>

<script>
export default {
  name: "ToggleImage",
  props: ["images", "value"],
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    toggle() {
      this.number = (this.number + 1) % this.images.length;
      this.$emit("input", this.number);
    },
  },
};
</script>
