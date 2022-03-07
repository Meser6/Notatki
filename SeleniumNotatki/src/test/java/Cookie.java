import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Cookie {
    //TODO rozkminic czemu nie mogę robic własnych ciasteczek

    WebDriver driver;
    @Test
    void Ciasteczka() {
        driver = new ChromeDriver();
        //Cookie cookie = new Cookie("TEST", "test");

        //Możemy działać tylko i wyłącznie na ciasteczkach ze strony na której obecnie jesteśmy

        //Pobranie wszystkich ciasteczek
        //Set<Cookie> cookies = driver.manage().getCookies();

        //Dodanie ciasteczka
        // driver.manage().addCookie(cookie);

        //Usunięcie ciasteczka
        //driver.manage().deleteCookie(cookie);

        //Usuniecie ciasteczka o nazwie XXX
        driver.manage().deleteCookieNamed("XXX");

        //Usunięcie wszystkich ciasteczek
        driver.manage().deleteAllCookies();



    }
}
