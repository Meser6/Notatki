import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class ListyRozwijane {

    //listy rozwijane to takie z tagiem <select> </select>
    //listy rozwijane na których można zaznaczyć kilka opcji maja słówko multiple
    //listy mozna grupować. kilka opcji grupuje sie w jedna kategorie za pomoca <optgroup> </optgroup>
    //rzeczy ktore mozna wybrac sa z tagiem <option>

    WebDriver driver;

    @Test
    void listy() {

        //aby obsłużyć liste najpierw jej WebElement (tagu select) trzeba przekonwertować na obiekt typu Select
        WebElement listaElement = driver.findElement(By.cssSelector("select"));
        Select lista = new Select(listaElement);

        //Zaznaczenie danej opcji. Nie da sie zaznaczyc kategorii
        lista.selectByIndex(0); // liczy po indeksie, od góry. nie liczy kategorii. zaczyna od 0
        lista.selectByValue("opcja1"); // szuka po wartosci atrybutu value
        lista.selectByVisibleText("Elektronika");// szuka po teksie który jest widoczny w opcjach.

        //Odznaczanie opcji. Nie da sie odznaczyc listy NIE multiple
        lista.deselectAll(); // odznacza wszystkie zaznaczone opcje
        lista.deselectByIndex(0); // liczy po indeksie, od góry. nie liczy kategorii. zaczyna od 0
        lista.deselectByValue("opcja1"); // szuka po wartosci atrybutu value
        lista.deselectByVisibleText("Elektronika");// szuka po teksie który jest widoczny w opcjach.

        //Pobranie wszystkich mozliwych opcji (nie pobierze kategorii)
        List<WebElement> list1 = lista.getOptions();

        //Pobranie wszystkich zaznaczonych opcji
        List<WebElement> list2 = lista.getAllSelectedOptions();

        //Pobranie pierwszej zaznaczonej opcji (od góry)
        WebElement element1 = lista.getFirstSelectedOption();

        //Sprawdzenie czy w danej liscie mozna zaznaczyc kilka opci
        boolean boolean1 = lista.isMultiple();
    }
}
