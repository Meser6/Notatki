import org.junit.jupiter.api.Test;
import org.openqa.selenium.*;

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
    }

    @Test
    void pobieranieWartosci() {
        //pobranie tekstu z elementu (TEXT)
        //<div class="a">TEXT</div>
        String text = webElement.getText();

        //pobranie danego atrybutu  (xd). Jeśli nie znajdzie takiego atrybutu w danym elemencie to zwroci null
        //div role="xd">text</div>
        String attribute = webElement.getAttribute("role");

        //pobranie wartości CSSa. Kolor pobiera w formacie rgba (np. 255,255,255,1) a w konsolce jest w hexcodzie (#fffff).
        String cssValue = webElement.getCssValue("color");

        //pobranie wartości taga (div)
        //<div class="a">TEXT</div>
        String tag = webElement.getTagName();

        //Pobranie lokalizacji elementu - lewy górny róg!
        Point localization = webElement.getLocation();
        int a = localization.x;
        int b = localization.y;

        //Pobranie rozmiaru elementu (ucina to co po przecinku)
        Dimension size = webElement.getSize();
        int c = size.height;
        int d = size.width;

        //Pobranie lokalizacji i rozmiaru
        Rectangle rectangle = webElement.getRect();
        int e = rectangle.x;
        int f = rectangle.y;
        int g = rectangle.height;
        int h = rectangle.width;

        //Czy jest widoczny
        boolean displayed = webElement.isDisplayed();

        //Czy jest zaznaczony (np. checkbox)
        boolean selected = webElement.isSelected();

        //Czy jest dostepny (nie zablokowny przez parametr 'disabled'
        boolean enabled = webElement.isEnabled();
    }

}
