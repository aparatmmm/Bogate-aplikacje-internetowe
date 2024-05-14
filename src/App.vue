<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <div class="nav-buttons">
            <button class="nav-button"><router-link to="/">Home</router-link></button>
            <button class="nav-button"><router-link to="/About_us">About us</router-link></button>

          </div>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

