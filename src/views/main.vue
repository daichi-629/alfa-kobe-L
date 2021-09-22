<template>
  <main class="main main-page">
    <div id="stage">
      <!-- STAGE1 ここから -->
      <div v-if="this.currentStage === 1" id="sectionStage1" class="stage">
        <stage1-question
          v-if="!this.getIsStageClear('stage1')"
        ></stage1-question>
        <!-- STAGE1問題セクション ここまで -->
        <!-- STAGE1クリア画面 ここから -->
        <stage-clear
          message="サーカスという答えが得られた。サーカスに行ってみよう。"
          :stage="1"
          v-else
        >
        </stage-clear>
        <!-- STAGE1クリア画面 ここまで -->
      </div>
      <!-- STAGE1 ここまで -->

      <!-- STAGE2 ここから -->
      <div v-else-if="this.currentStage === 2" id="sectionStage2" class="stage">
        <stage2-question v-if="!getIsStageClear('stage2')"></stage2-question>
        <!-- STAGE2クリア画面 ここから -->
        <stage-clear v-else message="クリアした" :stage="2"> </stage-clear>
        <!-- STAGE2クリア画面 ここまで -->
      </div>
      <!-- STAGE2 ここまで -->

      <!-- STAGE3 ここから -->
      <div v-if="this.currentStage === 3" id="sectionStage3" class="stage">
        <stage3-question v-if="!getIsStageClear('stage3')"></stage3-question>
        <stage-clear v-else message="くりあ" :stage="3"></stage-clear>
        <!-- STAGE3-1解答入力セクション ここまで -->
      </div>
      <!-- STAGE3 ここまで -->
      <div v-else-if="this.currentStage === 4" class="stage">
        <stage4-question v-if="!getIsStageClear('stage4')"></stage4-question>
        <section v-else></section>
      </div>
    </div>
  </main>
</template>
<script>
// import ToggleImageQuiz from "@/components/ToggleImageQuiz";
import { mapGetters, mapState } from "vuex";
import stageClear from "./stageClear";
import stage1Question from "./stages/stage1Question";
import stage2Question from "./stages/stage2Question";
import stage3Question from "./stages/stage3Question";
import stage4Question from "./stages/stage4Question";

export default {
  name: "Main",
  data() {
    return {};
  },
  components: {
    // ToggleImageQuiz,
    stageClear,
    stage1Question,
    stage2Question,
    stage3Question,
    stage4Question,
  },
  computed: {
    ...mapState(["currentStage", "stageData", "isGameStart", "textSpeed"]),
    ...mapGetters(["getIsStageClear", "getIsGameClear"]),
  },
  watch: {
    getIsGameClear(newParam) {
      if (newParam) {
        this.$router.push({ name: "final" });
      }
    },
  },
  mounted() {
    if (!this.isGameStart) {
      this.$router.push({ name: "index" });
    }
    if (this.getIsGameClear) {
      this.$router.push({ name: "final" });
    }
  },
  methods: {
    nextStage(stage) {
      this.$store.commit("nextStage", { stage: stage });
    },
  },
};
</script>

<style scoped></style>
