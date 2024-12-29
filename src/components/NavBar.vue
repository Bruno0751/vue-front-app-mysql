<template>
    <nav>
        <ul>
            <li><a :href=router class="a-menu">Cadastro</a></li>
            <li><a class="a-menu">Buscar</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      url: null,
      href: null,
      local: 'http://localhost',
      router: ''
    }
  },
  created () {
    const vm = this
    vm.url = new URL(window.location)
    vm.href = vm.url.href
    if (vm.href.includes(vm.local)) {
      vm.router = vm.href + '/cadastro'
      console.log(vm.router)
    }
  }
}

</script>

<style>
ul {
    list-style-type: none;
    text-align: center;
}

li {
    display: inline;
}

a {
    text-decoration: none;
}

.a-menu:hover {
    color: red;
}

.a-menu {
    font-size: 6.1vh;
    font-style: italic;
    margin: 0 13.5px;
}

.a-menu:visited {
    color: rgb(0, 143, 0);
}
</style>
