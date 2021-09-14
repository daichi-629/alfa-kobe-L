<template>
  <!-- STAGE1問題セクション ここから -->
  <section>
    <section class="section">
      <div class="container">
        <Page is-loop="false">
          <template v-slot:p1>
            <h2 class="section-title section-title--keycolorlight">
              <span class="section-title__stage">STAGE：1</span
              >さぁゲームを始めよう！
            </h2>
            <AnimatedText
              v-slot:default="{ message }"
              :interval="this.textSpeed"
              message="ある日友人から電話がかかってくる。友人は目が覚めると遊園地にいて、外に出る方法が分からないという。助けを求められて遊園地に設置されている謎を解いて出口を探す！"
              is-start="true"
              v-on:end-message="this.isTextAnimateEnd = true"
              :class="{ clickable: this.isTextAnimateEnd }"
            >
              <p class="text-center">{{ message }}</p>
            </AnimatedText>
          </template>
          <template v-slot:p2>
            <div class="bg-color--keycolor" style="padding: 10px">
              <transition appear name="appear-quiz">
                <div class="text-center">
                  <img
                    src="../../assets/images/プロN.png"
                    alt=""
                    style="height: 70%; width: 70%; padding-left: 7%"
                  />
                </div>
              </transition>
              <AnswerInput
                v-bind:correct="
                  this.stageData['stage1'].questionData[0].correctAnswer
                "
                v-on:answer-input="
                  this.$store.commit('answerInput', {
                    event: $event,
                    stage: 'stage1',
                    number: 1,
                  })
                "
              ></AnswerInput>
            </div>
          </template>
        </Page>
      </div>
    </section>
  </section>
</template>

<script>
import { mapState } from "vuex";
import Page from "../../components/Page";
import AnimatedText from "../../components/AnimatedText";
import AnswerInput from "../../components/AnswerInput";

export default {
  name: "stage1",
  components: {
    Page,
    AnimatedText,
    AnswerInput,
  },
  data() {
    return {
      isTextAnimateEnd: false,
    };
  },
  computed: {
    ...mapState(["textSpeed", "stageData"]),
  },
};
</script>

<style scoped>
.appear-quiz-enter-active {
  transition: all 1s;
}
.appear-quiz-enter-from {
  transform: translate(-20%, -20%) rotate3d(0.7, 0.7, 0, 360deg);
  opacity: 0;
}
</style>
