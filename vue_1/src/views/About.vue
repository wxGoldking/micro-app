<template>
  <div class="about">
    <h1>This is an about page {{state.count}}</h1>
    <button @click="changeValue">add</button>
  </div>
</template>
<script>
import action from '@/qiankun/actions'

export default {
  name: "about",
  data() {
    return {
      state: {},
    }
  },
  created() {
    // 接收state
    action.onGlobalStateChange((state) => {
      this.state = state
      console.log(state);
    }, true);
  },
  methods: {
    changeValue() {
      // 修改state
      action.setGlobalState({ count: this.state.count + 1 });
    },
  },
};
</script>
