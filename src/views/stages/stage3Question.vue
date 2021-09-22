<template>
  <section>
    <!-- STAGE3-1問題セクション ここから -->
    <section class="section">
      <div class="container">
        <h2 class="section-title section-title--keycolorlight">
          <span class="section-title__stage">STAGE：3</span>ジェットコースター
        </h2>
        <Page is-loop="false" v-model="currentPage">
          <template v-slot:p1>
            <AnimatedText
              message="サーカス会場で見たメッセージはジェットコースターであった。
ジェットコースターから何かが見えるかもしれない"
              v-slot:default="{ message }"
              :interval="this.textSpeed"
              :is-start="true"
              @end-message="this.isTextEnd = true"
              :class="{ clickable: this.isTextEnd }"
            >
              <p class="text-center">{{ message }}</p>
            </AnimatedText>
          </template>
          <template v-slot:p2>
            <transition appear name="appear-quiz">
              <figure class="image__container">
                <img src="../../assets/images/stage3/stage3Question.png" alt="" />
              </figure>
            </transition>
          </template>
        </Page>
      </div>
    </section>
    <!-- STAGE3-1問題セクション ここまで -->

    <!-- STAGE3-1解答入力セクションここから -->
    <transition name="appear-quiz" appear>
      <section class="section bg-color--keycolor" v-if="currentPage === 1">
        <div class="container">
          <h2 class="section-title">
            <span class="section-title__stage">STAGE：3</span>地図を選択
          </h2>
          <div style="display: flex; justify-content: center">
            <mapquiz> </mapquiz>
          </div>
        </div>
      </section>
    </transition>
  </section>
</template>

<script>
import mapquiz from "./stage3MapQuiz";
import AnimatedText from "../../components/AnimatedText";
import Page from "../../components/Page";
import { mapState } from "vuex";
export default {
  name: "stage3Question",
  components: {
    mapquiz,
    AnimatedText,
    Page,
  },
  data() {
    return { isTextEnd: false, currentPage: 0 };
  },
  computed: {
    ...mapState(["textSpeed"]),
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
