<template>
  <Page>

    <template v-slot:p1>
      <h1 class = "clickable">test</h1>
      <p>testp</p>
    </template>
    <template v-slot:p2>
      <h2 class="clickable">test2</h2>
    </template>

  </Page>
</template>

<script>
import Page from "@/components/Page";

export default {
  name: "testpage",
  components:{
    Page
  }
};
</script>