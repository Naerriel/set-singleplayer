<template>
  <div class="game">
    <Header
      :time="time"
      :points="points"
      @restart="restart"
    />
    <div
      v-if="board.length"
      class="board"
    >
      <div
        v-for="(card, index) in board"
        :key="card.id"
        :class="getCardWrapperClasses(index)"
        tabindex="0"
        @click="selectCard(index)"
        @keydown.enter="selectCard(index)"
        @keydown.space="selectCard(index)"
      >
        <card
          :card="card"
          class="card"
        />
      </div>
    </div>
    <div
      v-else
      class="start-btn-wrapper"
    >
      <app-button
        class="start-btn btn-large"
        @click="restart"
      >
        Start
      </app-button>
    </div>
  </div>
</template>

<script lang="js">
  import { mapState } from 'vuex';
  import Card from './components/Card/Card.vue';
  import Button from '../components/Button.vue';
  import Header from './components/Header.vue';

  export default {
    data() {
      return {
        selectedIds: [],
        time: 0,
        timeUpdater: null,
      };
    },

    computed: {
      ...mapState({
        board: (state) => state.board,
        points: (state) => state.points,
      }),
    },

    methods: {
      drawCards() {
        this.$store.dispatch('drawCards');
      },

      selectCard(index) {
        if (this.selectedIds.includes(index)) {
          this.selectedIds = this.selectedIds.filter((id) => id !== index);
          return;
        }
        this.selectedIds.push(index);

        if (this.selectedIds.length === 3) {
          this.selectSet();
        }
      },

      async selectSet() {
        await this.$store.dispatch('selectSet', this.selectedIds);
        this.selectedIds = [];
      },

      getCardWrapperClasses(index) {
        if (this.selectedIds.includes(index)) {
          return 'card-wrapper selected';
        }
        return 'card-wrapper';
      },

      restart() {
        this.selectedIds = [];
        this.$store.dispatch('restart');
        this.resetTime();
      },

      resetTime() {
        this.time = 0;
        if (this.timeUpdater) {
          clearInterval(this.timeUpdater);
        }
        this.timeUpdater = setInterval(() => {
          this.time += 1;
        }, 1000);
      }
    },

    beforeDestroy() {
      clearInterval(this.timeUpdater);
    },

    components: {
      Card,
      Header,
      'app-button': Button,
    }
  };
</script>

<style lang="scss" scoped>
  @import '../styles.scss';

  .game {
    padding: 10px 30px;
  }

  .board {
    margin: 50px auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    max-width: $game-width;
    width: 100%;
    min-width: 170px;
  }

  .start-btn-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
  }

  .card-wrapper {
    box-sizing: border-box;
    width: 20%;
    padding: 10px;
    min-width: 40px;
  }

  .outline .card-wrapper:focus {
    outline: none;

    .card {
      outline: $outline;
    }
  }

  .card {
    transition: transform 200ms;
    cursor: pointer;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .selected .card {
    transform: scale(1.05);
    border: 1px solid gold;
  }

  @include mobile {
    .board {
      margin: auto;
    }

    .card-wrapper {
      padding: 5px;
    }

    .start-btn-wrapper {
      height: 200px;
    }
  }

  @include small-mobile {
    .game {
      padding: 10px;
    }

    .card-wrapper {
      padding: 2px;
    }

    .card {
      padding: 0;
    }
  }
</style>
