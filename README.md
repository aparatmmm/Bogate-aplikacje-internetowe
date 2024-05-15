# Bogate aplikacje internetowe

### Tytuł aplikacji: Quiz App 

Link do projektu interfejsu aplikacji:  
Projekt interfejsu aplikacji jest dostępny pod poniższym linkiem:   
<https://www.figma.com/file/9ZDnUkQ6Z55irzcHzttqMW/Bogate-aplikacje-internetowe?type=whiteboard&t=wrPM7kSvcHPssQVZ-6>

### Opis aplikacji:  
Quiz App to interaktywna aplikacja zaprojektowana, aby umożliwić użytkownikom tworzenie i rozwiązywanie quizów dostosowanych do ich preferencji. Interfejs użytkownika jest prosty i intuicyjny, co ułatwia nawigację i konfigurację quizów. Aplikacja składa się z trzech ekranów. Ekranu informacyjnego (ABOUT US), ekranu głównego (HOME) oraz ekranu quizu (QUIZ). Quiz app korzysta z zewnętrznego API w celu dostępu do bazy pytań. Aplikacja losuje pytania w zależności od wyboru poziomu trudności, przetwarza odpowiedzi użytkownika w założonych ramach czasowych oraz prezentuje wyniki.

### Szczegółowy opis techniczny aplikacji (podział na ekrany, funkcjonalności):  

#### Podział na ekrany i funkcjonalności  

#### 1. Ekran główny (HOME)  
Opis: Strona, którą widzimy na obrazku, to interfejs użytkownika aplikacji quizowej. Na środku ekranu znajduje się prosty formularz wyboru parametrów quizu, który jest skontrastowany jasnym tłem, aby przyciągnąć uwagę użytkownika. 
##### Formularz zawiera:
- Nagłówek: "Welcome to Quiz App!"
- Opcje wyboru:
  1. Poziom trudności: rozwijane menu z domyślą opcją „medium”
  2. Liczba pytań: rozwijane menu z domyślną opcją "10".
  3. Kategoria: rozwijane menu z domyślną opcją "General Knowledge - I know everything". Wybranie tej opcji, losuje pytania z każdej kategorii. W  celu sprawdzenia się w jednej dziedzinie, możemy wybrać tą, która nas interesuje (np. matematyka).
  4. Typ pytań: rozwijane menu z domyślną opcją "Multiple Choice". 
- Przyciski:
  1. START: zielony przycisk do rozpoczęcia quizu z wybranymi ustawieniami.
  2. QUICK QUIZ: zielony przycisk do szybkiego rozpoczęcia quizu bez dodatkowych ustawień.
- Nawigacja: na górze ekranu znajdują się linki do stron "HOME" i "ABOUT US".
    
    
<br>Funkcjonalności:  
- Wybór poziomu trudności: Użytkownik może wybrać poziom trudności quizu (np. łatwy, średni, trudny) z rozwijanego menu.
- Wybór liczby pytań: Użytkownik może określić, ile pytań chce mieć w quizie (np. 5, 10, 15), korzystając z rozwijanego menu.
- Wybór kategorii: Użytkownik może wybrać kategorię quizu (np. wiedza ogólna, historia, nauka) z rozwijanego menu.
- Wybór typu pytań: Użytkownik może wybrać typ pytań, które preferuje (np. wielokrotnego wyboru, prawda/fałsz), korzystając z rozwijanego menu.
- Rozpoczęcie quizu:
   1. Przyciski START i QUICK QUIZ umożliwiają rozpoczęcie quizu. "START" pozwala na uruchomienie quizu z wybranymi ustawieniami, natomiast "QUICK QUIZ" pozwala na szybkie uruchomienie quizu bez dodatkowych ustawień.
   2. Nawigacja: Linki "HOME" i "ABOUT US" umożliwiają przejście do strony głównej aplikacji oraz strony informacyjnej o aplikacji i jej twórcach.

#### 2. Ekran quizu
Opis: Ekran quizu jest centralnym miejscem interakcji użytkownika z aplikacją quizową. Prezentuje on pytania oraz umożliwia użytkownikowi wybór odpowiedzi. Ekran składa się z sekcji zawierającej pytania oraz opcje odpowiedzi, a także sekcji podsumowującej wyniki quizu po jego zakończeniu.

Funkcjonalność:
- Prezentacja Pytania:
  1. Użytkownik widzi aktualnie wyświetlane pytanie w górnej części ekranu.
  2. Pytanie zawiera treść oraz cztery możliwe odpowiedzi do wyboru.
- Wybór Odpowiedzi:
  1. Użytkownik może wybrać jedną z czterech dostępnych odpowiedzi poprzez kliknięcie na nią.
  2. Wybrana odpowiedź jest zapisywana i użytkownik przechodzi do kolejnego pytania.
- Licznik Czasu:
  1. Po prawej stronie ekranu znajduje się licznik czasu, który pokazuje pozostały czas na odpowiedź na aktualne pytanie.
  2. Gdy czas się skończy, użytkownik automatycznie przechodzi do następnego pytania.
- Podsumowanie Wyników:
  1. Po zakończeniu wszystkich pytań użytkownik zostaje przeniesiony do ekranu podsumowania.
  2. Ekran podsumowania pokazuje wynik użytkownika, tj. ile pytań zostało poprawnie odpowiedzianych.
  3.  Pod każdą odpowiedzią użytkownik widzi swoje wybrane odpowiedzi oraz prawidłowe odpowiedzi.
- Nawigacja:
  1. Na górze ekranu znajdują się przyciski nawigacyjne "HOME" i "ABOUT US", umożliwiające użytkownikowi powrót do strony głównej lub przejście do sekcji informacyjnej o aplikacji.
- Interfejs Użytkownika:
  1. Ekran ma prosty i czytelny design z ciemnym tłem i białymi tekstami, co ułatwia koncentrację na pytaniach.
  2. Opcje odpowiedzi są wyraźnie odseparowane, co ułatwia ich wybór i zapobiega przypadkowym kliknięciom.
- Informacje Zwrotne:
  1. W sekcji podsumowania użytkownik widzi informacje zwrotne na temat każdej odpowiedzi, co umożliwia naukę na błędach i poprawę wiedzy w przyszłości.

#### 3. Ekran "O nas"
Opis: Na tym ekranie użytkownik może uzyskać informacje na temat quizu.  

Funkcjonalności:  

- dostęp do górnej zakładki zawierającej "Home", "Quiz", "About Us"  
-	Wyświetlenie informacji o quizie,  
-	Wyświetlenie danych kontaktowych  





# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
