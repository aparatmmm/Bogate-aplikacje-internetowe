<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/quiz">Quiz</router-link></li>
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

<style>
/* Style dla menu nawigacyjnego lub innych elementów interfejsu użytkownika */
</style>
