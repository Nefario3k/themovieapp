<template>
  <div class="loading">
    <span></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loading {
  height: 100%;
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes circle-loading {
    to {
      transform: rotateZ(360deg);
    }
  }

  span {
    display: block;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: var(--loader-color);
    animation: circle-loading 1200ms ease infinite;
  }
}
</style>
