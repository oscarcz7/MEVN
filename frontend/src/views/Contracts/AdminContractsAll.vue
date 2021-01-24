<template>
<div class="container">
  <div id="cards" class="row columns is-multiline">
    <div v-for="(item, index) in contracts" :key="index" class="column is-4">
      <div class="card large">
        <div class="card-image">
          <figure class="image is-16by9">
            <img alt="Vue logo" src="../../assets/logoS.png">
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <p class="title is-4 no-padding">{{ item.contractDescription }}</p>
            <br>
            <p class="subtitle is-6">{{ item.quantity }}</p>
            <p class="subtitle is-6">{{ item.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
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

<style scoped>
.container{
  padding: 10px;
  background: #071e36;
}

input::placeholder {
  color: antiquewhite;
}

.navbar {
  background: #041221;
}

.navbar-item {
  color: ghostwhite;
}

/* Card start*/
.card {
  overflow: hidden;
  background: ghostwhite;
  color: #071e36;
}

.card.large {
  border-radius: 5px;
}

.title.no-padding {
  margin-bottom: 0 !important;
}


.fa {
  color: ghostwhite;
  margin: 10px
}
</style>>
