package Lokalizacja;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Metody {

    WebDriver driver;
    WebElement webElement = driver.findElement(By.cssSelector("xd"));

    @Test
    void metody() {
        //klikniecie lewym przyciskiem myszki
        //jeśli element jest nieklikalny to rzuci wyjatkiem
        webElement.click();

        //zatwierdzenie formularza enterem
        //mozna w ten sposob zatwierdzic każy element który jest pod <form> xx </form> lub samego forma
        webElement.submit();

        //wyczyszczenie wpisanych znaków
        webElement.clear();

        //wpisanie ciaągu znaków
        webElement.sendKeys("xyz");

        //wysłanie pliku na strone
        //można wysłać do elementu o type="file" !! Nie zawsze button który by kliknał uzutkownik odpowiada elementowi ktory trzeba znalezc zeby wyslac plik
        webElement.sendKeys("C:\\Users\\48513\\Downloads\\obraz.jpg"); // z komputera
        webElement.sendKeys("src/main/resources/obraz.jpg"); // z zasobów z projektu

        //wciśnięcie danego przycisku
        webElement.sendKeys(Keys.ARROW_UP);
        //jednoczesne wciśnięcie danych przycisków. "a" znaczy. ze wcisnie A
        webElement.sendKeys(Keys.chord(Keys.CONTROL, "a"));

        //pobranie tekstu z elementu (czyli TEXT)
        //<div class="a">TEXT</div>
        webElement.getText();
    }

}
