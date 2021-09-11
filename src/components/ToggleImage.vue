<template>
 <transition name="change-image" mode="out-in">
   <img :key="this.imageObjects[this.number].index" @click="toggle" :src="this.imageObjects[this.number].image" :alt="this.imageObjects[this.number].alt" />
 </transition>
</template>

<script>
export default {
  name: "ToggleImage",
  props: ["images", "alts", "modelValue"],
  data() {
    return {
      number: 0,
    };
  },
  computed:{
    imageObjects(){
      return this.images.map((image,index)=>{

        if((!this.alts)||index>=this.alts.length){
          return {image:image,index:index,alt:''}
        }else{
          return {image:image,index:index,alt:this.alts[index]}
        }
      })
    }
  },

  methods: {
    toggle() {
      this.number = (this.number + 1) % this.images.length;
      this.$emit("update:modelValue", this.number);
    },
  },
};
</script>

<style>
.change-image-enter-active,.change-image-leave-active{
  transition: opacity 0.1s ease;
}
.change-image-enter-from,.change-image-leave-to{
  opacity: 0;
}

</style>

