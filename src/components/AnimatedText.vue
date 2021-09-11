<template>
  <div>
    <slot :message="this.displayMessage"></slot>
  </div>
</template>

<script>
export default {
  name: "AnimatedText",
  props: ["message", "interval", "isStart"],
  data() {
    return {
      letterNum: 0,
      started: false,
    };
  },
  computed: {
    displayMessage() {
      return this.message.slice(0, this.letterNum);
    },
  },
  watch: {
    isStart(newIsStart, oldIsStart) {
      if (newIsStart && !oldIsStart) {
        this.start();
      }
    },
  },
  mounted() {
    if (this.isStart) {
      this.start();
    }
  },
  methods: {
    start() {
      if (this.started) {
        return;
      }
      const id = setInterval(() => {
        this.letterNum++;
        if (this.letterNum >= this.message.length) {
          clearInterval(id);
          this.$emit("end-message");
        }
      }, this.interval);
      this.started = true;
    },
  },
};
</script>
