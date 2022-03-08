import org.junit.jupiter.api.Test;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.net.MalformedURLException;
import java.net.URL;

public class Selenium {

    WebDriver driver;

    @Test
    void przygotowanie() {
        //Podanie ścieżki do ChromeDriver
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");

        //Inicjalizacja drivera
        driver = new ChromeDriver();
    }

    @Test
    void nawigacjaPoStonie() throws MalformedURLException {

        //Wejście na daną strone
        URL google = new URL("https://google.pl");

        driver.navigate().to("https://google.pl");
        driver.navigate().to(google);
        driver.get("https://google.pl");

        //Cofnięcie się do poprzedniej strony z historii
        driver.navigate().back();

        //Przejście do kolejnej strony z historii
        driver.navigate().forward();

        //Odświeżenie strony
        driver.navigate().refresh();

        //Zamknięcie całego procesu (stosować po zakończonym teście)
        driver.quit();

        //Zamknięcie okna przeglądarki bez zamykania procesu
        driver.close();
    }

    @Test
    void pobranieInfo() {
        //Pobranie aktualnego adresu strony
        driver.getCurrentUrl();

        //Pobranie aktualnego tytułu strony
        driver.getTitle();

        //Pobranie całego "kodu" strony
        driver.getPageSource();
    }

    @Test
    void obsługaOknaPrzeglądarki() {
        //Wyświetlenie okna na pełnym ekranie
        driver.manage().window().fullscreen();

        //Maksymalizacja okna na cały ekran
        driver.manage().window().maximize();

        //Ustawienie pozycji okna (w odniesieniu do lewego górnego rogu ekranu)
        Point point = new Point(10, 12);
        driver.manage().window().setPosition(point);

        //Ustawienie rozmiaru okna
        Dimension dimension = new Dimension(100, 123);
        driver.manage().window().setSize(dimension);

        //Pobranie pozycji okna (w odniesieniu do lewego górnego rogu ekranu)
        driver.manage().window().getPosition();

        //Pobranie rozmiaru okna
        driver.manage().window().getSize();

        //
    }
}
