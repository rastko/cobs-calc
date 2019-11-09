<template>
  <div id="app">
    <div class="container">
      <div class="header" style="margin: 40px 0 20px 0">
        <div class="row">
          <div class="form-group">
            <input type="number" v-model="sum" class="form-control" placeholder="Amount" />
          </div>
        </div>
      </div>

      <div class="row">
        <table class="table table-striped">
          <tr>
            <th>Shares</th>
            <th>Receives</th>
          </tr>
          <tr v-for="index in 9" :key="index">
            <td>{{ index }}</td>
            <td>{{ sum / 10 * index }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data: () => {
    return {
      sum: 0
    };
  }
};
</script>
