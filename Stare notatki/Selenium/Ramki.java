import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Ramki {

    //Ramki to tak jakby strona w stronie (np twitty na stronie głównej onetu)
    //Jeśli jestesmy juz w ramce to mozemy wyjonywac czynnosci tylko w niej. chyba ze z niej wyjdziemy
    //Żeby wykonac jakies akcje w ramcje trzeba najpierw w nia wejsc
    //Jeśli po wykonaniu tam jakis czynnosci chcemy zrobic cos poza nia to musimy z niej wyjsc.
    // <iframe> xxx </iframe> - oznaczenie ramki

    WebDriver driver;

    @Test
    void ramki(){

        //Wejdz do ramki po indexie (licza sie ramki od góry, od 0)
        // liczymy oddzielnie dla kazdej strony. czyli jesli wejdziemy w ramke 3 na glownej strone i chemy wejsc w ramke ktora bezie w niej to bedzie ona miala indeks 0
        driver.switchTo().frame(0);

        //Wejdz do ramki po nazwie
        //<iframe name="xd"> xxx </iframe>
        driver.switchTo().frame("xd");

        //Wejdz do ramki po WebElemencie
        WebElement webElement = driver.findElement(By.cssSelector("xd"));
        driver.switchTo().frame(webElement);

        //Powrót do strony głónej (niezaleznie od tego jak głęboko w ramkowym uniwersum jestes)
        driver.switchTo().defaultContent();

        //Powrót do ramki rodzica
        driver.switchTo().parentFrame();


    }
}
