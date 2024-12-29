<template>
    <input :type=tipo>
</template>

<script>
export default {
  name: 'InputX',
  props: {
    tipo: {
      type: String,
      required: true
      //   default: 'text'
    //   validator (value) {
    //     return ['text', 'file', 'email'].includes(value)
    //   }
    }
  },
  created () {
    if (!this.tipo) {
      throw new Error('A prop "tipo" é obrigatória e não foi fornecida.')
    }
  }
}

</script>

<style></style>
