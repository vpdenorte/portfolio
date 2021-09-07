<template>
  <div id="contact">
    <h2>Contact</h2>
    <a href="mailto:vpdenorte@gmail.com" target="_blank">
      <span>vpdenorte@gmail.com</span>
      <div class="icon-container">
        <font-awesome-icon :icon="['fas', 'envelope']" />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/vpdenorte" target="_blank">
      <span>LinkedIn</span>
      <div class="icon-container">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </div>
    </a>
    <a href="https://github.com/vpdenorte" target="_blank">
      <span>GitHub</span>
      <div class="icon-container">
        <font-awesome-icon :icon="['fab', 'github']" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style scoped>
#contact {
  position: absolute;
  left: 0;
  right: 0;
  background-color: var(--accent-color);
  color: white;
  text-align: right;
  padding: 64px 6vw;
}

h2 {
  text-align: inherit;
  margin-top: 0;
}

a {
  display: block;
  padding: 8px 0;
  font-size: 20px;
}

a:hover {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.icon-container {
  display: inline-block;
  width: 24px;
  height: 24px;
  padding-left: 8px;
  text-align: center;
}
</style>
