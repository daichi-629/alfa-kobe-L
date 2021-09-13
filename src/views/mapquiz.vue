<template>
  <div style="position: relative">
    <map-view
      :row="2"
      :column="3"
      :backgroundImage="require('@/assets/images/map.png')"
      :size="{ width: '812px', height: '542px' }"
      :grid-item-styles="{
        width: 'auto',
        height: 'auto',
        margin: 0,
        border: '1px solid gray',
        'background-color': 'rgba(255, 255, 255, 0)',
        display: 'block',
      }"
      :grid-item-styles-on-hover="{
        'background-color': 'rgba(200, 200, 200, 10)',
        opacity: 0.5,
      }"
      :component-styles="{
        position: 'absolute',
      }"
      :paddings="{ top: '14.7%', bottom: '0%', left: '10.5%', right: '7.5%' }"
      :item-sizes="{ row: ['57%'], column: ['35.5%', '34.7%'] }"
      @item-click="itemClick($event)"
    ></map-view>
  </div>
</template>

<script>
import MapView from "../components/GridInput";
export default {
  name: "mapQuiz",
  props: ["correctItem", "stage", "quiz"],
  data() {
    return {};
  },
  components: {
    MapView,
  },
  methods: {
    itemClick(item) {
      const isCorrect =
        item[0] === this.correctItem[0] && item[1] === this.correctItem[1];
      this.$store.commit("answerInput", {
        stage: this.stage,
        number: this.quiz,
        event: isCorrect,
      });
    },
  },
};
</script>

<style scoped></style>
