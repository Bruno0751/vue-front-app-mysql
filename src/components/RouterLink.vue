<template>
    <div>
      <nav>
        <router-link to="/buscar">Buscar</router-link>
      </nav>
      <router-view /> <!-- Aqui o componente correspondente à rota será renderizado -->
    </div>
  </template>

<script>
export default {
  name: 'RouterLink'
}
</script>
