<template>
  <div>
    <a :href="action.link" target="_blank" v-if="action.type == 'gallery'">
      <font-awesome-icon class="icon" :icon="['fas', 'images']" />
      View gallery
    </a>
    <a :href="action.link" target="_blank" v-if="action.type == 'paper'">
      <font-awesome-icon class="icon" :icon="['fas', 'file-alt']" />
      View paper
    </a>
  </div>
</template>

<script>
export default {
  name: 'CardButton',
  props: {
    action: Object,
  },
}
</script>

<style scoped>
a {
  display: inline-block;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.2s, border 0.2s;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 8px 12px;
}

a:hover {
  border-color: var(--accent-color);
}

.icon {
  padding-right: 2px;
}
</style>
