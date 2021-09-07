<template>
  <div class="nav-bar">
    <img class="logo" src="@/assets/images/logo.png" alt="logo" />
    <div class="menu-container">
      <a
        v-for="item in items"
        :key="item"
        :href="item.link"
        class="menu-item"
        >{{ item.title }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      items: [
        {
          title: 'Home',
          link: '#',
        },
        {
          title: 'Projects',
          link: '#projects',
        },
        {
          title: 'Contact',
          link: '#contact',
        },
      ],
    }
  },
}
</script>

<style>
.nav-bar {
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  font-weight: 500;
}

.logo {
  width: 24px;
}

.menu-container {
  display: flex;
  justify-content: flex-end;
}

.menu-item {
  padding-left: 32px;
}
</style>
