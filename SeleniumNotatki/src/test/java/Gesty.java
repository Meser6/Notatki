import org.junit.jupiter.api.Test;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;

public class Gesty {

    WebDriver driver;
    Actions actions;
    WebElement webElement;
    WebElement webElement2;

    @Test
    void gesty() {

        //Wszystkie akcje wykonywane za pomoca klasy actions maja jak najbardziej zasymulowac ruchy uzytkownika
        //sprawia to, ze jesli chemy kliknac w jakis przycisk, musimy najpierw sprawic zeby byl widoczny (np. do niego zeskrolowac za pomoca JS)
        //jeżeli klasa ma kliknac na jakis WebElement to zawsze doklanie w jego środek;

        //Dzięki klasie Actions możemy rzeczywscie ruszac myszka, klikac itp a nie tylko symulować
        // aby z niej skorzystac trzeba stworyc obiejkt typu Actions i przekazac mu drivera
        actions = new Actions(driver);
        //nastepnie przekazujemy mu co takiego ma robić

        actions.build(); // czysci wszystkie instrukcje które byly do tej pory (przywraca do stanu pierwotnego)
        actions.perform(); // wykonuje instrukcje

        actions.keyDown(Keys.CONTROL).click().contextClick();
        actions.doubleClick();
        actions.build().perform(); // wykona obie linijki wyzej a nie tylko jedna bo w instrukcje actions nie byly wymazywane

        actions.keyDown(Keys.CONTROL).click().contextClick().build();
        actions.doubleClick();
        actions.build().perform(); // wykona tylko powyzsza linijke bo pierwsza zostala wymagaza z instukcji

        //Mozna zapisac jakis zestaw instrukcji w zmiennej ale typu Action a nie Actions (BEZ S)
        Action someActions = actions.keyDown(Keys.CONTROL).click().contextClick().build();
        someActions.perform();
    }

    @Test
    void klikanieMyszką() {

        //kliknięcie lewym przyciskiem myszy
        actions.click(); // w miejscu gdzie sie akualnie znajduje (nawet jakby to miejsce bylo ramka)
        actions.click(webElement); // na danym elemencie. (jesli jest w ramce to trzeba w nia wejsc)

        //podwojne klikniecie lewym przyciskiem
        actions.doubleClick(); // w miejscu gdzie sie akualnie znajduje (nawet jakby to miejsce bylo ramka)
        actions.doubleClick(webElement); // na danym elemencie. (jesli jest w ramce to trzeba w nia wejsc)

        //klikniecie prawym przyciskiem myszy
        actions.contextClick(); // w miejscu gdzie sie akualnie znajduje (nawet jakby to miejsce bylo ramka)
        actions.contextClick(webElement); // na danym elemencie. (jesli jest w ramce to trzeba w nia wejsc)
    }

    @Test
    void poruszanieSieMysza() {
        //Domyślnie kursor jest w lewym gornym oknie przegladarki (puknt 0,0)
        //fajna nakładka na chrome do wyznaczania rozmoarow i polozenia Page Ruler Redux

        //przesun kursor myszy
        actions.moveByOffset(1, 2);  // przesun o 1 w prawo i 2 w dół
        /**
         * x < 0   <-       y > 0   \/
         * x > 0   ->       y < 0   /\
         */
    }

    @Test
    void akcjeNaKlawiaturze() {
        //wyslanie tekstu - element musi byc aktywny zeby do niego wyslac jakis tekst (np trzeba na niego kliknac)
        actions.sendKeys("text");
        //klikniecie w element i wpisanie tekstu
        actions.sendKeys(webElement, "text"); // działa tak samo jak actions.click(webElement).sendKeys("text");
        actions.sendKeys(webElement, Keys.CONTROL, "text");// mozna łączyć to co wrzucamy w teksie

        //wcisnij przycisk i nie pusc dopoki nie powiem
        actions.keyDown(Keys.CONTROL);

        //pusc przycisk
        actions.keyUp(Keys.CONTROL);
    }

    @Test
    void przenoszenieElementów() {

        //podniesie jeden element, przenies na drugi i upuść (złapie w srodku pierwszego, i upusci na środku drugiego)
        actions.dragAndDrop(webElement, webElement2);

        //podniesie jeden element przesunie o dana wartosc i upisci
        actions.dragAndDropBy(webElement, 1, 2);

        //podniesie i przytrzyma
        actions.clickAndHold(); //tam gdzie jest myszka
        actions.clickAndHold(webElement); //na srodku elementy

        //przeniesie na srodek elementu
        actions.moveToElement(webElement);

        //przeniesie na srodek elementu i przesunie sie o x,y;
        actions.moveToElement(webElement, 1, 2);

        //upusci element
        actions.release(); // tam gdzie jest myszka
        actions.release(webElement); // na srodek elementu


    }

}
