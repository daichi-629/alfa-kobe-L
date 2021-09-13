<template>
  <div :style="rootElementCss">
    <div :style="gridRootCss" style="display: grid; width: 100%; height: 100%">
      <button
        v-for="index in this.gridIndexes"
        :style="[
          {
            gridRow: index[0],
            gridColumn: index[1],
          },
          isHoverData[index[0] - 1][index[1] - 1]
            ? $_gridItemStylesOnHover
            : gridItemStyles,
        ]"
        :key="index[0].toString() + index[1].toString()"
        v-on:mouseout="onMouseOut(index[0] - 1, index[1] - 1)"
        v-on:mouseover="onMouseOver(index[0] - 1, index[1] - 1)"
        @click="onGridItemClick(index[0] - 1, index[1] - 1)"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "map",
  props: {
    row: {
      type: Number,
      required: true,
    },
    column: {
      type: Number,
      required: true,
    },
    paddings: {
      type: Object,
      required: false,
      default() {
        return { top: 0, left: 0, right: 0, bottom: 0 };
      },
    },
    backgroundImage: {
      type: String,
      required: false,
    },
    size: {
      type: Object,
      require: true,
      default() {
        return { width: "500px", height: "500px" };
      },
    },
    itemSizes: {
      type: Object,
      require: false,
      default() {
        return { row: [], column: [] };
      },
      //ex:{row:['10%','90%'],column:['20%','30%']}
    },
    gridItemStyles: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
    gridItemStylesOnHover: {
      type: Object,
      required: false,
      default() {
        return {};
      },
    },
    componentStyles: {
      type: Object,
      required: false,
      default() {},
    },
  },
  data() {
    return {
      isHoverData: [],
    };
  },
  computed: {
    $_gridItemStylesOnHover() {
      return { ...this.gridItemStyles, ...this.gridItemStylesOnHover };
    },
    cssRowsProperty() {
      let value = "";
      for (let i = 0; i < this.itemSizes.row.length; i++) {
        value += " " + this.itemSizes.row[i];
      }
      for (let i = this.itemSizes.row.length; i < this.row; i++) {
        value += " " + "1fr";
      }
      return value;
    },
    cssColumnsProperty() {
      let value = "";
      for (let i = 0; i < this.itemSizes.column.length; i++) {
        value += " " + this.itemSizes.column[i];
      }
      for (let i = this.itemSizes.column.length; i < this.column; i++) {
        value += " " + "1fr";
      }
      return value;
    },
    gridIndexes() {
      let value = [];
      for (let i = 0; i < this.row; i++) {
        for (let j = 0; j < this.column; j++) {
          value.push([i + 1, j + 1]);
        }
      }
      return value;
    },
    rootElementCss() {
      return {
        backgroundImage: "url(" + this.backgroundImage + ")",
        ...this.size,
        ...this.componentStyles,
      };
    },
    gridRootCss() {
      return {
        gridTemplateRows: this.cssRowsProperty,
        gridTemplateColumns: this.cssColumnsProperty,
        paddingTop: this.paddings.top,
        paddingBottom: this.paddings.bottom,
        paddingLeft: this.paddings.left,
        paddingRight: this.paddings.right,
      };
    },
  },
  watch: {
    row(newParam) {
      this.isHoverData = this.createIsHoverData(newParam, this.column);
    },
    column(newParam) {
      this.isHoverData = this.createIsHoverData(this.row, newParam);
    },
  },
  methods: {
    onMouseOver(row, column) {
      this.isHoverData[row][column] = true;
      console.log("over");
    },
    onMouseOut(row, column) {
      this.isHoverData[row][column] = false;
      console.log("out");
    },
    createIsHoverData(row, column) {
      const v = new Array(row)
        .fill(null)
        .map(() => new Array(column).fill(false));
      return v;
    },
    onGridItemClick(row, column) {
      this.$emit("item-click", [row, column]);
    },
  },
  created() {
    this.isHoverData = this.createIsHoverData(this.row, this.column);
  },
};
</script>

<style scoped></style>
