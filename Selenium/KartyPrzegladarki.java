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

        //przyklad uzycia (przełączenie sie do nowo otwartego okna)

        Set<String> cards = driver.getWindowHandles(); //pobiera wszystkie karty
        String actualCard = driver.getWindowHandle(); //pobiera id aktualnej karty
        cards.remove(actualCard); // usuwa aktualna karte wiec zostaje tylko nowa
        String secondCard = cards.iterator().next(); // pobiera id kolejnej (nowej karty)
        driver.switchTo().window(secondCard); // przełącza sie na nowa karte

    }
}
