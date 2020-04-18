<template lang="pug">

div
  layout
    userInput(slot="header" @input="setSum")

    table.table-striped.table(slot="body")
      results(
        v-for="(value, index) in getValues",
        :key="index",
        :index="index+1"
        :value="value",
      )

</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import layout from './layout.vue';
import userInput from './user-input.vue';
import results from './results.vue';

export default {
  name: 'app',
  components: {
    layout,
    userInput,
    results,
  },
  methods: {
    ...mapActions(['setSum']),
  },
  computed: {
    ...mapState(['sum']),
    ...mapGetters(['getValues']),
  },
};
</script>
