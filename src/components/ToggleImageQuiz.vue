<template>
  <Page v-model="imageIndex" is-loop="false">
    <template
      v-for="object in questionObjects"
      v-slot:[object.pageName]
      :key="object.pageName"
    >
      <figure class="image__container clickable">
        <img :src="object.image" />
      </figure>

      <section class="section bg-color--keycolor" v-if="object.isAnswerInput">
        <div class="container">
          <h2 class="section-title">
            <span class="section-title__stage">STAGE：{{ this.stage }}</span
            >キーワードを入力
          </h2>
          <AnswerInput
            v-bind:correct="correctAnswer[object.answerIndex]"
            v-on:answer-input="
              this.$store.commit('answerInput', {
                event: $event,
                stage: this.stage,
                number: object.answerIndex + 1,
                final: this.final,
              })
            "
          ></AnswerInput>
        </div>
      </section>
    </template>
  </Page>
</template>

<script>
// import ToggleImage from "@/components/ToggleImage";
import AnswerInput from "@/components/AnswerInput";
import Page from "@/components/Page";
import { mapState } from "vuex";

export default {
  name: "ToggleImageQuiz",
  components: {
    // ToggleImage,
    AnswerInput,
    Page,
  },
  props: ["stage", "images", "isAnswerInputs", "final"],
  data() {
    return {
      imageIndex: 0,
    };
  },
  mounted() {},
  computed: {
    questionObjects() {
      return this.images.map((image, index) => {
        const isAnswerInput = this.isAnswerInputs.includes(index);
        const answerIndex = this.isAnswerInputs.indexOf(index);
        return {
          image: image,
          pageName: "p" + (index + 1).toString(),
          isAnswerInput: isAnswerInput,
          answerIndex: answerIndex,
        };
      });
    },
    ...mapState({
      correctAnswer(state) {
        return state.stageData[this.stage].questionData.map(
          (i) => i.correctAnswer
        );
      },
    }),
  },
};
</script>
