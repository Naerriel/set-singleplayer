<template>
  <header>
    <h1>Set</h1>

    <div>
        <span>
          Time: {{ time }}s
        </span>
      <span>
          Points: {{ points }}
        </span>
      <app-button @click="$emit('restart')">
        Restart
      </app-button>
    </div>
  </header>
</template>

<script lang="js">
  import Button from '../../components/Button.vue';

  export default {
    props: {
      time: {
        type: Number,
        required: true,
      },

      points: {
        type: Number,
        required: true,
      }
    },

    components: {
      'app-button': Button,
    }
  };
</script>

<style lang="scss" scoped>
  @import '../../styles.scss';

  header {
    max-width: $game-width;
    margin: auto;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  header span,
  header .btn {
    margin-left: 10px;
  }
</style>
