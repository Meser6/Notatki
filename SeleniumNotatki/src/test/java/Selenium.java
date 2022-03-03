import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.net.MalformedURLException;
import java.net.URL;

public class Selenium {

    @Test
    void przygtowanieDrivera() throws MalformedURLException {
        //Podanie ścieżki do ChromeDriver
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");

        //Inicjalizacja drivera
        WebDriver driver = new ChromeDriver();

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
}
