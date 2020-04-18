<template lang="pug">
  .row
    form
      .form-group
        input.form-control(type="number" @input="$emit('input', $event.target.value)")
</template>

<script>
export default {
  name: "user-input"
};
</script>
