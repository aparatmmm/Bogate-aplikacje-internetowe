<template>
  <main class="app">
    <h1>The Quiz</h1>

    <section class="quiz" v-if="!quizCompleted && getCurrentQuestion">
      <div class="quiz-info">
        <span class="question">{{ getCurrentQuestion.question }}</span>
        <span class="score">Score: {{ score }} / {{ questions.length }}</span>
        <div class="time-left">Time left: {{ timeLeft }}s</div> <!-- Dodany wskaźnik czasu -->
      </div>

      <div class="options">
        <label 
          v-for="(option, index) in getCurrentQuestion.options" 
          :key="index"
          :class="`option ${
            getCurrentQuestion.selected == option 
              ? option == getCurrentQuestion.answer ? 'correct' : 'wrong'
              : ''
          } ${
            getCurrentQuestion.selected != null &&
            option != getCurrentQuestion.selected
              ? 'disabled'
              : ''
          }`"
        >
          <input 
            type="radio" 
            :name="getCurrentQuestion.index"
            :value="option"
            v-model="getCurrentQuestion.selected"
            :disabled="getCurrentQuestion.selected !== null"
            @change="SetAnswer"
          >
          <span>{{ option }}</span>
        </label>
      </div>

      <button
        @click="NextQuestion"
        :disabled="!getCurrentQuestion.selected"
      >
        {{ getCurrentQuestion.index === questions.length - 1
          ? 'Finish'
          : getCurrentQuestion.selected == null
            ? 'Select an option'
            : 'Next Question'
        }}
      </button>
    </section>

    <section v-else class="centered-section">
      <h2>You have finished the quiz!</h2>
      <p>Your score is {{ score }} / {{ questions.length }}</p>

      <!-- Display all questions and answers -->
      <div v-if="questions.length > 0" class="summary-container">
        <h3>Summary of Answers</h3>
        <ul class="summary-list">
          <li v-for="(question, index) in questions" :key="index" class="summary-item">
            <strong>Question {{ index + 1 }}:</strong> {{ question.question }}
            <br>
            <span class="answer">
              Your Answer: 
                <span v-if="question.selected !== null"
                      :class="{'correct-answer': question.selected === question.answer, 'incorrect-answer': question.selected !== question.answer}">
                    {{ question.selected }}
                    <span v-if="question.selected === question.answer">(Correct)</span>
                    <span v-else class="incorrect-answer">(Incorrect, Correct Answer: {{ question.answer }})</span>
                </span>
              <span v-else>No answer selected</span>
            </span>
          </li>
        </ul>
      </div>

      <div class="button-container">
        <button class="button-form" @click="restartQuiz">Play Again</button>
        <button @click="returnToHomeWithPreviousSettings">Try New Settings</button>
      </div>
    </section>
  </main>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()

const questions = ref([])
const quizCompleted = ref(false)
const currentQuestion = ref(0)
const timeLeft = ref(10) // Domyślnie 10 sekund na pytanie
let timer

const score = computed(() => {
  let value = 0
  questions.value.forEach(q => {
    if (q.selected === q.answer) {
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

const stopTimer = () => {
  clearInterval(timer)
}

const SetAnswer = evt => {
  questions.value[currentQuestion.value].selected = evt.target.value
  evt.target.value = null
}

const NextQuestion = () => {
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++
    timeLeft.value = 10 // Resetujemy czas na kolejne pytanie
    clearInterval(timer)
    startTimer() // Rozpoczynamy licznik czasu dla kolejnego pytania
  } else {
    quizCompleted.value = true
    stopTimer() // Zatrzymujemy licznik czasu po zakończeniu quizu
  }
}

const returnToHomeWithPreviousSettings = () => {
  const previousSettings = {
    difficulty: router.currentRoute.value.query.difficulty || 'medium',
    numberOfQuestions: router.currentRoute.value.query.numberOfQuestions || '1',
    category: router.currentRoute.value.query.category || '1',
    type: router.currentRoute.value.query.type || '1'
  };

  router.push({ path: '/', query: previousSettings })
}

const restartQuiz = async () => {
  currentQuestion.value = 0
  quizCompleted.value = false
  questions.value.forEach(question => {
    question.selected = null
  })
  await fetchNewQuestions()
  timeLeft.value = 10 // Resetujemy czas na kolejne pytanie
  startTimer()
}

const fetchNewQuestions = async () => {
  const difficulty = router.currentRoute.value.query.difficulty || 'medium'
  const numberOfQuestions = router.currentRoute.value.query.numberOfQuestions || '1'
  const category = router.currentRoute.value.query.category || '1'
  const type = router.currentRoute.value.query.type || '1'
  questions.value = await fetchQuestions(difficulty, numberOfQuestions, category, type)
}

const fetchQuestions = async (difficulty, numberOfQuestions, category, type) => {
  try {
    const response = await fetch(`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=${type}`)
    const { results } = await response.json()
    const quizQuestions = results.map(result => {
      const question = decodeHTML(result.question)
      const correctAnswer = decodeHTML(result.correct_answer)
      const incorrectAnswers = result.incorrect_answers.map(answer => decodeHTML(answer))
      const options = [...incorrectAnswers, correctAnswer]
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

const decodeHTML = (html) => {
  const txt = document.createElement('textarea')
  txt.innerHTML = html
  return txt.value
}

onMounted(async () => {
  await fetchNewQuestions()
  startTimer()
})
</script>
