<template>
  <div>
    <a :href="action.link" target="_blank" v-if="!action.disabled">
      <font-awesome-icon
        v-if="action.type == 'gallery'"
        class="icon"
        :icon="['fas', 'images']"
      />
      <font-awesome-icon
        v-if="action.type == 'paper'"
        class="icon"
        :icon="['fas', 'file-alt']"
      />
      View {{ action.type }}
    </a>
    <a v-else class="disabled">
      <font-awesome-icon
        v-if="action.type == 'gallery'"
        class="icon"
        :icon="['fas', 'images']"
      />
      <font-awesome-icon
        v-if="action.type == 'paper'"
        class="icon"
        :icon="['fas', 'file-alt']"
      />
      View {{ action.type }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'CardButton',
  props: {
    action: Object,
    disabled: Boolean,
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

.disabled {
  color: rgba(0, 0, 0, 0.25);
  cursor: default;
}

a:hover.disabled {
  border-color: inherit;
}
</style>
