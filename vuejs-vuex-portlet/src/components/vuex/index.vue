<template>
  <div class="card">
    <div class="card-body">
      <div class="card-header">
        <h5 class="card-title">Vuex</h5>
        <span class="card-number">
          {{ count }}
        </span>
      </div>
      <p class="card-text">
        Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all
        the components in an application, with rules ensuring that the state can only be mutated in a predictable
        fashion.
      </p>
      <action />
    </div>
  </div>
</template>

<script>
import Action from './action'
import { mapState } from 'vuex'

export default {
  name: 'vuex',
  components: {
    Action
  },
  computed: mapState(['count'])
}
</script>

<style scoped lang="scss">
.card {
  box-shadow: none;
  border: 1px solid var(--gray-300);
  margin-bottom: 20px;

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    padding: 0;
  }

  &-title {
    font-size: 20px;
    margin-bottom: 8px;
  }

  &-number {
    color: white;
    font-weight: bold;
    font-size: 16px;
    background: var(--primary);
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
  }
}
</style>
