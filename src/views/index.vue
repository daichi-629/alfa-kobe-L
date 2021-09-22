<template>
  <main class="main index-page">
    <!-- タイトルエリア ここから -->

    <!-- タイトルエリア ここまで -->
    <section class="section section--story">
      <div class="container">
        <h2 class="section-title section-title--keycolor section-title--story">
          ストーリー
        </h2>

        <div class="story">
          <Page :is-loop="false">
            <template v-slot:p1>
              <AnimatedText
                :interval="this.$store.state.textSpeed"
                :is-start="true"
                message="画像やテキストをクリックすると進めることができます。"
                v-slot:default="slotProps"
                @end-message="isFirstMessageEnd = true"
              >
                <p class="text-center">
                  {{ slotProps.message }}
                </p>
              </AnimatedText>
              <button class="btn" :class="{ clickable: isFirstMessageEnd}">ゲームを開始する</button>
            </template>
            <template v-slot:p2>
              <h1 class="main-title clickable">
                <img
                  src="../assets/images/遊園地.jpg"
                  alt="Presented by SCRAP×N・S高リアル脱出ゲーム制作PJ 出口のない遊園地からの脱出"
                />
              </h1>
            </template>
            <template v-slot:p3>
              <AnimatedText
                :interval="this.$store.state.textSpeed"
                :is-start="true"
                message="風も無く雲一つ無い静かな夜。 眠いにつこうとした少年が居た。その少年の名は○○○。何事も無くその1日が終わると思っていた。そんな少年に一本の電話が来た。 その電話の主は友人からのものだった…"
                v-slot:default="slotProps"
                @end-message="isMessageEnd = true"
                :class="{ clickable: isMessageEnd }"
              >
                <p class="text-center">
                  {{ slotProps.message }}
                </p>
              </AnimatedText>
            </template>

            <template v-slot:p4>
              <section class="section bg-color--gray clickable">
                <div class="container">
                  <h2 class="section-title">ゲーム開始前の準備</h2>
                  <p class="font-eng text-center">Are you ready for game?</p>
                  <!--
          class名"row"内のclass名"column"が横並びになります。
          改行する場合は以下のように追加してください。
          <div class="row">
            <div class="column">
              ～ 内容 ～
            </div>
          </div>
        -->
                  <div class="row">
                    <div class="column">
                      <div class="card">
                        <h3 class="card__title">遊ぶ日時を決めよう！</h3>
                        <p class="card__content">
                          前後の説明、解説をあわせ、想定所要時間は100分〜120分です。途中で中断することもできますが、お時間に余裕があるときにご参加ください。
                        </p>
                      </div>
                    </div>
                    <div class="column">
                      <div class="card">
                        <h3 class="card__title">紙とペンを用意しよう！</h3>
                        <p class="card__content">
                          メモをとるための紙と筆記用具をお手元にご準備ください。
                        </p>
                      </div>
                    </div>
                    <div class="column">
                      <div class="card">
                        <h3 class="card__title">
                          ブラウザのCookieとキャッシュを<br />削除しよう！
                        </h3>
                        <p class="card__content">
                          エラーが起きる原因となる恐れがありますので、必ずCookieとキャッシュを削除してからプレイを開始するようにしてください。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </template>

            <template v-slot:p5>
              <section class="section bg-color--keycolor clickable">
                <div class="container">
                  <h2 class="section-title">複数人での遊び方</h2>
                  <p class="font-eng text-center">
                    Playing games with multiple players
                  </p>
                  <div class="row">
                    <div class="column">
                      <div class="card">
                        <h3 class="card__title">
                          コミュニケーションツール<br />を用意！
                        </h3>
                        <p class="card__content">
                          例：Zoom、LINE通話など<br />
                          カメラはオフにしたままでも参加は可能です。<br />
                          ただ、離れたところにいる仲間と同じ会場で謎解きをしている気持ちになれるので、カメラをオンにしてみんなでわいわいプレイをすることをお勧めします。
                        </p>
                      </div>
                    </div>
                    <div class="column">
                      <div class="card">
                        <h3 class="card__title">イヤホンを使おう！</h3>
                        <p class="card__content">
                          本ゲームでは、登場人物が会話する動画を見ながら謎解きをします。<br />
                          動画を見るときにイヤホンを使うと、動画の再生中も仲間と会話をしながらプレイができます。<br />
                          ※イヤホンを使用しない場合は、音声をマイクが拾ってしまわないように、動画の再生中は通話ツールのミュート機能をご利用ください。
                        </p>
                      </div>
                    </div>
                    <div class="column">
                      <div class="card">
                        <h3 class="card__title">情報共有はしっかりと！</h3>
                        <p class="card__content">
                          遠くにいる仲間と足並みを揃えて遊びましょう。<br />
                          動画で気になったところ、解けた謎の答えや思いついたことはなんでも共有しましょう！
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </template>
            <template v-slot:p6>
              <section class="section">
                <div class="container">
                  <router-link
                    class="btn"
                    to="/main"
                    @click="this.$store.commit('gameStart')"
                    >準備OK？では、ゲームスタート！！！
                    <svg class="btn__arrow">
                      <use xlink:href="#arrow"></use>
                    </svg>
                  </router-link>
                </div>
              </section>
            </template>
          </Page>
        </div>
      </div>
    </section>
  </main>

  <teleport to="body" v-if="isConfirm">
    <yes-no-dialog
      message="ゲームをやめますか？"
      yes-message="はい"
      no-message="いいえ"
      style="
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 80%;
        height: 50%;
        background-color: rgba(150, 150, 150, 150);
      "
      title-style="text-align: center"
      button-style="margin:10px"
      v-on:yes="reset"
      v-on:no="this.$router.push('/main')"
    >
    </yes-no-dialog>
  </teleport>
</template>

<script>
// @ is an alias to /src

import AnimatedText from "../components/AnimatedText";
import Page from "@/components/Page";
import yesNoDialog from "../components/yesNoDialog";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    AnimatedText,
    Page,
    yesNoDialog,
  },
  data() {
    return {
      isFirstMessageEnd: false,
      isMessageEnd: false,
      isConfirm: false,
    };
  },
  inject: ["reload"],
  computed: {
    ...mapGetters(["getIsGameClear"]),
  },

  mounted() {
    if (this.$store.state.isGameStart) {
      this.isConfirm = true;
    }
    if (this.getIsGameClear) {
      this.reset();
    }
  },
  methods: {
    reset() {
      this.$store.commit("resetState");
      this.reload();
    },
  },
};
</script>
