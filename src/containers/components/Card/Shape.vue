<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 78 129">
    <Stripes
      :color="color"
    />
    <path
      :class="pathClass"
      :d="pathD"
    />
  </svg>
</template>

<script>
  import Stripes from './Stripes.vue';
  import { CardShape } from '../../../logic/model';

  export default {
    props: {
      shading: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
      shape: {
        type: String,
        required: true,
      }
    },

    computed: {
      pathClass() {
        if (this.shading === 'striped') {
          return `${this.shading}-${this.color}`;
        }
        return `${this.shading} ${this.color}`;
      },

      pathD() {
        const paths = {
          [CardShape.diamond]: 'M38.8,11.61l25,50-25,50-25-50Z',
          [CardShape.oval]: `M39.26,114.16a19.46,19.46,0,0,1-19.5-19.5v-60a19.5,19.5,0,0,1,39,
          0v60A19.46,19.46,0,0,1,39.26,114.16Z`,
          [CardShape.squiggle]: `M52.45,74.56c0,16.1,11,19.9,10.6,28.3-.5,9.2-21.1,12.2-33.4,3.8s-15.8-21.2-9.3-38a42.48,
            42.48,0,0,0,4.8-20c0-16.1-11-19.9-10.6-28.3.5-9.1,21.1-12.2,33.4-3.7s15.8,21.2,9.3,38C54.45,61.76,
            52.55,68.56,52.45,74.56Z`,
        };
        return paths[this.shape];
      },
    },

    components: {
      Stripes,
    }
  };
</script>

<style lang="scss" scoped>
  @import '../../../styles.scss';

  .red {
    stroke: $red;
    fill: $red;
  }

  .green {
    stroke: $green;
    fill: $green;
  }

  .purple {
    stroke: $purple;
    fill: $purple;
  }

  .striped-green,
  .striped-red,
  .striped-purple {
    stroke-miterlimit: 10;
    stroke-width: 5px;
  }

  .striped-green {
    fill: url(#striped-green);
    stroke: $green;
  }

  .striped-red {
    fill: url(#striped-red);
    stroke: $red;
  }

  .striped-purple {
    fill: url(#striped-purple);
    stroke: $purple;
  }

  .open {
    fill: none;
    stroke-width: 3px;
  }
</style>
