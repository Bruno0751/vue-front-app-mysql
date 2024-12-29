<template>
  <div id="bodyX">
    <HeaderBar />
    <section>
      <h2></h2>
      <NavBar />
    </section>
    <FooterBar />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import HeaderBar from '../components/HeaderBar.vue'
import FooterBar from '../components/FooterBar.vue'

export default {
  name: 'IndexX',
  components: {
    NavBar,
    HeaderBar,
    FooterBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$preto: #000000;
$zero: 0;

header,
footer {
  padding: 12px;
  position: fixed;
  width: 100%;
}

header {
  top: $zero;
  background-color: rgb(201, 201, 201);
}

section {
  width: 80%;
  border: solid $preto 1px;
  margin: $zero auto;
  padding: 24px 0;
  margin-top: 133px;

  h2 {
    display: none;
  }
}

footer {
  background-color: $preto;
  bottom: $zero;
}

address {
  color: #ffffff;
  text-align: center;
  font-style: italic;
}
</style>
