<template>
    <div>
      <h1>Welcome to Quiz App!</h1>
      <p>Please select difficulty level:</p>
      <button @click="startQuiz('easy')">Easy</button>
      <button @click="startQuiz('medium')">Medium</button>
      <button @click="startQuiz('hard')">Hard</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      startQuiz(difficulty) {
        
        this.$router.push({ path: 'Quiz', query: { difficulty } });
      }
    }
  }
  </script>
  