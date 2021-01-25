<template>
  <div class="m-4">
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>DESCRIPCION</th>
          <th>MONTO ($)</th>
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

    <h1>Consultas</h1>
    <form @submit.prevent="">
      <div class="columns">
        <div class="column is-half">
          <label class="label" for="inicio">Desde</label>
          <div class="control">
            <input class="input" type="date" name="inicio" id="inicio" />
          </div>
        </div>
        <div class="column is-half">
          <label class="label" for="fin">Hasta</label>
          <div class="control">
            <input class="input" type="date" name="fin" id="fin" />
          </div>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button  is-link" type="submit">Submit</button>
        </div>
      </div>
    </form>

    <table class="table mt-5">
      <thead>
        <tr>
          <th>ID</th>
          <th>DESCRIPCION</th>
          <th>MONTO ($)</th>
          <th>FECHA</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in contracts" :key="index">
          <td>{{ item.userId }}</td>
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
        .get("/services", config)
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