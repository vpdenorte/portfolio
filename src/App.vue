<template>
  <div>
    <NavBar />
    <Header />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Header from '@/components/Header.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Header,
    Projects,
    Contact,
  },
}
</script>

<style>
@import './assets/fonts/stylesheet.css';

:root {
  --accent-color: #1976d2;
}

body {
  margin: 0;
}

#app {
  font-family: 'Vela Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #263238;
  max-width: 1440px;
  margin: auto;
  padding: 0 6vw;
  font-feature-settings: 'ss01' 1, 'ss03' 1;
}

h1 {
  font-size: 5rem;
  font-weight: 800;
  text-align: left;
  line-height: 1.2em;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
}

a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s;
}

a:hover {
  color: var(--accent-color);
}

@media screen and (max-width: 400px) {
  html {
    font-size: 4vw;
  }
}
</style>
