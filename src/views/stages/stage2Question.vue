<template>
  <section>
    <div class="section">
      <div class="container">
        <h2 class="section-title section-title--keycolorlight">
          <span class="section-title__stage">STAGE：2</span
          >黒板に書かれている謎を解け！
        </h2>
        <AnimatedText
          v-slot:default="{ message }"
          message="先程の謎から『サーカス』という答えを導き出した。ここから出るための手がかりがあるかもしれない、とサーカス会場に行ってみることに。思った通り、サーカス会場に行ってみると1枚の紙が落ちており、そこには次の謎が、"
          :interval="this.textSpeed"
          :is-start="true"
        >
          <p class="text-center">{{ message }}</p>
        </AnimatedText>
      </div>
    </div>
    <div class="stage-column__container section bg-color--keycolor">
      <div class="container">
        <h2 class="section-title">
          <span class="section-title__stage">STAGE：2</span>キーワードを入力
        </h2>
        <!-------------------------------------------------------------
                class名"row"内のclass名"column"が横並びになります。
                改行する場合は以下のように追加してください。
                <div class="row">
                  <div class="column">
                    ～ 内容 ～
                  </div>
                </div>
              ------------------------------------------------------------->
        <div class="row">
          <!-- STAGE2-1 ここから -->
          <div class="column">
            <!-- STAGE2-1問題セクション ここから -->
            <figure class="image__container">
              <img src="../../assets/images/circus-4721247_1920.jpg" alt="" />
            </figure>
            <!-- STAGE2-1問題セクション ここまで -->
            <!-- STAGE2-1解答入力セクション ここから -->
            <AnswerInput
              v-bind:correct="
                this.stageData['stage2'].questionData[0].correctAnswer
              "
              v-on:answer-input="
                this.$store.commit('answerInput', {
                  event: $event,
                  stage: 'stage2',
                  number: 1,
                })
              "
            ></AnswerInput>
            <a class="link-hint" href="hint2.html" target="hint2"
              >ヒントをみる ></a
            >
            <!-- STAGE2-1解答入力セクション ここまで -->
          </div>
          <!-- /.column -->
        </div>
        <!-- /.row -->
      </div>
    </div>
  </section>
</template>

<script>
import AnswerInput from "../../components/AnswerInput";
import AnimatedText from "../../components/AnimatedText";
import { mapState } from "vuex";

export default {
  name: "stage2Question",
  components: {
    AnswerInput,
    AnimatedText,
  },
  computed: {
    ...mapState(["textSpeed", "stageData"]),
  },
};
</script>

<style scoped></style>
