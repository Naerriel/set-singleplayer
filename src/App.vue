<template>
  <div
    id="app"
    :class="classNames"
  >
    <Game />
  </div>
</template>

<script lang="js">
  import Vue from 'vue';
  import Game from './containers/Game.vue';

  export default Vue.extend({
    name: 'App',

    data() {
      return {
        isOutline: false,
      };
    },

    computed: {
      cards() {
        return this.$store.cards;
      },

      classNames() {
        if (this.isOutline) {
          return 'outline';
        }
        return '';
      },
    },

    methods: {
      handleOutlines() {
        // If user is pressing "Tab" then the outline will be visible.
        const tabListener = (key) => {
          if (key.key === 'Tab' || key.code === 'Tab') {
            window.removeEventListener('keydown', tabListener);
            this.isOutline = true;
          }
        };

        window.addEventListener('keydown', tabListener);
      },
    },

    mounted() {
      this.handleOutlines();
    },

    components: {
      Game,
    }
  });
</script>

<style lang="scss">
  @import 'styles.scss';

  body {
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  * {
    box-sizing: border-box;
    outline: none;
  }

  .outline *:focus {
    outline: $outline;
  }

  @media screen and (min-width: 320px) and (max-width: 550px) and (orientation: portrait) {
    html {
      transform: rotate(-90deg);
      transform-origin: left top;
      width: 100vh;
      overflow-x: hidden;
      position: absolute;
      top: 100%;
      left: 0;
    }
  }
</style>
