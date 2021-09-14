<template>
  <section>
    <section class="section">
      <div class="container">
        <h2 class="section-title section-title--keycolorlight">
          <span class="section-title__stage">STAGE：3</span>家庭科室の課題とは
        </h2>
        <p class="text-center">
          黒板から得たメッセージは、「食物の廃棄問題」だった。<br />
          どうやら、廃棄にかかる費用がかかりすぎて小学校の運営が厳しくなったようだ。。<br />
          これらを解決するための最後の謎を解いていこう！
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
