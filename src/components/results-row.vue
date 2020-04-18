<template lang="pug">
  tr
    td {{ index }}
    td {{ value }}
</template>

<script>
export default {
  name: "results",
  props: ["index", "value"]
};
</script>
