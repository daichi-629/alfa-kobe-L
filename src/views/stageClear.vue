<template>
  <section class="section section--clear bg-color--gray isClear">
    <div class="container">
      <div class="clear-message">
        <div class="clear-message__title">STAGE：{{ this.stage }} クリア！</div>
        <div class="clear-message__content">
          {{ this.message }}
        </div>
        <button
          v-on:click="
            this.$store.commit('nextStage', { stage: 'stage' + this.stage })
          "
          class="btn clear-message__btn"
        >
          次のステージへ
          <svg class="btn__arrow">
            <use xlink:href="#arrow"></use>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "stageClear",
  props: ["message", "stage"],
};
</script>

<style scoped></style>
