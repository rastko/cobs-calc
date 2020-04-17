<template lang="pug">
div
  layout
    userInput(slot="header" @input="calculate")

    table.table-striped.table(slot="body")
      results(v-for="index in 9", :key="index", :value="index")

</template>

<script>
import layout from "./layout.vue";
import userInput from "./user-input.vue";
import results from "./results.vue";

export default {
  name: "app",
  components: {
    layout,
    userInput,
    results,
  },
  data: () => ({
    sum: 0,
  }),
  methods: {
    calculate(val) {
      this.sum = val;
    },
  },
};
</script>
