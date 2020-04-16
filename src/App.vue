<template lang="pug">
#app
  .container
    .header(style="margin: 40px 0 20px 0")
      .row
        .form-group
          input.form-control(type="number", v-model="sum", placeholder="Amount")

      .row
        table.table.table-striped
          tr
            th Shares
            th Receives
          tr(v-for="index in 9", :key="index")
            td {{ index }}
            td {{ sum / 10 * index }}
</template>

<script>
export default {
  name: "app",
  data: () => {
    return {
      sum: 0,
    };
  },
};
</script>
