<template>
  <section>
    <!-- STAGE3-1問題セクション ここから -->
    <section class="section">
      <div class="container">
        <h2 class="section-title section-title--keycolorlight">
          <span class="section-title__stage">STAGE：3</span>家庭科室の課題とは
        </h2>
        <p class="text-center">
          黒板から得たメッセージは、「食物の廃棄問題」だった。<br />
          どうやら、廃棄にかかる費用がかかりすぎて小学校の運営が厳しくなったようだ。。<br />
          これらを解決するための最後の謎を解いていこう！
        </p>
        <figure class="image__container">
          <img src="../../assets/images/stage.png" alt="" />
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
          <mapquiz :correct-item="[1, 0]" stage="stage3" :quiz="1"> </mapquiz>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import mapquiz from "../mapquiz";
export default {
  name: "stage3Question",
  components: {
    mapquiz,
  },
};
</script>

<style scoped></style>
