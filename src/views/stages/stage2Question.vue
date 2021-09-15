<template>
  <section>
    <div class="section">
      <div class="container">
        <h2 class="section-title section-title--keycolorlight">
          <span class="section-title__stage">STAGE：2</span
          >サーカス会場の謎を解け！
        </h2>
        <Page :is-loop="false">
          <template v-slot:p1>
            <AnimatedText
              v-slot:default="{ message }"
              message="先程の謎から『サーカス』という答えを導き出した。ここから出るための手がかりがあるかもしれない、とサーカス会場に行ってみることに。思った通り、サーカス会場に行ってみると1枚の紙が落ちており、そこには次の謎が、"
              :interval="this.textSpeed"
              :is-start="true"
              v-on:end-message="this.isTextEnd = true"
              :class="{ clickable: isTextEnd }"
            >
              <p class="text-center">
                {{ message }}
              </p>
            </AnimatedText>
          </template>
          <template v-slot:p2>
            <div class="stage-column__container section bg-color--keycolor">
              <div class="container">
                <h2 class="section-title">
                  <span class="section-title__stage">STAGE：2</span
                  >キーワードを入力
                </h2>
                <div class="row">
                  <!-- STAGE2-1 ここから -->
                  <div class="column">
                    <!-- STAGE2-1問題セクション ここから -->
                    <figure class="image__container">
                      <!--                      問題画像?-->
                      <img
                        src="../../assets/images/circus-4721247_1920.jpg"
                        alt=""
                      />
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
                    <!-- STAGE2-1解答入力セクション ここまで -->
                  </div>
                  <!-- /.column -->
                </div>
                <!-- /.row -->
              </div>
            </div>
          </template>
        </Page>
      </div>
    </div>
  </section>
</template>

<script>
import AnswerInput from "../../components/AnswerInput";
import AnimatedText from "../../components/AnimatedText";
import Page from "../../components/Page";
import { mapState } from "vuex";

export default {
  name: "stage2Question",
  components: {
    AnswerInput,
    AnimatedText,
    Page,
  },
  data() {
    return { isTextEnd: false };
  },
  computed: {
    ...mapState(["textSpeed", "stageData"]),
  },
};
</script>

<style scoped></style>
