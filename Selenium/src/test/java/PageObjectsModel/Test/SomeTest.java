package PageObjectsModel.Test;

import PageObjectsModel.Main.PageObject;
import org.junit.jupiter.api.Test;

public class SomeTest extends BaseTest {

    @Test
    void someTest() {
        PageObject site = new PageObject(driver);

        site.baseTestMethod(); //najpierw wykonujemy metody z BasePage
        site.pageObjectMethod().someInt(); //potem z danych pageObjectów.

        site.header.headerMethod(); // w ten sposob odwołujemy sie np. do headerPage
    }
}
