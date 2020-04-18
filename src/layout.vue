<template lang="pug">
  #app
    .container
      .header.mt-5.mb-3
        slot(name="header")
      .body
        slot(name="body")
      .footer
        slot(name="footer")
</template>

<script>
export default {
  name: "layout"
};
</script>
