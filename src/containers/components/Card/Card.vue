<template>
  <div class="card">
    <Shape
      v-for="(_, index) in card.number"
      :key="index"
      :shape="card.shape"
      :color="card.color"
      :shading="card.shading"
    />
  </div>
</template>

<script>

  import Shape from './Shape.vue';

  export default {
    props: {
      card: {
        type: Object,
        required: true,
      }
    },

    components: {
      Shape,
    }
  };
</script>

<style lang="scss" scoped>
  @import '../../../styles.scss';

  .card {
    display: flex;
    border-radius: 4px;
    height: $card-height;
    justify-content: center;
    align-items: center;
    padding: $card-padding;
    border: 1px solid darkgrey;
    box-shadow: $box-shadow;

    svg {
      height: $shape-height;
    }
  }

  @include mobile {
    .card {
      height: $card-height-mobile;
      padding: $card-padding-mobile;

      svg {
        height: $shape-height-mobile;
      }
    }
  }
</style>
