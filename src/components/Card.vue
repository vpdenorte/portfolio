<template>
  <div class="card">
    <div class="card-img-container">
      <img
        class="card-img"
        :src="require('@/assets/images/' + item.image)"
        :alt="item.image"
      />
    </div>
    <div class="card-title">{{ item.title }}</div>
    <div class="card-subtitle">{{ item.text }}</div>
    <div class="card-tag-container">
      <div v-for="tag in item.tags" :key="tag" class="card-tag">{{ tag }}</div>
    </div>
    <div class="card-actions">
      <CardButton :action="item.action" />
    </div>
  </div>
</template>

<script>
import CardButton from '@/components/CardButton.vue'

export default {
  name: 'Card',
  props: {
    item: Object,
  },
  components: {
    CardButton,
  },
}
</script>

<style scoped>
.card {
  position: relative;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.2s, transform 0.2s;
  background-color: white;
}

.card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  transform: scale(1.015);
}

.card-title {
  font-size: 1.5rem;
  font-weight: 500;
  padding-top: 16px;
}

.card-subtitle {
  font-size: 1.1rem;
  padding: 12px 0;
}

.card-tag-container {
  padding-bottom: 52px;
}

.card-tag {
  display: inline-block;
  padding: 6px 8px;
  margin-right: 8px;
  color: rgba(0, 0, 0, 0.6);
  background-color: rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  font-size: 0.8rem;
}

.card-img-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
}

.card-img {
  position: absolute;
  top: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

.card-actions {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 32px;
  right: 32px;
}
</style>
