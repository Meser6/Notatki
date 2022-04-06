import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;

import java.util.Set;

public class KartyPrzegladarki {

    WebDriver driver;

    @Test
    void karty() {

        //Pobranie adresu (unikatowego kodu) aktualnej karty.
        //Nie musi to być karta która jest aktualnie widoczna w chrome. Jest to karta na której driver jest zaczepiony
        String aktualnaKarta = driver.getWindowHandle();

        //Pobranie adresów wszstkich kart
        //Inne okno też jest traktowane jako karta
        Set<String> wszystkieKarty = driver.getWindowHandles();

        //Przełączenie na dana karte
        driver.switchTo().window("ID karty");

        //Zamkniecie aktualnej karty
        driver.close();

        //przyklad uzycia w zad 17

    }
}
