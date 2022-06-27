import org.junit.jupiter.api.Test;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.html5.LocalStorage;
import org.openqa.selenium.html5.SessionStorage;

import java.util.Set;

public class WebStorage {

    //WebStorage sa to ustawienia danych stron które zapisuja sie lokalnie.
    //LocalStorage - zapisuje sie permamentnie, i nie usuwa
    //SessionStorage - zapisuje sie podczas aktualnej sesji i usuwa po jej zakonczeniu (np. podczas zamkniecia okna przegladarki)

    //Cookies zawsze składaja się z pary klucz, wartośc

    //Zabawy z WebStorage mozna wykonywac tylko na ChromeDriver, FirefoxDriver i OperaDriver. Na innych trzeba korzystać z JS.

    //Aby zobaczyc obecne storage Konsola ->Application -> Storage

    ChromeDriver driver; // Ważne, zeby zmienic typ drivera.

    @Test
    void storage() {

        LocalStorage local = driver.getLocalStorage(); //Wnawigowanie sie do Local Storage
        SessionStorage session = driver.getSessionStorage(); //Wnawigowanie sie do Session Storage (w JS byłoby sessionStorage.)

        //Pobranie value danego storage
        String storageValue = local.getItem("key");
        String storageValueJS = (String) ((JavascriptExecutor) driver).executeScript("return localStorage.getItem(arguments[0]);", "key");

        //Pobranie kluczy wszystkich storage
        Set<String> keys = local.keySet();

        //Pobrainie klucza
        String keyJS = (String) ((JavascriptExecutor) driver).executeScript("return localStorage.key(arguments[0]);", 1); //liczy od 0. pobiera klucz X storage

        //Dodanie nowego storage
        local.setItem("key", "value");
        ((JavascriptExecutor) driver).executeScript("return localStorage.setItem(arguments[0], arguments[1]);", "key", "value");

        //Przed usunieciem/jakiegos ciasteczka upewnic sie ze wszystkie zostaly juz pobrane bo moze sie zdazyc tak,
        //ze nie zdazy wsystkich pobrac, usunie a potem dopobiera reszte i uzupelni o ten co bym usuniety.

        //usunięcie danego storage
        String removedStorageValue = local.removeItem("key"); //  zwraca wartosc usuwanego storage
        ((JavascriptExecutor) driver).executeScript("return localStorage.removeItem(arguments[0]);", "key");

        //usunięcie wszystkich storage
        local.clear();
        ((JavascriptExecutor) driver).executeScript("return localStorage.clear");

        //pobranie info o ilosci storage
        int storageAmount = local.size();
        long storageAmountJS = (long) ((JavascriptExecutor) driver).executeScript("return localStorage.length");

    }
}
