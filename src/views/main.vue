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
                    <div class="text-center">
                      <img
                        src="../assets/images/プロN.png"
                        alt=""
                        style="height: 80%; width: 80%; padding-left: 7%"
                      />
                    </div>
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

              <!--              <div class="container">-->
              <!--                <ToggleImageQuiz-->
              <!--                  stage="stage1"-->
              <!--                  v-bind:images="[-->
              <!--                    require('@/assets/images/stage.png'),-->
              <!--                    require('@/assets/images/遊園地.jpg'),-->
              <!--                  ]"-->
              <!--                  v-bind:is-answer-inputs="[1]"-->
              <!--                ></ToggleImageQuiz>-->

              <!--  YouTube貼り付け
                           <div class="youtube__container">
                             <div class="youtube">
                               <iframe width="560" height="315" src="https://www.youtube.com/embed/IRyJe-0Uie0?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                             </div>
                           </div>
             Youtube貼り付けここまで -->
              <!--              </div>-->
            </div>
          </section>
          <!-- STAGE1問題セクション ここまで -->

          <!-- STAGE1解答入力セクション ここから -->
          <section class="section bg-color--keycolor" v-if="false">
            <div class="container">
              <h2 class="section-title">
                <span class="section-title__stage">STAGE：1</span
                >キーワードを入力
              </h2>
              <!------------------------------------------------------------------------------------------------------------
              解答入力欄のコンポーネントです。入力欄・送信ボタン・エラーメッセージを表示します。
              v-bind:correct="correctAnswer['stage1']['q1']" は正解の解答を指します。
              v-on:answer-input="answerInput($event, 'stage1', 1)" は送信ボタンをクリックした時の動作を決める関数です。
              2番目、3番目の1引数 'stage1', 1 はstage1の1問目ということになります。
              1番麺の引数 $event は正解、不正解の判定を受け取る変数です。
              []、()の間違い、''の抜けがあると動きません。
            ------------------------------------------------------------------------------------------------------------>
              <answer-input
                v-bind:correct="
                  this.stageData['stage1'].questionData[0].correctAnswer
                "
                v-on:answer-input="
                  store.commit('answerInput', {
                    event: $event,
                    stage: 'stage1',
                    number: 1,
                  })
                "
              ></answer-input>

              <a class="link-hint" href="hint1.html" target="hint1"
                >ヒントをみる ></a
              >
            </div>
          </section>
          <!-- STAGE1解答入力セクション ここまで -->
        </section>

        <!-- STAGE1クリア画面 ここから -->
        <section
          v-else
          v-bind:class="{ isClear: this.getIsStageClear('stage1') }"
          class="section section--clear bg-color--gray"
        >
          <div class="container">
            <div class="clear-message">
              <div class="clear-message__title">STAGE：１ クリア！</div>
              <div class="clear-message__content">
                家庭科室の扉が開いた！<br />
                さぁ先生を助けるため<br />
                ３つステージの謎をとき、暗号を見つけ出そう！
              </div>
              <button
                v-on:click="nextStage('stage1')"
                class="clear-message__btn btn"
              >
                次のステージへ
                <svg class="btn__arrow">
                  <use xlink:href="#arrow"></use>
                </svg>
              </button>
            </div>
          </div>
        </section>
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
                <!-- STAGE2-1 ここまで -->

                <!-- STAGE2-2 を追加

                                <div class="column">

                                  <figure class="image__container">
                                    <img src="assets/images/stage.png" alt="">
                                  </figure>

                                  <answer-input v-bind:correct="correctAnswer['stage2']['q2']" v-on:answer-input="answerInput($event, 'stage2', 2)"></answer-input>
                                  <a class="link-hint" href="hint2.html" target="hint2">ヒントをみる ></a>

                                </div>

                2-2追加ここまで -->

                <!-- STAGE2-3 を追加

                                <div class="column">

                                  <figure class="image__container">
                                    <img src="assets/images/stage.png" alt="">
                                  </figure>

                                  <answer-input v-bind:correct="correctAnswer['stage2']['q3']" v-on:answer-input="answerInput($event, 'stage2', 3)"></answer-input>
                                  <a class="link-hint" href="hint2.html" target="hint2">ヒントをみる ></a>

                                </div>

                2-3追加ここまで -->
              </div>
              <!-- /.row -->
            </div>
          </div>
        </section>

        <!-- STAGE2クリア画面 ここから -->
        <section
          v-else
          v-bind:class="{ isClear: this.getIsStageClear('stage2') }"
          class="section section--clear bg-color--gray"
        >
          <div class="container">
            <div class="clear-message">
              <div class="clear-message__title">STAGE：2 クリア！</div>
              <div class="clear-message__content">
                黒板の指示に従い、<br />
                次のステージの謎を解こう！
              </div>
              <button
                v-on:click="nextStage('stage2')"
                class="clear-message__btn btn"
              >
                次のステージへ
                <svg class="btn__arrow">
                  <use xlink:href="#arrow"></use>
                </svg>
              </button>
            </div>
          </div>
        </section>
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
                <mapquiz> </mapquiz>
              </div>
              <!--              <AnswerInput-->
              <!--                v-bind:correct="-->
              <!--                  this.stageData['stage3'].questionData[0].correctAnswer-->
              <!--                "-->
              <!--                v-on:answer-input="-->
              <!--                  this.$store.commit('answerInput', {-->
              <!--                    event: $event,-->
              <!--                    stage: 'stage3',-->
              <!--                    number: 1,-->
              <!--                    final: true,-->
              <!--                  })-->
              <!--                "-->
              <!--              ></AnswerInput>-->
              <!--              <a class="link-hint" href="hint3.html" target="hint3"-->
              <!--                >ヒントをみる ></a-->
              <!--              >-->
            </div>
          </section>
        </section>

        <!-- STAGE3-1解答入力セクション ここまで -->

        <!-- STAGE3-2問題セクション を追加

                  <section class="section">
                  <div class="container">

                    <figure class="image__container">
                      <img src="assets/images/stage.png" alt="">
                    </figure>
                  </div>
                </section>

                <section class="section bg-color--keycolor">
                  <div class="container">
                    <h2 class="section-title"><span class="section-title__stage">STAGE：3</span>キーワードを入力</h2>
                    <answer-input v-bind:correct="correctAnswer['stage3']['q2']" v-on:answer-input="answerInput($event, 'stage3', 2, 'final')"></answer-input>
                    <a class="link-hint" href="hint3.html" target="hint3">ヒントをみる ></a>
                  </div>
                </section>

        STAGE3-2追加ここまで -->

        <!-- STAGE3-3問題セクション を追加
                <section class="section">
                  <div class="container">

                    <figure class="image__container">
                      <img src="assets/images/stage.png" alt="">
                    </figure>
                  </div>
                </section>

                <section class="section bg-color--keycolor">
                  <div class="container">
                    <h2 class="section-title"><span class="section-title__stage">STAGE：3</span>キーワードを入力</h2>

                    <answer-input v-bind:correct="correctAnswer['stage3']['q3']" v-on:answer-input="answerInput($event, 'stage3', 3, 'final')"></answer-input>
                    <a class="link-hint" href="hint3.html" target="hint3">ヒントをみる ></a>
                  </div>
                </section>

        STAGE3-3追加 ここまで -->
      </div>
      <!-- STAGE3 ここまで -->
    </div>
  </main>
</template>

import AnswerInput from "@/components/AnswerInput"

<script>
import AnswerInput from "@/components/AnswerInput";
// import ToggleImageQuiz from "@/components/ToggleImageQuiz";
import { mapGetters, mapState } from "vuex";
import AnimatedText from "../components/AnimatedText";
import Page from "../components/Page";
import mapquiz from "./mapquiz";

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
