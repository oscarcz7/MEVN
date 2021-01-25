<template>
  <div id="app">
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" v-if="!estaActivo" class="navbar-item">Home</router-link>
          <router-link to="/about"  v-if="!estaActivo" class="navbar-item">About</router-link>
          <router-link to="/new-contract" v-if="estaActivo" class="navbar-item">Apply for</router-link>
          <router-link to="/list-contracts" v-if="estaActivo" class="navbar-item">List Details</router-link>
          <router-link to="/contracts" v-if="estaActivo" class="navbar-item">Contracts All</router-link>
          <router-link to="/reports" v-if="estaActivo" class="navbar-item">Reports</router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              
              <router-link to="/login" v-if="!estaActivo" class="button is-primary"> <strong>Log in</strong></router-link>
              <button v-if="estaActivo" @click="cerrarSesion()" class="button is-primary"><strong>Log Out</strong></button>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view class="content"/>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["cerrarSesion", "leerToken"]),
  },
  computed: {
    ...mapGetters(["estaActivo"]),
  },
  created() {
    this.leerToken();
  },
};  
</script>

<style>


</style>
