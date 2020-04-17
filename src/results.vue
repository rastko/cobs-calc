<template lang="pug">
  tr
    td {{ value }}
    td {{ sum / 10 * value }}
</template>

<script>
export default {
  name: "results",
  props: ["value"],
};
</script>
