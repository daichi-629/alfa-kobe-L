import { createStore } from "vuex";

const store = createStore({
  state: {
    /* 解答
     *  ex. 問題2-3を追加する場合はstage2の配列に解答を追加します。
     *    q3: 'おおお',
     */
    correctAnswer: {
      stage1: {
        q1: "あああ",
      },
      stage2: {
        q1: "いいい",
        // q2: 'えええ',
        // q3: 'おおお'
      },
      stage3: {
        q1: "ううう",
        // q2: 'かかか',
        // q3: 'ききき',
      },
    },

    /* それぞれの問題が正解かどうか
     *  ex. 問題2-3を追加する場合は配列にfalseを追加します。
     */
    answer: {
      stage1: [false],
      stage2: [
        false, // 2-1
        // false, // 2-2
        // false, // 2-3
      ],
      stage3: [
        false, // 3-1
        // false, // 3-2
        // false, // 3-3
      ],
    },

    /* ステージの問題が全て正解かどうか */
    clear: {
      stage1: false,
      stage2: false,
      stage3: false,
    },

    /* 次のステージを表示するかどうか
     *  最終ステージはページを遷移するので設定不要です。
     */
    next: {
      stage1: false,
      stage2: false,
    },
    final: false,
  },
  mutations: {
    answerInput(state, payload) {
      state.answer[payload.stage][payload.number - 1] = payload.event;

      const result = state.answer[payload.stage].every((element) => {
        return element;
      });
      state.clear[payload.stage] = result;
      // console.log(payload)
      if (payload.final === "final" && result === true) {
        state.final = true;
      }
    },
    nextStage(state, payload) {
      state.clear[payload.stage] = false;
      state.next[payload.stage] = true;
    },
  },
});

export default store;
