<template>
  <pattern
    :id="patternId"
    data-name="striped"
    width="147.5"
    height="100"
    patternUnits="userSpaceOnUse"
    viewBox="0 0 147.5 100"
  >
    <rect class="fill-none" width="147.5" height="100"/>
    <line :class="lineColor" x1="146" y1="87" x2="294.75" y2="87"/>
    <line :class="lineColor" x1="146.25" y1="97.5" x2="295" y2="97.5"/>
    <line :class="lineColor" x1="-1.5" y1="87" x2="147.25" y2="87"/>
    <line :class="lineColor" x1="-1.25" y1="97.5" x2="147.5" y2="97.5"/>
    <line :class="lineColor" x1="146" y1="67" x2="294.75" y2="67"/>
    <line :class="lineColor" x1="146.25" y1="77.5" x2="295" y2="77.5"/>
    <line :class="lineColor" x1="-1.5" y1="67" x2="147.25" y2="67"/>
    <line :class="lineColor" x1="-1.25" y1="77.5" x2="147.5" y2="77.5"/>
    <line :class="lineColor" x1="146" y1="47" x2="294.75" y2="47"/>
    <line :class="lineColor" x1="146.25" y1="57.5" x2="295" y2="57.5"/>
    <line :class="lineColor" x1="-1.5" y1="47" x2="147.25" y2="47"/>
    <line :class="lineColor" x1="-1.25" y1="57.5" x2="147.5" y2="57.5"/>
    <line :class="lineColor" x1="146" y1="27" x2="294.75" y2="27"/>
    <line :class="lineColor" x1="146.25" y1="37.5" x2="295" y2="37.5"/>
    <line :class="lineColor" x1="-1.5" y1="27" x2="147.25" y2="27"/>
    <line :class="lineColor" x1="-1.25" y1="37.5" x2="147.5" y2="37.5"/>
    <line :class="lineColor" x1="146" y1="7" x2="294.75" y2="7"/>
    <line :class="lineColor" x1="146.25" y1="17.5" x2="295" y2="17.5"/>
    <line :class="lineColor" x1="-1.5" y1="7" x2="147.25" y2="7"/>
    <line :class="lineColor" x1="-1.25" y1="17.5" x2="147.5" y2="17.5"/>
  </pattern>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        required: true,
      }
    },

    computed: {
      lineColor() {
        return `line-${this.color}`;
      },

      patternId() {
        return `striped-${this.color}`;
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import '../../../styles.scss';

  .fill-none {
    fill: none;
  }

  .line-green {
    fill: url(#striped-green);
    stroke: $green;
    stroke-miterlimit: 10;
    stroke-width: 5px;
  }

  .line-red {
    fill: url(#striped-red);
    stroke: $red;
    stroke-miterlimit: 10;
    stroke-width: 5px;
  }

  .line-purple {
    fill: url(#striped-purple);
    stroke: $purple;
    stroke-miterlimit: 10;
    stroke-width: 5px;
  }
</style>
