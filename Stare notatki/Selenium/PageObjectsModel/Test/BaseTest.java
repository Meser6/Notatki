package PageObjectsModel.Test;

import org.openqa.selenium.WebDriver;

public abstract class BaseTest {

    //BaseTest odpowiada za przygotowanie testów
    //Wrzuca sie tutaj wszystko to co ma si ewykonywać w kazdym tescie np. @BeforeEach i @AfterEach
    //Po BaseTest będzie dziedziczył każdy test
    // W tej klasie inicjalizujemy tez drivera

    WebDriver driver;

    protected void baseTestMethod() {
    }
}
