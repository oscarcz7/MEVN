<template>
  <div class="columns m-4">
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>DESCRIPCION</th>
          <th>COSTO ($)</th>
          <th>FECHA</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in contracts" :key="index">
          <td>{{ item._id }}</td>
          <td>{{ item.contractDescription }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      contracts: [],
      contract: {
        contractDescription: "",
        quantity: 0,
        date: "",
      },
    };
  },
  mounted: function () {},
  created() {
    this.listServices();
  },
  computed: {
    ...mapState(["token"]),
  },
  methods: {
    listServices() {
      let config = {
        headers: {
          token: this.token,
        },
      };
      this.axios
        .get("/service", config)
        .then((res) => {
          console.log(res.data);
          this.contracts = res.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  },
};
</script>

<style>
</style>