<template>
  <Page is-loop="false">
    <template v-for="i in slotNames" :key.attr="i" v-slot:[i]>
      <p class="clickable">{{ i }}</p>
    </template>
  </Page>
  <AnimatedText
    :is-start="this.isStartText"
    message="あいうえおkっsjぢfじあおfじどあjふぃだおjふぃおあjふぃおあ"
    interval="50"
    v-slot:default="{ message }"
    v-on:end-message="isEnded = true"
  >
    {{ message }}
  </AnimatedText>
  <button @click="isStartText = !isStartText">開始</button>
</template>

<script>
import Page from "@/components/Page";
import AnimatedText from "@/components/AnimatedText";

export default {
  name: "testpage",
  components: {
    Page,
    AnimatedText,
  },
  data() {
    return {
      isStartText: false,
      isEnded: false,
    };
  },
  computed: {
    slotNames() {
      return ["p1", "p2", "p3"];
    },
  },
};
</script>
