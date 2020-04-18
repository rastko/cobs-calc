<template lang="pug">

div
  layout
    .col-md-6.mb-3(slot="header")
      userInput(@input="setSum")

    table.table-striped.table(slot="body")
      tr
        th Shares
        th Receives
      results-row(
        v-if="sum > 0"
        v-for="(value, index) in getValues",
        :key="index",
        :index="index+1"
        :value="value",
      )

</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
import layout from "./layout";
import userInput from "./components/user-input";
import resultsRow from "./components/results-row";

export default {
  name: "app",
  components: {
    layout,
    userInput,
    resultsRow
  },
  methods: {
    ...mapActions(["setSum"])
  },
  computed: {
    ...mapState(["sum"]),
    ...mapGetters(["getValues"])
  }
};
</script>
