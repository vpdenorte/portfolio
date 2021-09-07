<template>
  <div id="projects">
    <h2>Projects</h2>
    <div class="grid">
      <Card v-for="(item, index) in items" :key="index" :item="item" />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Projects',
  components: {
    Card,
  },
  data() {
    return {
      items: [
        {
          title: 'E-Commerce Website',
          text: 'Subscription-based shopping hub for contractors and suppliers \
                with search and filter, product management, and supplier profile page features',
          tags: ['Vue.js', 'Django'],
          image: 'ecommerce.png',
          action: {
            type: 'gallery',
            link: 'https://imgur.com/a/PbbcH4t',
          },
        },
        {
          title: 'Smart Classroom',
          text: 'All-in-one centralized system for classrooms with features such as \
                RFID-based door access and power control, schedule information display, and database management',
          tags: ['NodeMCU', 'C++'],
          image: 'smartclassroom.png',
          action: {
            type: 'paper',
            link: './file/Development_of_RFID_System_for_Smart_Classroom.pdf',
          },
        },
        {
          title: 'AI Copra Classifier',
          text: 'Copra (coconut kernel) grade identification based on an image using ConvNet and image processing',
          tags: ['MATLAB'],
          image: 'copra.png',
          action: {
            type: 'paper',
            link: './file/Quality_Classification_of_Copra_Using_CNN.pdf',
          },
        },
      ],
    }
  },
}
</script>

<style scoped>
#projects {
  min-height: 90vh;
  padding: 48px 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: column;
  gap: 28px;
  padding-top: 20px;
}

@media screen and (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1500px) and (min-height: 900px) {
  #projects {
    min-height: 0;
    padding: 96px 0;
  }
}
</style>
