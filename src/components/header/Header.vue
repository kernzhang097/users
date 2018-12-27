<template>
  <header class="bg-light">
    <nav class="navbar navbar-expand-lg navbar-light bg-light container">
      <router-link to="/" class="navbar-brand">用户管理系统</router-link>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">主页</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/add" class="nav-link">添加用户</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'appHeader'
}
</script>

<style lang="">

</style>
