import { createStore } from "vuex";

function initialState() {
  return {
    //現在のステージ
    currentStage: 1,
    isGameStart: false,
    //stageの情報
    stageData: {
      stage1: {
        questionData: [
          {
            correctAnswer: ["さーかす", "サーカス"],
            isCorrect: false,
          },
        ],
      },
      stage2: {
        questionData: [
          {
            correctAnswer: ["ジェットコースター", "じぇっとこーすたー"],
            isCorrect: false,
          },
        ],
      },

      stage3: {
        questionData: [
          {
            correctAnswer: ["ううう"],
            isCorrect: false,
          },
        ],
      },
      stage4: {
        questionData: [
          {
            correctAnswer: ["えええ"],
            isCorrect: false,
          },
        ],
      },
    },
    textSpeed: 1,
  };
}
const state = initialState();

const store = createStore({
  state: state,
  mutations: {
    answerInput(state, payload) {
      //payload={event:boolean,stage:String,number:Number}
      //event:正誤 stage:stage名 number:クイズ番号
      state.stageData[payload.stage].questionData[
        payload.number - 1
      ].isCorrect = payload.event;
    },
    nextStage(state, payload) {
      // state.clear[payload.stage] = false;
      // state.next[payload.stage] = true;
      console.log(payload);
      state.currentStage++;
    },
    gameStart(state) {
      state.isGameStart = true;
    },
    resetState(state) {
      Object.assign(state, initialState());
    },
  },
  getters: {
    getIsStageClear: (state) => (stage) => {
      return state.stageData[stage].questionData.every((i) => i.isCorrect);
    },
    getIsGameClear(state, getters) {
      return Object.keys(state.stageData).every((stage) => {
        return getters.getIsStageClear(stage);
      });
    },
  },
});

export default store;
