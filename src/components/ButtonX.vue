<template>
    <button :type=tipo @click="goToAbout">{{ valor }}</button>
</template>

<script>
export default {
  name: 'ButtonX',
  data () {
    return {}
  },
  props: {
    tipo: {
      type: String,
      required: false,
      default: 'button'
    },
    valor: {
      type: String,
      required: false,
      default: 'botao'
    }
  },
  created () {
    if (!this.tipo) {
      throw new Error('A prop "tipo" é obrigatória e não foi fornecida.')
    }
  },
  methods: {
    goToAbout () {
      this.$router.push('/buscar') // Navega para a rota "/about"
    }
  }
}

</script>

<style></style>
