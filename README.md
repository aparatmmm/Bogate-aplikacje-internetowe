# Bogate aplikacje internetowe

### Tytuł aplikacji: Quiz App 

Link do projektu interfejsu aplikacji:  
Projekt interfejsu aplikacji jest dostępny pod poniższym linkiem:   
<https://www.figma.com/file/9ZDnUkQ6Z55irzcHzttqMW/Bogate-aplikacje-internetowe?type=whiteboard&t=wrPM7kSvcHPssQVZ-6>

### Opis aplikacji:  
Quiz App to interaktywna aplikacja quiz’owa, która umożliwia użytkownikom sprawdzenie i rozwinięcie swojej wiedzy z dziedziny IT. Aplikacja składa się z trzech ekranów. Ekranu informacyjnego (ABOUT US), ekranu głównego (HOME) oraz ekranu quizu (QUIZ). Quiz app korzysta z zewnętrznego API w celu dostępu do bazy pytań. Aplikacja losuje pytania w zależności od wyboru poziomu trudności, przetwarza odpowiedzi użytkownika w założonych ramach czasowych oraz prezentuje wyniki. 

### Szczegółowy opis techniczny aplikacji (podział na ekrany, funkcjonalności):  

#### Podział na ekrany i funkcjonalności  

##### 1. Ekran główny (HOME)  
Opis: Strona, którą widzimy na obrazku, to interfejs użytkownika aplikacji quizowej. Na środku ekranu znajduje się prosty formularz wyboru parametrów quizu, który jest skontrastowany jasnym tłem, aby przyciągnąć uwagę użytkownika. 
Formularz zawiera:
• Nagłówek: "Welcome to Quiz App!"
• Opcje wyboru:
        ◦ Poziom trudności: rozwijane menu z domyślą opcją „medium”
        ◦ Liczba pytań: rozwijane menu z domyślną opcją "10". 
        ◦ Kategoria: rozwijane menu z domyślną opcją "General Knowledge - I know everything". Wybranie tej opcji, losuje pytania z każdej kategorii. 
W  celu sprawdzenia się w jednej dziedzinie, możemy wybrać tą, która nas interesuje (np. matematyka).
        ◦ Typ pytań: rozwijane menu z domyślną opcją "Multiple Choice". 
    • Przyciski:
        ◦ START: zielony przycisk do rozpoczęcia quizu z wybranymi ustawieniami.
        ◦ QUICK QUIZ: zielony przycisk do szybkiego rozpoczęcia quizu bez dodatkowych ustawień.
    • Nawigacja: na górze ekranu znajdują się linki do stron "HOME" i "ABOUT US".
    
Funkcjonalności:  
- wyświetlenie powitalnego komunikatu: "Welcome to Quiz App"  
-	prezentacja trzech przycisków reprezentujących różne poziomy trudności (easy, medium, hard).  
-	dostęp do górnej zakładki zawierającej "Home", "Quiz", "About Us"

##### 2. Ekran quizu
Opis: Na tym ekranie użytkownik przechodzi przez quiz, odpowiadając na pytania   
i wybierając odpowiedzi. Po zakończeniu quizu użytkownik otrzymuje podsumowanie swoich wyników.  

Funkcjonalności:     
- wyświetlenie pytania i możliwych odpowiedzi  
-	umożliwienie wyboru jednej z odpowiedzi   
-	podświetlenie udzielonej odpowiedzi na czerwono jeśli jest błędna lub zielono jeśli jest poprawna.  
-	zliczanie punktów za poprawne odpowiedzi  
-	pokazanie aktualnego wyniku udzielonych odpowiedzi  
-	odliczanie czasu na odpowiedź (10 sekund na jedno pytanie)  
-	zanim zostanie udzielona odpowiedź widnieje komunikat ‘select an option”  
-	po wyborze jednej z dostępnych odpowiedzi w miejscu ”select an option” pojawia się aktywny przycisk przejścia do kolejnego pytania ”next question”  
-	po upływie wyznaczonego czasu na odpowiedź aplikacja przechodzi do następnego pytania  
-	po udzieleniu odpowiedzi na ostatnie pytanie aktywuje się przycisk „finish”  
-	dostęp do górnej zakładki zawierającej "Home", "Quiz", "About Us"  
-	wyświetlenie komunikatu "You have finished the quiz!" wraz z wynikiem  
-	prezentacja przycisku "Try Again" umożliwiającego ponowne rozpoczęcie quizu na tym samym poziomie trudności  

##### 3. Ekran "O nas"
Opis: Na tym ekranie użytkownik może uzyskać informacje na temat quizu.  

Funkcjonalności:  

- dostęp do górnej zakładki zawierającej "Home", "Quiz", "About Us"  
-	Wyświetlenie informacji o quizie,  
-	Wyświetlenie danych kontaktowych  





# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
