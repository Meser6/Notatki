package Lokalizacja.Czekanie;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

public class Czekanie {

    // NIE STOSOWAC IMPLICIT I EXPLICIT JEDNOCZESNIE W JEDNYM TESCIE

    WebDriver driver;

    @Test
    void implicitWait() {
        //czeka zadany czas na pojawienie sie danego elementu/załadowanie strony
        //działa tylko z metodami findElement()i findElements
        //działą globalnie, dla wszystkich wyszukań
        // jak sie nie doczeka to rzuci wyjątkiem NoSuchElementException

        // Mozna ustalić, w jakim czasie selenium bedzie czekał na dany element.
        // Docelowo jest ustawione na 0
        // w findElements() to nie rzuci wyjątku
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));

    }

    @Test
    void explicitWait() {
        //czeka na mozliwość wykonania konkretnie wybranej akcji (np. klikalnosc danego elementu)
        //implementujemy go w dowolnym miejscu a nie globalnie
        //można ustawiac rozne timeouty dla roznych, konkretnych akcji
        // jak sie nie doczeka to rzuci wyjątkiem TimeoutException
        // Działa w połączeniu z ExpectedConditions

        WebDriverWait wait = new WebDriverWait(driver, 10); // bedzie czekal 10 sekund
        WebDriverWait wait2 = new WebDriverWait(driver, Duration.ofSeconds(10));

        WebDriverWait wait3 = new WebDriverWait(driver, 10, 500); // bedzie czekał 10 sekund i sprawdzał co 500 milisekund
        WebDriverWait wait4 = new WebDriverWait(driver, Duration.ofSeconds(10), Duration.ofMillis(500)); // bedzie czekał 10 sekund i sprawdzał co 500 milisekund

        //implmentacja
        wait2.until(ExpectedConditions.alertIsPresent());
    }

    @Test
    void pageLoadTimeout() {
        // Mozna ustalić, w jakim czasie selenium bedzie czekał na załadownie się strony
        // Docelowo jest ustawione na 300
        // jak sie nie doczeka to rzuci wyjątkiem NoSuchElementException
        driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(10));
    }
}
