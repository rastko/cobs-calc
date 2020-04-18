<template lang="pug">
  input(type="number" @input="$emit('input', $event.target.value)")
</template>

<script>
export default {
  name: 'user-input',
};
</script>
