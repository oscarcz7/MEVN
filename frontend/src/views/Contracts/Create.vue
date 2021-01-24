<template>
  <div class="columnsm m-4">
    <form action="" class="column is-half">
      <div class="field">
        <label class="label">Descripion</label>
        <div class="control">
          <input class="input" type="text" placeholder="Descripcion Servicio" required/>
        </div>
      </div>

      <div class="field">
        <label class="label">Cantidad ($)</label>
        <div class="control">
          <input class="input" type="number" placeholder="Ej: 3000$" min="0" required/>
        </div>
      </div>
      <div class="field">
        <label class="label">Fecha requerida</label>
        <div class="control">
          <input class="input" type="date" placeholder="Ej: 28/02/1997" required/>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>