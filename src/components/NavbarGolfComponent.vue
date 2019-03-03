<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">Hauzenberger</b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/golf">Golf courses</b-nav-item>
        <b-nav-item to="/about">Campoamor</b-nav-item>
        <b-nav-item to="/about">La Finca</b-nav-item>
        <b-nav-item to="/about">Las Colinas</b-nav-item>
        <b-nav-item to="/about">Las Ramblas</b-nav-item>
        <b-nav-item to="/about">Marquesa</b-nav-item>
        <b-nav-item to="/about">Roda</b-nav-item>
        <b-nav-item to="/about">Villamartín</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
