<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const questions = ref([])
const quizCompleted = ref(false)
const currentQuestion = ref(0)

const timeLeft = ref(10) // Domyślnie 10 sekund na pytanie
let timer // Zmienna do przechowywania licznika czasu

const score = computed(() => {
  let value = 0
  questions.value.forEach(q => {
    if(q.selected == q.answer){
      value++
    }
  })
  return value
})

const getCurrentQuestion = computed(() => {
  if (questions.value[currentQuestion.value]) {
    let question = questions.value[currentQuestion.value]
    question.index = currentQuestion.value
    return question
  } else {
    return null
  }
})


// Funkcja rozpoczynająca licznik czasu
const startTimer = () => {
  timer = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
    } else {
      clearInterval(timer)
      NextQuestion()
    }
  }, 1000) // Aktualizacja co sekundę
}

// Funkcja zatrzymująca licznik czasu
const stopTimer = () => {
  clearInterval(timer)
}





const SetAnswer = evt => {
  questions.value[currentQuestion.value].selected = evt.target.value
  evt.target.value = null
}

const NextQuestion = () => {
  if (currentQuestion.value < questions.value.length -1) {
    currentQuestion.value++
    timeLeft.value = 10 // Resetujemy czas na kolejne pytanie
    clearInterval(timer)
    startTimer() // Rozpoczynamy licznik czasu dla kolejnego pytania
  } else{
    quizCompleted.value = true
    stopTimer() // Zatrzymujemy licznik czasu po zakończeniu quizu
  }
}

// play again

const restartQuiz = async () => {
  // Resetujemy zmienne stanu
  
  currentQuestion.value = 0
  quizCompleted.value = false
  questions.value.forEach(question => {
    question.selected = null
  })
  // Ponownie pobieramy pytania
  await fetchNewQuestions()
  // Rozpoczynamy quiz od nowa
  clearInterval(timer)
  timeLeft.value = 10 // Resetujemy czas na kolejne pytanie
  startTimer()
}

// Funkcja do pobierania nowego zestawu pytań z API
const fetchNewQuestions = async () => {
  const difficulty = router.currentRoute.value.query.difficulty || 'medium'
  questions.value = await fetchQuestions(difficulty)
}

// Funkcja do pobierania pytań z darmowego API za pomocą fetch()
const fetchQuestions = async (difficulty) => {
  try {
    const response = await fetch(`https://opentdb.com/api.php?amount=5&category=18&difficulty=${difficulty}`)
    const { results } = await response.json()
    console.log('Raw data from API:', results) // Logujemy dane zwrócone przez API

    // Przetwarzanie danych zwróconych przez API
    const quizQuestions = results.map(result => {
      // Dekodowanie encji HTML w pytaniu i odpowiedziach
      const question = decodeHTML(result.question)
      const correctAnswer = decodeHTML(result.correct_answer)
      const incorrectAnswers = result.incorrect_answers.map(answer => decodeHTML(answer))

      // Przekształcanie niepoprawnych odpowiedzi z tablicy stringów na listę stringów
      const options = [...incorrectAnswers, correctAnswer]
      
      // Tasowanie listy opcji, aby kolejność była losowa
      options.sort(() => Math.random() - 0.5)

      return {
        question: question,
        answer: correctAnswer,
        options: options,
        selected: null
      }
    })
    
    return quizQuestions
  } catch (error) {
    console.error('Error fetching questions:', error)
    return []
  }
}

// Funkcja do dekodowania encji HTML
const decodeHTML = (html) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

// Pobieranie pytań z API po załadowaniu komponentu
import { onMounted } from 'vue'

onMounted(async () => {
  const difficulty = router.currentRoute.value.query.difficulty || 'medium'
  questions.value = await fetchQuestions(difficulty)
  clearInterval(timer)
  timeLeft.value = 10 // Resetujemy czas na kolejne pytanie
  startTimer()
})
</script>


<template>
  <main class="app">
    <h1>The Quiz</h1>

    <section class="quiz" v-if="!quizCompleted && getCurrentQuestion">
      <div class="quiz-info">
        <span class="question">{{ getCurrentQuestion.question }}</span>
        <span class="score">Score {{ score }}/{{ questions.length }}</span>
        <div class="time-left">Time left: {{ timeLeft }}s</div> <!-- Dodany wskaźnik czasu -->
      </div>

      <div class="options">
        <label 
        v-for="(option, index) in getCurrentQuestion.options" 
        :key="index"
        :class="`option ${
          getCurrentQuestion.selected == option 
          ? option == getCurrentQuestion.answer
          ? 'correct'
          : 'wrong'
          : ''
        } ${
          getCurrentQuestion.selected != null &&
          option != getCurrentQuestion.selected
          ? 'disabled'
          : ''
        }`">
        <input 
  type="radio" 
  :name="getCurrentQuestion.index"
  :value="option"
  v-model="getCurrentQuestion.selected"
  :disabled="getCurrentQuestion.selected !== null"
  @change="SetAnswer">

          <span>{{ option }}</span>
        </label>
      </div>

      <button
      @click="NextQuestion"
      :disabled="!getCurrentQuestion.selected">
      {{ getCurrentQuestion.index == questions.length - 1
        ? 'Finish'
        : getCurrentQuestion.selected == null
          ? ' Select an option'
          : 'Next Question'
      }}
      </button>
    </section>

    <section v-else>
      <h2>You have finish the quiz!</h2>
      <p>Your score is {{ score }} / {{ questions.length }}</p>
      <button v-if="quizCompleted" @click="restartQuiz">Play Again</button>
    </section>
  </main>
</template>
