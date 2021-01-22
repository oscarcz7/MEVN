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
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="about" class="navbar-item">About</router-link>
          <router-link to="Contracts" class="navbar-item">Apply for</router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Contracts </a>

            <div class="navbar-dropdown">
              <router-link to="ContractsAcquire" class="navbar-item">Contracts Resume</router-link>
              <router-link to="Reports" class="navbar-item">Reports</router-link>
              
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              
              <router-link to="Login" class="button is-primary"> <strong>Log in</strong></router-link>
              <a class="button is-light">
                <strong>Log Out</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view class="content"/>
  </div>
</template>

<style>


.content{
  text-align: center;
}

</style>
