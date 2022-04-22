package PageObjectsModel.Main;

import PageObjectsModel.PageFactoryNotatki;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class PageObject extends BasePage {

    //jeden page Object odpowiada jednemu typowi strony
    //tzn strona produktu i strona koszyka beda mialy inne pageObjecty, ale za to dwa rozne prodykty juz nie (bo sa podobne strony)
    //tworzy sie tu metody które będą wykonywane na danej stronie
    //aby fajnie chainowac metody powinny one zwracac objekt strony do ktorej finalnie prowadza


    public PageObject(WebDriver driver) { //nadpisanie konstruktora z klasy BasePage
        super(driver);
    }

    @FindBy(css = "css")
    @CacheLookup
    private WebElement element;

    public PageObject pageObjectMethod() { // przykładowa metoda jesli chcemy dalej robic cos na tej stronie
        element.click();
        return new PageObject(driver);
    }

    public PageFactoryNotatki innaStrona() { // przykładowa metoda jesli kolejne akcje maja byc na innej stronie
        element.click();
        return new PageFactoryNotatki();
    }

    public String someInt() { // przykładowa metoda która ma zwrócić jakas wartośc i skonczyc blok chainów
        privateMethod();
        return element.getText();
    }

    private void privateMethod() {
    }

    ; // metody pomocnicze ktorych nie bedziemy wykorzystywac w testach ustalamy na private
}
