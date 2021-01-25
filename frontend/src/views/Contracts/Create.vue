<template>
  <div class="columns m-2">
    
    <form @submit.prevent="addContract()" class="column is-half">
      <h1><strong>Solicitar Contrato</strong></h1>
      <div class="field">
        <label class="label">Descripion</label>
        <div class="control">
          <input class="input" type="text" placeholder="Descripcion Servicio" v-model="contract.contractDescription" required/>
        </div>
      </div>

      <div class="field">
        <label class="label">Cantidad ($)</label>
        <div class="control">
          <input class="input" type="number" placeholder="Ej: 3000$" min="0" v-model="contract.quantity" required/>
        </div>
      </div>
      <div class="field">
        <label class="label">Fecha requerida</label>
        <div class="control">
          <input class="input" type="date" placeholder="Ej: 28/02/1997" v-model="contract.date" required/>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" type="submit">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  data() {
    return {
      contracts: [],
      contract: {
        contractDescription: "",
        quantity: 0,
        date: "",
      },

    }
  },
  computed:{
    ...mapState(["token"]),
  },
  methods: {
    addContract(){
      let config = {
        headers: {
          token: this.token,
        }
      };
      this.axios.post("/new-service", this.contract, config).then( res => {
        this.contracts.push(res.data);
        this.contract.contractDescription = "";
        this.contract.quantity=0;
        this.contract.data = "";
      })
      .catch(err => {
        console.log(err.response);
      })
    }
  },
};
</script>

<style>
</style>