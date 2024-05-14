<template>
  <main class="app" >
  <section>

    <div class="form-div">
      <img class="logo-img" src="../../public/images/quiz-logo.png" alt="Logo QuizGame">

      <h2>
        Welcome to Quiz App!
      </h2>
      <p>Select difficulty level:</p>
        <select class="question_num" v-model="selectedDifficultyLevel">
          <option  v-for="option in difficultyLevel" :key="option" :value="option">{{ option }}</option>
        </select>

      <p>Select number of questions:</p>
        <select class="question_num" v-model="selectedNumberOfQuestions">
          <option  v-for="option in numberOfQuestionsOptions" :key="option" :value="option">{{ option }}</option>
        </select>

        <p>Select Category:</p>
        <select class="question_num" v-model="selectedCategory">
          <option v-for="option in category" :key="option.id" :value="option.id">{{ option.name }}</option>
        </select>

        <p>Select Type of questions:</p>
        <select class="question_num" v-model="selectedType">
          <option v-for="option in type" :key="option.id" :value="option.id">{{ option.name }}</option>
        </select>

        <p><button class="button-form" @click="startQuiz()" >Start</button></p>
        <p><button class="button-form" @click="quickQuiz">Quick Quiz</button></p>
        <p v-if="!isQuizReady && isQuizReady !== undefined" style="color: red;">Please select all options to start the quiz <br> Or select Qick Quiz option</p>

    </div>
  </section>
  </main>
  </template>
  
  <script>

  export default {

    data() {
    return {
        // Inicjalizacja danych quizu
        quizData: {
        questions: [],  // Tablica przechowująca pytania, odpowiedzi i poprawne odpowiedzi
        results: {      // Obiekt do przechowywania wyników
        correct: 0,
        incorrect: 0,
        total: 0
      }
    },
      numberOfQuestionsOptions: [5, 10, 15, 20], // Lista dostępnych opcji liczby pytań
      difficultyLevel: ['hard', 'medium', 'easy' ],
      category: [
        { id: 9, name: "General Knowledge - I know everything" },
        { id: 10, name: "Entertainment: Books" },
        { id: 11, name: "Entertainment: Film" },
        { id: 12, name: "Entertainment: Music" },
        { id: 13, name: "Entertainment: Musicals & Theatres" },
        { id: 14, name: "Entertainment: Television" },
        { id: 15, name: "Entertainment: Video Games" },
        { id: 16, name: "Entertainment: Board Games" },
        { id: 17, name: "Science & Nature" },
        { id: 18, name: "Science: Computers" },
        { id: 19, name: "Science: Mathematics" },
        { id: 20, name: "Mythology" },
        { id: 21, name: "Sports" },
        { id: 22, name: "Geography" },
        { id: 23, name: "History" },
        { id: 24, name: "Politics" },
        { id: 25, name: "Art" },
        { id: 26, name: "Celebrities" },
        { id: 27, name: "Animals" },
        { id: 28, name: "Vehicles" },
        { id: 29, name: "Entertainment: Comics" },
        { id: 30, name: "Science: Gadgets" },
        { id: 31, name: "Entertainment: Japanese Anime & Manga" },
        { id: 32, name: "Entertainment: Cartoon & Animations" }
      ],
      type:[
        { id: ' '        ,name: "Any Type" },
        { id: 'multiple', name: "Multiple Choice" },
        { id: 'boolean', name: "True / False" }
        ],

      selectedNumberOfQuestions: null,
      selectedDifficultyLevel: null,
      selectedCategory: null,
      selectedType: null,
          };
  },
  

    methods: {
      startQuiz() {
        this.isQuizStarted = true;
        if (!this.isQuizReady) {
        // Jeśli któreś z pól jest nieustawione, zwróć komunikat o błędzie i nie rozpoczynaj quizu
        alert("Please select all options to start the quiz.");
        return;
        }
            
        // Zapisz wybrane ustawienia w localStorage
        localStorage.setItem('quizSettings', JSON.stringify({
          numberOfQuestions: this.selectedNumberOfQuestions,
          difficulty: this.selectedDifficultyLevel,
          category: this.selectedCategory,
          type: this.selectedType
        }));

        const numberOfQuestions = this.selectedNumberOfQuestions;
        const difficulty = this.selectedDifficultyLevel;
        const category = this.selectedCategory;
        const type = this.selectedType;
        const selectedTimeForQuestion = this.selectedTimeForQuestion;
        
        this.$router.push({ path: 'Quiz', query: { difficulty , numberOfQuestions, category, type}, selectedTimeForQuestion });
        console.log(selectedTimeForQuestion)
             },
        
  quickQuiz() {
        // Zapisz ustawienia szybkiego quizu w localStorage
        localStorage.setItem('quizSettings', JSON.stringify({
      numberOfQuestions: 10,
      difficulty: 'medium',
      category: 9,
      type: 'multiple'
    }));

      // Przykładowe inne parametry dla funkcji startQuiz dla przycisku "Quick Quiz"
      const numberOfQuestions = 10;
      const difficulty = 'medium';
      const category = 9; // Id kategorii "General Knowledge"
      const type = 'multiple'; // Typ pytania - Multiple Choice
      //this.startQuiz(numberOfQuestions, difficulty, category, type);
      this.$router.push({ path: 'Quiz', query: { difficulty , numberOfQuestions, category, type} });
    }
    },



    
    computed: {
    // sprawdza czy wszystkie wymagane pola są ustawione
    isQuizReady() {
      return (this.selectedDifficultyLevel && this.selectedNumberOfQuestions && this.selectedCategory && this.selectedType);
    }
  },
  created() {
    // Sprawdź, czy istnieją zapisane ustawienia w localStorage
    const savedSettings = localStorage.getItem('quizSettings');
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);
      this.selectedNumberOfQuestions = settings.numberOfQuestions;
      this.selectedDifficultyLevel = settings.difficulty;
      this.selectedCategory = settings.category;
      this.selectedType = settings.type;
    }
  },
  }
  </script>
  