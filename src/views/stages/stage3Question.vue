<template>
  <section>
    <!-- STAGE3-1問題セクション ここから -->
    <section class="section">
      <div class="container">
        <h2 class="section-title section-title--keycolorlight">
          <span class="section-title__stage">STAGE：3</span>ジェットコースター
        </h2>
        <p class="text-center">
          サーカス会場で見たメッセージはジェットコースターであった。<br />
          ジェットコースターから何かが見えるかもしれない
        </p>
        <transition appear name="appear-quiz">
          <figure class="image__container">
            <img src="../../assets/images/stage3Question.png" alt="" />
          </figure>
        </transition>
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
      </div>
    </section>
  </section>
</template>

<script>
import mapquiz from "./stage3MapQuiz";
export default {
  name: "stage3Question",
  components: {
    mapquiz,
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
