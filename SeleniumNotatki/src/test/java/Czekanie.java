import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

public class Czekanie {

    //Można ustawić czas w jakim bedzie czekać na pojawienie sie strony, elementu

    WebDriver driver;

    @Test
    void czekanieNaElement() {
        // Mozna ustalić, w jakim czasie selenium bedzie czekał na dany element.
        // Tyczyć się to będzie każdego wywołania findElement() i findElements() jaki uzyjemy po ustawieniu nowego czasu
        // Docelowo jest ustawione na 0
        // jak nie znajdzie to w findElement() rzuci wyjattkiem a w findElements() to nie
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
    }

    @Test
    void czekanieNaZaladownieSieStrony() {
        // Mozna ustalić, w jakim czasie selenium bedzie czekał na załadownie się strony
        // Tyczyć się to będzie każdego wywołania findElement() i findElements() jaki uzyjemy po ustawieniu nowego czasu
        // Docelowo jest ustawione na 300
        // jak nie znajdzie to rzuci wyjątkiem
        driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(10));
    }
}
