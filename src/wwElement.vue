<template>
    <div :style="loaderStyle" class="skeletonLoader"></div>
  </template>
  
  <script>
  export default {
    props: {
      content: { type: Object, required: true },
    },
    computed: {
      loaderStyle() {
        return {
          width: this.content.loaderWidth,
          height: this.content.loaderHeight,
          borderRadius: this.content.borderRadius,
          backgroundColor: this.content.backgroundColor,
          borderRadius: this.content.borderRadius 
        };
      },
    },
  
  };
  </script>
  
  <style scoped>
  .skeletonLoader {
    animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  @keyframes pulse {
  
    0%,
    100% {
      opacity: 1;
    }
  
    50% {
      opacity: 0.5;
    }
  }
  </style>
  