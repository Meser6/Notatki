package PageObjectsModel.Main;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public abstract class BasePage {

    //BasePage służy do wykonywania operacji które bedą niezależne od strony na jakiej zaczynamy (np. zamkniecie cookies)
    //Mniej wiecej bedzie to odpowiadało temu co byśmy robili w @BeforeEach a co nie byloby zwiazane z ustawianiem drivera
    //Po tej klasie bedzie dziedziczył każdy nasz PageObject
    //Dobrze jest dać tą klase jako abstrakcyjną zeby nie dalo się jej inicjalizować w tastach

    WebDriver driver;
    public HeaderPage header;

    protected BasePage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this); // tu mozemy inicjalizowac PageFactory
        header = new HeaderPage(); // tu inicjaluzujemy HeaderPage
    }

    public void baseTestMethod() {
    }

}
