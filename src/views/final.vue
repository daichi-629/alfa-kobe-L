<template>
  <main class="main final-page">
    <section class="section">
      <div class="container">
        <div class="box bg-color--subcolor">
          <h2 class="section-title--border">全ステージ クリア！</h2>
          <p class="text-center">
            おめでとう！あなたはついに全ての謎を解き、遊園地から脱出することができた
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <figure class="image__container">
          <img src="../assets/images/stage.png" alt="" />
        </figure>
        <!--  YouTube貼り付け
            <div class="youtube__container">
              <div class="youtube">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/IRyJe-0Uie0?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
Youtube貼り付けここまで-->
        <p class="text-center">
          あなたはきっと、このメッセージをずっと忘れることはないだろう・・・。<br />
          これからも家庭科室が封鎖されるようなことがあったら、<br />
          この教訓をしっかり思い出してくれ。
        </p>
        <p class="text-center">それでは、また会おう！</p>
      </div>
    </section>

    <section class="section bg-color--keycolor">
      <div class="container">
        <h2 class="section-title">遊んでくれてありがとう！</h2>
        <p class="font-eng text-center">Special Thanks</p>
        <div class="row">
          <div class="column">
            <div class="card">
              <h3 class="card__title">リアル脱出ゲームとは</h3>
              <p class="card__content">
                2004年に発表されたネットで爆発的に盛り上がった「脱出ゲーム」を、そのフォーマットそのままに現実世界に移し替えた大胆な遊びが「リアル脱出ゲーム」。マンションの1室や廃校、廃病院、そして東京ドームや六本木ヒルズなど、様々な場所で開催され、2007年に初開催して以降、現在までで累計820万人以上を動員。日本のみならず上海、台湾、シンガポールやサンフランシスコなど全世界で参加者を興奮の渦に巻き込み、男女問わずあらゆる世代を取り込む、今大注目の体験型エンターテインメント。
              </p>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h3 class="card__title">このゲームの企画者</h3>
              <p class="card__content">
                Lグループ<br />
                謎担当:土手口、小野<br />
                デザイン担当:岡本、鯉田<br />
                web担当:松下<br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <button class="btn" @click="gotoTop">トップへ戻る</button>
    </section>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "final",
  computed: {
    ...mapGetters(["getIsGameClear"]),
  },
  mounted() {
    if (!this.getIsGameClear) {
      this.$router.push({ name: "index" });
    }
  },
  methods: {
    gotoTop() {
      this.$store.commit("resetState");
      this.$router.push({ name: "index" });
    },
  },
};
</script>
