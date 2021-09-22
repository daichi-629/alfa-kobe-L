<template>
  <section>
    <section class="section">
      <div class="container">
        <h2 class="section-title section-title--keycolorlight">
          <span class="section-title__stage">STAGE：4</span>メリーゴーランド
        </h2>
        <p class="text-center">
          メリーゴーランドに到着した。脱出の手がかりが得られるかもしれない
        </p>
        <figure class="image__container">
          <img src="../../assets/images/stage.png" alt="" />
        </figure>
      </div>
      <AnswerInput
        :correct="this.stageData['stage4'].questionData[0].correctAnswer"
        v-on:answer-input="
          this.$store.commit('answerInput', {
            event: $event,
            stage: 'stage4',
            number: 1,
          })
        "
      ></AnswerInput>
    </section>
  </section>
</template>

<script>
import AnswerInput from "../../components/AnswerInput";
import { mapState } from "vuex";
export default {
  name: "stage4Question",
  components: {
    AnswerInput,
  },
  computed: {
    ...mapState(["stageData"]),
  },
};
</script>

<style scoped></style>
