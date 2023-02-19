import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.opera.OperaDriver;
import org.openqa.selenium.opera.OperaOptions;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;

public class Selenium {

    WebDriver driver;

    @Test
    void przygotowanie() {
        //Chrome
        System.setProperty("webdriver.chrome.driver", "ścieżka_do_pliku_drivera");
        driver = new ChromeDriver();

        //Firefox
        System.setProperty("webdriver.gecko.driver", "ścieżka_do_pliku_drivera");
        driver = new FirefoxDriver();

        //Opera
        System.setProperty("webdriver.opera.driver", "ścieżka_do_pliku_drivera");
        OperaOptions operaOptions = new OperaOptions();
        operaOptions.setBinary("ścieżka_do_pliku_opera.exe");
        driver = new OperaDriver(operaOptions);

        //Internet exploder
        //żeby zadziałało driver.quit() trzeba wejsc w Opcje > Opcje internetowe > Zabezpieczenia > Odklikać Tryb chroniony w każdej z opcji
        System.setProperty("webdriver.ie.driver", "ścieżka_do_pliku_drivera");
        driver = new InternetExplorerDriver();

        //EDGE do v.18
        System.setProperty("webdriver.edge.driver", "ścieżka_do_pliku_drivera");
        driver = new EdgeDriver();

        //EDGE od v.18
        //Wejdz w Ustawienia > Aplikacje > Funkcje opcjonalne > Dodaj funkcje > Sterownik sieci Web firmy Microsoft
        driver = new EdgeDriver();

        //Driver manager - bardzo przydatna funcja. Zczyta jaka sie ma przegladarke i samo sciagnie odpowiedniego drivera - dziala tylko lokalnie
        //https://mvnrepository.com/artifact/io.github.bonigarcia/webdrivermanager
        WebDriverManager.chromedriver().setup();
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
    }

    @Test
    void seleniumGrid() throws MalformedURLException {
        //Selenium grid służy do pusczania testów w trybie rosproszonym

        /*
        Polega to na tym, ze jest postawiony jeden hub który ma pod soba kilka node.
        Kazdy z node ma swoje parametry (przegladarki i ich wersje, wersje systemow itp)
        Za pomocą grida mozna tak skonfigurowac zeby wybrac na maszynie z jakimi parametrami je puscic
         */


        //Wysyłamy testy do Huba a on nam znajdzie node ktory będzie miał zadane parametry.
        //Jeśli nie znajdzie node z takimi parametrami to rzuci wyjatkiem
        //Jeśli nie podamy konkretnych parametrów to znajdzie dowolne

        //Docelowo szuka po 3 parametrach:
        ChromeOptions options = new ChromeOptions(); // nazwa strony. Nie potrzeba podawać bo domysli sie z typu opcji
        options.setCapability(CapabilityType.BROWSER_VERSION, "101"); // wersja przeglądarki
        options.setCapability(CapabilityType.PLATFORM_NAME, "WIN10"); // wersja systemu operacyjnego maszyny

        //Jeżeli skonfigutrowalismy node tak ze ma dodatkowe parametry to tez mozemy z nich skorzystac
        options.setCapability("nazwa_parametru", "wartość_parametru");

        driver = new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), options);
    }

}
