import org.junit.jupiter.api.Test;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.Set;

public class Cookies {

    WebDriver driver;

    //Cookies zawsze składaja się z pary klucz, wartośc

    @Test
    void Ciasteczka() {
        driver = new ChromeDriver();

        //Aby zobaczyc obecne cookies Konsola ->Application -> Storage

        //Tworzenie własnego ciasteczka. Pamiętac o odpowiednim imporcie Cookie;
        Cookie cookie = new Cookie("key", "value");

        //Możemy działać tylko i wyłącznie na ciasteczkach ze strony na której obecnie jesteśmy

        //Pobranie wszystkich ciasteczek
        Set<Cookie> cookies = driver.manage().getCookies();

        //Dodanie ciasteczka
        driver.manage().addCookie(cookie);

        //Przed usunieciem/jakiegos ciasteczka upewnic sie ze wszystkie zostaly juz pobrane bo moze sie zdazyc tak,
        //ze nie zdazy wsystkich pobrac, usunie a potem dopobiera reszte i uzupelni o ten co bym usuniety.

        //Usunięcie ciasteczka
        driver.manage().deleteCookie(cookie);

        //Usuniecie ciasteczka o kluczu XXX
        driver.manage().deleteCookieNamed("XXX");

        //Usunięcie wszystkich ciasteczek
        driver.manage().deleteAllCookies();



    }
}
