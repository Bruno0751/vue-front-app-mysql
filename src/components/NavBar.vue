<template>
  <div>
    <nav>
      <ButtonX valor="link" />
    </nav>
  </div>
</template>

<script>
import ButtonX from './ButtonX.vue'

export default {
  name: 'NavBar',
  components: {
    ButtonX
  },
  data () {
    return {}
  },
  created () { }
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
