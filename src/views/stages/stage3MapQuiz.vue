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
      :component-styles="{}"
      :paddings="{ top: '14.7%', bottom: '0%', left: '10.5%', right: '7.5%' }"
      :item-sizes="{ row: ['57%'], column: ['35.5%', '34.7%'] }"
      @item-click="itemClick($event)"
    ></map-view>
  </div>
  <teleport to="body" v-if="this.dialog.isOpen">
    <div
      style="
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #999999;
        opacity: 0.3;
      "
    ></div>
    <yes-no-dialog
      :message="this.dialog.titleMessage"
      yes-message="はい"
      no-message="いいえ"
      style="
        position: fixed;
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
      @no="dialog.isOpen = false"
      @yes="dialogYesClick"
    >
    </yes-no-dialog>
  </teleport>
  <teleport to="body" v-if="inCorrect">
    <AnimatedText
      message="そこには何もないようだ"
      is-start="true"
      :interval="100"
      @end-message="inCorrectMessageEnd"
      v-slot="{ message }"
    >
      <div
        style="
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #999999;
          opacity: 0.3;
        "
      ></div>
      <div
        style="
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        "
      >
        <h1>
          {{ message }}
        </h1>
      </div>
    </AnimatedText>
  </teleport>
</template>

<script>
import MapView from "../../components/GridInput";
import yesNoDialog from "../../components/yesNoDialog";
import AnimatedText from "../../components/AnimatedText";
import { mapState } from "vuex";
export default {
  name: "mapQuiz",
  data() {
    return {
      mapData: [
        ["観覧車", "メリーゴーランド", "ゴーカート"],
        ["サーカス", "城", "ジェットコースター"],
      ],
      dialog: {
        index: [],
        isOpen: false,
        titleMessage: "",
      },
      inCorrect: false,
    };
  },
  components: {
    AnimatedText,
    MapView,
    yesNoDialog,
  },

  computed: {
    ...mapState(["textSpeed"]),
  },
  methods: {
    itemClick(item) {
      const placeName = this.mapData[item[0]][item[1]];
      this.dialog.index = item;
      this.dialog.titleMessage = placeName + " に行きますか？";
      this.dialog.isOpen = true;
    },
    inCorrectMessageEnd() {
      setTimeout(() => {
        this.inCorrect = false;
      }, 1000);
    },

    dialogYesClick() {
      this.dialog.isOpen = false;
      const isCorrect =
        this.dialog.index[0] === 0 && this.dialog.index[1] === 1;
      if (isCorrect) {
        this.$store.commit("answerInput", {
          stage: "stage3",
          number: 1,
          event: isCorrect,
        });
      } else {
        this.inCorrect = true;
      }
    },
  },
};
</script>

<style scoped></style>
