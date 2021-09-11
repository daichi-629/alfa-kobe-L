<template>
  <Page is-loop="false" >
    <!--    <template v-slot:p1>-->
    <!--      <h1 class = "clickable">test</h1>-->
    <!--      <p>testp</p>-->
    <!--    </template>-->
    <!--    <template v-slot:p2>-->
    <!--      <h2 class="clickable">test2</h2>-->
    <!--    </template>-->
    <template v-for="i in slotNames" :key.attr="i" v-slot:[i] >
      <p class="clickable">{{i}}</p>
    </template>
  </Page>
</template>

<script>
import Page from "@/components/Page";

export default {
  name: "testpage",
  components: {
    Page,
  },
  computed: {
    slotNames() {
      return ["p1", "p2", "p3"];
    },
  },
};
</script>
