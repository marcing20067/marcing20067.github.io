# mg-scroll-animation | Marcin Grądzik Scroll Animation
ENG
--

## Table of contents

- [About project](#o-projekcie)
- [The advantages of this library](#the-advantages-of-this-library)
- [Dokumentacja](#dokumentacja)

## About project

Welcome! Scroll-animation is a mini library consisting of JS(mainly [Intersectionobserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)) and CSS that adds animations when the target is visible.

**Attention: I am sorry, I use an interpreter for the English version of the text, so don't be afraid if you don't understand something** 

## The advantages of this library 

1. Ability to modify properties using CSS 
2. No need to use JavaScript 
3. Easy to use

## Documentation

**NOTE: Remember that the target is invisible before the animation, which is, opacity: 0.**

### Launch

Add a class to the target **scroll-animation**

### Set the direction of the animation

**The default direction** is the left animation, or **left**. If you want to leave the default value, you do not need to add anything more.

If you want to change the default direction, you must add the **top** or top animation, **right** or bottom animation** to the bottom of the animation.

### Changing class properties
1. Open the scroll.css file. 
2. Depending on the direction of the animation, the class you will change is:
**Top | top-scroll-class** <br> 
**Right | right-scroll-class** <br> 
**Bottom | bottom-scroll-class** <br> 
**Left | left-scroll-class** <br> 

3. Find the appropriate class in css file
4. Edit and enjoy the properties!

### What if my browser does not support the features contained in this repository?
Simply, the function will not be performed. No classes with properties will add, so the included styles in CSS classes (I am talking about top-scroll-class, etc., not all classes in general) don't style the target.

PL
--
### Spis treści

- [Dokumentacja](#o-projekcie)
- [Plusy tej biblioteki](#plusy-tej-biblioteki)
- [Dokumentacja](#dokumentacja)

## O projekcie
Witaj! Scroll-animation to mini biblioteka składająca się z JS(głównie z [Intersectionobserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)) i CSS polegająca na dodawaniu animacji gdy cel jest widoczny. 

## Plusy tej biblioteki

1. Możliwość modyfikowania właściwości za pomocą CSS
2. Brak potrzeby używania JavaScript
3. Prosta w obsłudze

## Dokumentacja

**UWAGA: Pamiętaj, że przed animacją cel jest niewidoczny, czyli ma ustawione opacity: 0;**

### Uruchomienie

Do animowanego elementu dodaj klasę **scroll-animation**

### Ustawienie kierunku animacji

**Domyślnym kierunkiem** jest animacja z lewej lewo czyli **left**.
Jeżeli chcesz zostawić domyślną wartość to nie musisz nic więcej dodawać.

Jeśli chcesz zmienić domyślny kierunek musisz dodać klasę **top** czyli animacja z góry, **right** czyli animacja z prawej lub **bottom** czyli animacja z dołu w zależnosci jaki efekt chcesz osiągnąć.

### Zmiana właściwości klasy

1. Otwórz plik scroll.css. 
2. W zależności od kierunku animacji klasa na której będziesz zmieniał właściwości to kolejno: 

**Z góry | top-scroll-class** <br>
**Z prawej | right-scroll-class** <br>
**Z dołu | bottom-scroll-class** <br>
**Z lewej | left-scroll-class** <br>

3. Znajdź w pliku.css odpowiednią klasę. 
4. Edytuj i baw się właściwościami!

### Co jeżeli przeglądarka nie obsługuje funkcji zawartych w tym repozytorium?

Po prostu funkcja się nie wykona. Żadne klasy z właściwościami się nie dodadzą, dlatego też zawarte style w klasach CSS(chodzi mi o te top-scroll-class itp. a nie ogólnie wszystkie klasy) nie stylują celu
