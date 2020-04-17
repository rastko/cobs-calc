<template lang="pug">
  #app
    .container
      .header
        slot(name="header")
      .body
        slot(name="body")
      .footer
        slot(name="footer")
</template>

<script>
export default {
  name: "layout",
};
</script>
