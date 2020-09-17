# mg-scroll-animation | Marcin Grądzik Scroll Animation
PL
--
Witaj! Scroll-animation to mini biblioteka składająca się z JS(głównie z [Intersectionobserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)) i CSS polegająca na dodawaniu animacji gdy cel jest widoczny. 

## Plusy tej biblioteki

1. Możliwość modyfikowania właściwości za pomocą CSS
2. Brak potrzeby używania JavaScript
3. Prosta w obsłudze

## Dokumentacja

**UWAGA: Pamiętaj, że przed animacją cel jest niewidoczny, czyli ma ustawione display: none;**

### Uruchomienie

Do animowanego elementu dodaj klasę 
**scroll-animation**

### Ustawienie kierunku animacji

**Domyślnym kierunkiem** jest animacja z lewej lewo czyli **left**.
Jeżeli chcesz zostawić domyślną wartość to nie musisz nic więcej dodawać.

Jeśli chcesz zmienić domyślny kierunek musisz dodać klasę **top** czyli animacja z góry, **right** czyli animacja z prawej lub **bottom** czyli animacja z dołu w zależnosci jaki efekt chcesz osiągnąć.

### Zmiana właściwości klasy

Otwórz plik scroll.css. W zależności od kierunku animacji klasa na której będziesz zmieniał właściwości to kolejno: 

**Z góry | top-scroll-class** <br>
**Z prawej | right-scroll-class** <br>
**Z dołu | bottom-scroll-class** <br>
**Z lewej | left-scroll-class** <br>

Znajdź w pliku.css odpowiednią klasę. 
Edytuj i baw się właściwościami!

### Co jeżeli przeglądarka nie obsługuje funkcji zawartych w tym repozytorium?

Po prostu funkcja się nie wykona. Żadne klasy z właściwościami się nie dodadzą, dlatego też zawarte style w klasach CSS(chodzi mi o te top-scroll-class itp. a nie ogólnie wszystkie klasy) nie stylują celu