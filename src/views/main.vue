<template>
  <svg width="0" height="0" class="hidden">
    <symbol
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12.47 24.94"
      id="arrow"
      class="arrow_svg"
    >
      <title>arrow</title>
      <polygon
        points="0 24.94 0 19.66 7.35 12.47 0 5.92 0 0 12.47 12.47 0 24.94"
      />
    </symbol>
  </svg>
  <header class="header">
    <div class="container">
      <img
        class="header__logo"
        src="../assets/images/logo/logo.png"
        alt="Lグループ"
      />
      <div class="header__name">N・S高生制作サイト</div>
    </div>
  </header>

  <main class="main main-page">
    <!-- タイトルエリア ここから -->
    <img
      class="main-title"
      src="../assets/images/遊園地.jpg"
      alt="出口のない遊園地からの脱出！"
    />
    <!-- タイトルエリア ここまで -->
    <div id="stage">
      <!-- STAGE1 ここから -->
      <div v-if="!next['stage1']" id="sectionStage1" class="stage">
        <!-- STAGE1問題セクション ここから -->
        <section class="section">
          <div class="container">
<!--            <text-animation message="animation" interval="10">-->
<!--              <template v-slot:default="slotProps">-->
<!--                <h1>{{ slotProps.message }}</h1>-->
<!--              </template>-->
<!--            </text-animation>-->

            <h2 class="section-title section-title--keycolorlight">
              <span class="section-title__stage">STAGE：1</span
              >さぁゲームを始めよう！
            </h2>
            <p class="text-center">
              ある日友人から電話がかかってくる<br />友人は目が覚めると遊園地にいて、外に出る方法が分からないという。
              助けを求められて遊園地に設置されている謎を解いて出口を探す！
            </p>
            <p class="text-center">
              困ったときは、ヒントがある。なるべく見ないようにゲームを進めていこう。
            </p>

            <div class="container">
              <ToggleImageQuiz
                stage="stage1"
                v-bind:images="[
                  require('@/assets/images/stage.png'),
                  require('@/assets/images/遊園地.jpg'),
                ]"
                v-bind:is-answer-inputs="[1]"
                v-bind:correct-answers="this.correctAnswer['stage1']"
              ></ToggleImageQuiz>

              <!--  YouTube貼り付け
                           <div class="youtube__container">
                             <div class="youtube">
                               <iframe width="560" height="315" src="https://www.youtube.com/embed/IRyJe-0Uie0?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                             </div>
                           </div>
             Youtube貼り付けここまで -->
            </div>
          </div>
        </section>
        <!-- STAGE1問題セクション ここまで -->

        <!-- STAGE1解答入力セクション ここから -->
        <section class="section bg-color--keycolor" v-if="false">
          <div class="container">
            <h2 class="section-title">
              <span class="section-title__stage">STAGE：1</span>キーワードを入力
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
              v-bind:correct="correctAnswer['stage1']['q1']"
              v-on:answer-input="answerInput($event, 'stage1', 1)"
            ></answer-input>

            <a class="link-hint" href="hint1.html" target="hint1"
              >ヒントをみる ></a
            >
          </div>
        </section>
        <!-- STAGE1解答入力セクション ここまで -->

        <!-- STAGE1クリア画面 ここから -->
        <!------------------------------------------------------------------------------------------------------
          ステージを全問正解するとclear['stage1']がtrueになります。
          v-if="clear['stage1']"はclear['stage1']がtrueになったら表示します。
          v-bind:class="{isClear:clear['stage1']}"はclear['stage1']がtrueになったら「isClear」クラスを追加します。
        -------------------------------------------------------------------------------------------------------->
        <section
          v-if="clear['stage1']"
          v-bind:class="{ isClear: clear['stage1'] }"
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
      <!---------------------------------------------------------------------
        クリア画面の「次のステージへ」ボタンをクリックしたら表示します。
        v-if="next['stage1']"はnext['stage1']がtrueになったら表示します。
      ----------------------------------------------------------------------->
      <div
        v-if="next['stage1'] && !next['stage2']"
        id="sectionStage2"
        class="stage"
      >
        <section>
          <div class="section">
            <div class="container">
              <h2 class="section-title section-title--keycolorlight">
                <span class="section-title__stage">STAGE：2</span
                >黒板に書かれている謎を解け！
              </h2>
              <p class="text-center">
                家庭科室に入ることができた！<br />
                すぐに目に入ったのは黒板にある４つの謎。<br />
                これらを解くことで、きっと次のステップに繋がるはずだ！
              </p>
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
                    <img src="../assets/images/stage.png" alt="" />
                  </figure>
                  <!-- STAGE2-1問題セクション ここまで -->
                  <!-- STAGE2-1解答入力セクション ここから -->
                  <AnswerInput
                    v-bind:correct="correctAnswer['stage2']['q1']"
                    v-on:answer-input="answerInput($event, 'stage2', 1)"
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
          v-if="clear['stage2']"
          v-bind:class="{ isClear: clear['stage2'] }"
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
      <div v-if="next['stage2']" id="sectionStage3" class="stage">
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
              <span class="section-title__stage">STAGE：3</span>キーワードを入力
            </h2>
            <!-----------------------------------------------------------------------------------------------------------------
              解答入力欄のコンポーネントです。
              v-on:answer-input="answerInput($event, 'stage3', 1, 'final')" は送信ボタンをクリックした時の動作を決める関数です。
              4番目の引数 'final' は最終ステージを表します。
            ------------------------------------------------------------------------------------------------------------------>
            <AnswerInput
              v-bind:correct="correctAnswer['stage3']['q1']"
              v-on:answer-input="answerInput($event, 'stage3', 1, 'final')"
            ></AnswerInput>
            <a class="link-hint" href="hint3.html" target="hint3"
              >ヒントをみる ></a
            >
          </div>
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
  <footer class="footer section bg-color--gray">
    <div class="container">
      <p class="text-center">
        授業主催： N・S高<br />協力：株式会社SCRAP<br />企画制作：N・S高生
      </p>
      <p class="text-center">
        「リアル脱出ゲーム」は株式会社SCRAPの登録商標です。
      </p>
      <p class="text-center">
        株式会社SCRAPとN・S高で実施した授業「リアル脱出ゲームの作り方」の一環で<br />生徒が制作したものであり、SCRAPが主催/公認するものではありません。
      </p>
    </div>
  </footer>
