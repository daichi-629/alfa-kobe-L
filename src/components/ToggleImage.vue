<template>
  <transition name="change" mode="out-in">
  <img v-on:click="toggle" v-bind:src="this.images[this.number]" v-bind:alt="this.alts[this.number]"/>
  </transition>
</template>

<script>
export default {
  name: "ToggleImage",
  props: ["images", "alts","modelValue"],
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    toggle() {
      this.number = (this.number + 1) % this.images.length;
      this.$emit("update:modelValue", this.number);
    },
  },
};
</script>
