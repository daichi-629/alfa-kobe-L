<template>
  <main class="main main-page">
    <!-- タイトルエリア ここから -->
    <!--    <img-->
    <!--      class="main-title"-->
    <!--      src="../assets/images/遊園地.jpg"-->
    <!--      alt="出口のない遊園地からの脱出！"-->
    <!--    />-->
    <!-- タイトルエリア ここまで -->
    <div id="stage">
      <!-- STAGE1 ここから -->
      <div v-if="this.currentStage === 1" id="sectionStage1" class="stage">
        <!-- STAGE1問題セクション ここから -->
        <section v-if="!this.getIsStageClear('stage1')">
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
                    v-on:end-message="stage1.isTextAnimateEnd = true"
                    :class="{ clickable: stage1.isTextAnimateEnd }"
                  >
                    <p class="text-center">{{ message }}</p>
                  </AnimatedText>
                </template>
                <template v-slot:p2>
                  <div class="bg-color--keycolor" style="padding: 10px">
                    <transition appear name="appear-quiz">
                      <div class="text-center">
                        <img
                          src="../assets/images/プロN.png"
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
          <!-- STAGE1問題セクション ここまで -->
        </section>

        <!-- STAGE1クリア画面 ここから -->
        <stage-clear message="くりあしたお" :stage="1" v-else> </stage-clear>
        <!-- STAGE1クリア画面 ここまで -->
      </div>
      <!-- STAGE1 ここまで -->

      <!-- STAGE2 ここから -->
      <div v-else-if="this.currentStage === 2" id="sectionStage2" class="stage">
        <section v-if="!this.getIsStageClear('stage2')">
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
                <span class="section-title__stage">STAGE：2</span
                >キーワードを入力
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
                    <img
                      src="../assets/images/circus-4721247_1920.jpg"
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

        <!-- STAGE2クリア画面 ここから -->
        <stage-clear v-else message="クリアした" :stage="2"> </stage-clear>
        <!-- STAGE2クリア画面 ここまで -->
      </div>
      <!-- STAGE2 ここまで -->

      <!-- STAGE3 ここから -->
      <div v-if="this.currentStage === 3" id="sectionStage3" class="stage">
        <section v-if="!this.getIsStageClear('stage3')">
          <!-- STAGE3-1問題セクション ここから -->
          <section class="section">
            <div class="container">
              <h2 class="section-title section-title--keycolorlight">
                <span class="section-title__stage">STAGE：3</span
                >家庭科室の課題とは
              </h2>
              <p class="text-center">
                黒板から得たメッセージは、「食物の廃棄問題」だった。<br />
                どうやら、廃棄にかかる費用がかかりすぎて小学校の運営が厳しくなったようだ。。<br />
                これらを解決するための最後の謎を解いていこう！
              </p>
              <figure class="image__container">
                <img src="../assets/images/stage.png" alt="" />
              </figure>
            </div>
          </section>
          <!-- STAGE3-1問題セクション ここまで -->

          <!-- STAGE3-1解答入力セクションここから -->
          <section class="section bg-color--keycolor">
            <div class="container">
              <h2 class="section-title">
                <span class="section-title__stage">STAGE：3</span>地図を選択
              </h2>
              <div style="display: flex; justify-content: center">
                <mapquiz :correct-item="[1, 0]" stage="stage3" :quiz="1">
                </mapquiz>
              </div>
            </div>
          </section>
        </section>
        <stage-clear v-else message="くりあ" :stage="3"></stage-clear>
        <!-- STAGE3-1解答入力セクション ここまで -->
      </div>
      <!-- STAGE3 ここまで -->
      <div v-else-if="this.currentStage === 4" class="stage">
        <section v-if="!this.getIsStageClear('stage4')">
          <section class="section">
            <div class="container">
              <h2 class="section-title section-title--keycolorlight">
                <span class="section-title__stage">STAGE：3</span
                >家庭科室の課題とは
              </h2>
              <p class="text-center">
                黒板から得たメッセージは、「食物の廃棄問題」だった。<br />
                どうやら、廃棄にかかる費用がかかりすぎて小学校の運営が厳しくなったようだ。。<br />
                これらを解決するための最後の謎を解いていこう！
              </p>
              <figure class="image__container">
                <img src="../assets/images/stage.png" alt="" />
              </figure>
            </div>
          </section>
        </section>
        <section v-else></section>
      </div>
    </div>
  </main>
</template>
<script>
import AnswerInput from "@/components/AnswerInput";
// import ToggleImageQuiz from "@/components/ToggleImageQuiz";
import { mapGetters, mapState } from "vuex";
import AnimatedText from "../components/AnimatedText";
import Page from "../components/Page";
import mapquiz from "./mapquiz";
import stageClear from "./stageClear";

export default {
  name: "Main",
  data() {
    return {
      stage1: {
        isTextAnimateEnd: false,
      },
    };
  },
  components: {
    Page,
    AnswerInput,
    // ToggleImageQuiz,
    AnimatedText,
    mapquiz,
    stageClear,
  },
  computed: {
    ...mapState(["currentStage", "stageData", "isGameStart", "textSpeed"]),
    ...mapGetters(["getIsStageClear", "getIsGameClear"]),
  },
  watch: {
    getIsGameClear(newParam) {
      if (newParam) {
        this.$router.push("/final");
      }
    },
  },
  mounted() {
    if (!this.isGameStart) {
      this.$router.push("/");
    }
    if (this.getIsGameClear) {
      this.$router.push("/final");
    }
  },
  methods: {
    nextStage(stage) {
      this.$store.commit("nextStage", { stage: stage });
    },
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
