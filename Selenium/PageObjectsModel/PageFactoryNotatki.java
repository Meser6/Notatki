package PageObjectsModel;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.*;

import java.util.List;

public class PageFactoryNotatki {

    //PageFactory służy jako alternatywa do znajdowania elementów strony
    //Szuka WebElementy po zadanych parametrach
    //Elementy wyszukiwane są na bierżaco, tzn nie w linijcie gdzie są wpisane (@FindBy) tylko w miejscu ich rzeczywistego uzycia
    //Elemrnty wyszukują się za każdym razem gdy sa inicajalizowane tzn jak beda dwie akcje na tym samym to dwa razy go wyszuka (chyba ze to zabezpieczymy)


    WebDriver driver;

    //Inicjalizacja elementów. Robi się to w konstruktorze BasePage
    void constructor() {
        PageFactory.initElements(driver, this);
    }

    //Wyszukaj WebElement po danym parametrze (jak .findElement(locator)
    @FindBy(css = "css")
    WebElement element1;

    //Wyszukaj WebElementy po danym parametrze (jak .findElements(locator)
    @FindBy(css = "css")
    List<WebElement> elementsList2;

    //Wyszukaj WebElement po danych parametrach. Działa jak łańcuch tzn najpierw wyszuka wszystkie z css1 a potem wśród nich bedzie szukal takich z css2
    @FindBys({
            @FindBy(css = "css1"),
            @FindBy(css = "css2")
    })
    WebElement element2;

    //Wyszukaj WebElement który będzie miał którykolwiek z danych parametrów
    @FindAll({
            @FindBy(css = "css1"),
            @FindBy(css = "css2")
    })
    WebElement element3;

    //Zabpisuje dany element w pamieci podrecznej zeby nie był wyszukany za kazdym razem
    @CacheLookup
    WebElement element4;

    @FindBy(css = "css")
    @CacheLookup
    WebElement element5; // przykład użycia

}
