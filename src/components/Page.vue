<!--<template>-->
<!--  <template v-for="(page, index) in pages" :key="page.pageName">-->
<!--    <div @click="nextPage">-->
<!--      <slot :name="page.pageName" v-if="currentPageIndex === index"></slot>-->
<!--    </div>-->
<!--  </template>-->
<!--</template>-->

<script>
import { h, Transition } from "vue";
export default {
  props: ["modelValue", "isLoop"],
  name: "Page",
  data() {
    return {
      currentPageIndex: 0,
    };
  },
  computed: {
    pages() {
      let _pages = [];
      const slotsLength = Object.keys(this.$slots).length;
      for (let i = 0; i < slotsLength; i++) {
        const slotName = "p" + (i + 1).toString();
        // const clickAble=this.$slots[slotName]()
        _pages.push({ pageName: slotName });
      }
      return _pages;
    },
  },
  mounted() {
    // console.log(this.$slots.p1());
    // console.log(this.$slots.p1()[0].props);
  },
  methods: {
    nextPage() {
      if (this.isLoop) {
        this.currentPageIndex = (this.currentPageIndex + 1) % this.pages.length;
        this.$emit("update:modelValue", this.currentPageIndex);
      } else {
        if (this.currentPageIndex < this.pages.length - 1) {
          this.currentPageIndex = this.currentPageIndex + 1;
          this.$emit("update:modelValue", this.currentPageIndex);
        }
      }
    },
  },
  render() {
    const currentPage = this.pages[this.currentPageIndex].pageName;
    const pageVNodes = this.$slots[currentPage]().map((node) => {
      let classes = [];
      if (node.props !== null) {
        classes = node.props["class"].split(" ");
      } else {
        classes = [];
      }
      if (classes.includes("clickable")) {
        return h(
          node.type,
          {
            onClick: () => {
              this.nextPage();
            },
          },
          node.children
        );
      } else {
        return h(node.type, {}, node.children);
      }
    });
    return h(
      Transition,
      { mode: "out-in", name: "change-page" },
      h("div", { key: currentPage }, pageVNodes)
    );
  },
};
</script>

<style>
.change-page-enter-active,
.change-page-leave-active {
  transition: opacity 0.1s ease;
}
.change-page-enter-from,
.change-page-leave-to {
  opacity: 0;
}
</style>
