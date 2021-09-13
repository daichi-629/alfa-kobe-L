<template>
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
    :paddings="{ top: '14.7%', bottom: '0%', left: '10.5%', right: '7.5%' }"
    :item-sizes="{ row: ['57%'], column: ['35.5%', '34.7%'] }"
    @item-click="itemClick($event)"
  ></map-view>
</template>

<script>
import MapView from "../components/GridInput";
export default {
  name: "testpage",
  data() {
    return {};
  },
  components: {
    MapView,
  },
  methods: {
    itemClick(item) {
      const isCorrect = item[0] == 0 && item[1] == 0;
      this.$store.commit("answerInput", {
        stage: "stage3",
        number: 1,
        event: isCorrect,
      });
    },
  },
};
</script>

<style scoped></style>
