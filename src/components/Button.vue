<template>
  <div
    tabindex="0"
    class="btn bold"
    @click="$emit('click')"
    @keydown.enter="$emit('click')"
    @keydown.space="$emit('click')"
  >
    <slot />
  </div>
</template>

<script>
  export default {
  };
</script>

<style lang="scss" scoped>
  @import '../styles.scss';

  .btn {
    background-color: #ffffff;
    border-radius: 6px;
    border: 1px solid #dcdcdc;
    display: inline-block;
    cursor: pointer;
    color: #666666;
    padding: 6px 24px;
    box-shadow: $box-shadow;
  }

  .btn:hover {
    background-color: #f6f6f6;
  }

  .btn:active {
    position: relative;
    top: 1px;
  }

  .btn-large {
    padding: 30px 60px;
    font-size: $font-size-large;
  }

  @include mobile {
    .btn-large {
      padding: 20px 40px;
    }
  }
</style>
