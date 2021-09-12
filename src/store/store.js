import { createStore } from "vuex";

const store = createStore({
  state: {
    //現在のステージ
    currentStage: 1,
    //stageの情報
    stageData: {
      stage1: {
        questionData: [
          {
            correctAnswer: "あああ",
            isCorrect: false,
          },
        ],
      },
      stage2: {
        questionData: [
          {
            correctAnswer: "いいい",
            isCorrect: false,
          },
        ],
      },

      stage3: {
        questionData: [
          {
            correctAnswer: "ううう",
            isCorrect: false,
          },
        ],
      },
    },
  },
  mutations: {
    answerInput(state, payload) {
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
