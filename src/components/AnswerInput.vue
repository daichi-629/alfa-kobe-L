<template>
  <div class="answer__container">
    <div class="answer">
      <input
        type="text"
        v-model="inputAnswer"
        placeholder="ここに答えを入力しよう"
      />
    </div>
    <p v-if="message === ngMessage" class="err-message">{{ message }}</p>
    <button v-on:click="judgement(inputAnswer)">送信</button>
    <p v-if="message === okMessage" class="err-message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "AnswerInput",
  props: ["correct"],
  data: function () {
    return {
      /* 送信ボタン上下に表示されるメッセージ */
      okMessage: "正解！",
      ngMessage: "そのキーワードは違うようだぞ！？",
      message: "",
      inputAnswer: "",
    };
  },
  methods: {
    judgement(answer) {
      if (this.correct.includes(answer)) {
        // 入力値が解答と一致する場合
        this.message = this.okMessage;
        this.$emit("answerInput", true);
      } else {
        // 一致しない場合
        this.message = this.ngMessage;
        this.$emit("answerInput", false);
      }
    },
  },
};
</script>