</template>

import AnswerInput from "@/components/AnswerInput"

<script>
import AnswerInput from "@/components/AnswerInput";
import ToggleImageQuiz from "@/components/ToggleImageQuiz";

export default {
  name: "Main",
  components: {
    AnswerInput,
    ToggleImageQuiz,
  },

  data() {
    /* 初期値を設定します */
    return {
      /* 解答
       *  ex. 問題2-3を追加する場合はstage2の配列に解答を追加します。
       *    q3: 'おおお',
       */
      correctAnswer: {
        stage1: {
          q1: "あああ",
        },
        stage2: {
          q1: "いいい",
          // q2: 'えええ',
          // q3: 'おおお'
        },
        stage3: {
          q1: "ううう",
          // q2: 'かかか',
          // q3: 'ききき',
        },
      },

      /* それぞれの問題が正解かどうか
       *  ex. 問題2-3を追加する場合は配列にfalseを追加します。
       */
      answer: {
        stage1: [false],
        stage2: [
          false, // 2-1
          // false, // 2-2
          // false, // 2-3
        ],
        stage3: [
          false, // 3-1
          // false, // 3-2
          // false, // 3-3
        ],
      },

      /* ステージの問題が全て正解かどうか */
      clear: {
        stage1: false,
        stage2: false,
        stage3: false,
      },

      /* 次のステージを表示するかどうか
       *  最終ステージはページを遷移するので設定不要です。
       */
      next: {
        stage1: false,
        stage2: false,
      },
    };
  },
  methods: {
    /* 「送信」ボタンをクリックした場合の動作です。 */
    answerInput(event, stage, number, final) {
      /* answerをtrueまたはfalseにします。 */
      this.answer[stage][number - 1] = event;
      /* STAGEのすべての問題がtrueか調べてclearの値を変更します。*/
      const result = this.answer[stage].every((element) => {
        return element;
      });
      this.clear[stage] = result;
      /* 最終ステージの入力を判定します。 */
      if (this.clear[stage] === true && final === "final") {
        this.$router.push("/final");
      }
    },
    /* クリア画面「次のステージへ」ボタンをクリックした時の動作を設定します
     *  clearをfalseにしてクリア画面を非表示にします。
     *  nextをtrueにして次のステージを表示します。
     */
    nextStage(stage) {
      this.clear[stage] = false;
      this.next[stage] = true;
    },
  },
};
</script>
