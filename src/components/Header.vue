<template>
  <div id="header">
    <div>
      <h1>Hello.<br />I'm <span class="highlight">Von Denorte.</span></h1>
      <p class="subtitle">
        I am a {{ age }}-year old Electronics Engineering graduate and a Vue.js
        developer based in the Philippines 🇵🇭. I like to code 👨🏻‍💻 and play video
        games 🎮. Pleased to meet you! While you're here, check out some of my
        previous works.
      </p>
    </div>
    <div class="img-container">
      <img src="@/assets/images/avatar.jpg" alt="Photo" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    // Returns age in years to the nearest hour
    age() {
      const today = new Date()
      const birthday = new Date(Date.UTC(1998, 9, 8, 16))
      let yearsElapsed = today.getFullYear() - birthday.getFullYear() - 1
      const monthDiff = today.getMonth() - birthday.getMonth()
      const dayDiff = today.getDay() - birthday.getDay()
      const hourDiff = today.getHours() - birthday.getHours()

      if (monthDiff == 0) {
        if (dayDiff == 0) {
          hourDiff >= 0 && yearsElapsed++
        } else if (dayDiff > 0) {
          yearsElapsed++
        }
      } else if (monthDiff > 0) {
        yearsElapsed++
      }

      return yearsElapsed
    },
  },
}
</script>

<style scoped>
#header {
  display: flex;
  justify-content: space-between;
  padding-top: 64px;
  min-height: 80vh;
}

.highlight {
  color: var(--accent-color);
}

.subtitle {
  text-align: left;
  font-size: 1.5rem;
}

.img-container {
  display: flex;
  padding-left: 96px;
  width: 256px;
  height: 256px;
}

img {
  object-fit: cover;
  border-radius: 100%;
}

@media screen and (max-width: 1024px) {
  #header {
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-content: flex-end;
    min-height: 0;
  }
  .img-container {
    padding-left: 0;
  }
}

@media screen and (max-width: 500px) {
  #header {
    padding-top: 13vw;
  }
  .img-container {
    width: 50vw;
    height: 50vw;
  }
}

@media screen and (min-width: 1500px) and (min-height: 900px) {
  #header {
    min-height: 0;
    padding-top: 96px;
  }
}
</style>
