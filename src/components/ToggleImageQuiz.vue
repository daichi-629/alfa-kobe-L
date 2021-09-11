<template>
  <figure class="image__container">
    <ToggleImage
      v-model="this.imageIndex"
      v-bind:images="this.images"
    ></ToggleImage>
  </figure>

  <transition name="answer-input">
    <section class="section bg-color--keycolor" v-if="this.isAnswerSeen">
      <div class="container">
        <h2 class="section-title">
          <span class="section-title__stage">STAGE：1</span>キーワードを入力
        </h2>
        <AnswerInput
          v-bind:correct="this.correctAnswers[this.answerName]"
          v-on:answer-input="
            this.$parent.answerInput(
              $event,
              this.stage,
              this.answerIndex + 1,
              this.final
            )
          "
        ></AnswerInput>
        <!--      <a class="link-hint" href="hint1.html" target="hint1">ヒントをみる ></a>-->
      </div>
    </section>
  </transition>
</template>

<script>
import ToggleImage from "@/components/ToggleImage";
import AnswerInput from "@/components/AnswerInput";

export default {
  name: "ToggleImageQuiz",
  components: {
    ToggleImage,
    AnswerInput,
  },
  props: ["stage", "images", "isAnswerInputs", "final", "correctAnswers"],
  data() {
    return {
      imageIndex: 0,
    };
  },
  computed: {
    isAnswerSeen() {
      return this.isAnswerInputs.indexOf(this.imageIndex) !== -1;
    },
    answerIndex() {
      return this.isAnswerInputs.indexOf(this.imageIndex);
    },
    answerName() {
      return (
        "q" + (this.isAnswerInputs.indexOf(this.imageIndex) + 1).toString()
      );
    },
  },
};
</script>


<style>
.answer-input-enter-active,.answer-input-leave-active{
  transition: opacity 0.1s ease;
}
.answer-input-enter-from,.answer-input-leave-to{
  opacity: 0;
}</style>
