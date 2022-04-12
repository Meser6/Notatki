package Selenium.Zadania.Zad17;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.Set;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class Zad17 {

    WebDriver driver;
    WebDriverWait wait;


    @BeforeEach
    void prepare() {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();

        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(15));

        driver.manage().window().maximize();

        driver.get("https://fakestore.testelka.pl/product/gran-koscielcow/");
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(".woocommerce-store-notice__dismiss-link"))).click();

    }

    @AfterEach
    void closeProcess() {
        driver.quit();
    }

    @Test
    void productRemovedCorrectlyFromWishLIst() {
        //given
        String expectedMessage = "Produkt został usunięty.";
        //when
        driver.findElement(By.cssSelector("div.yith-wcwl-add-button>a")).click();
        wait.until(ExpectedConditions.textToBe(By.cssSelector("span.feedback"), "Produkt dodany!"));
        driver.findElement(By.cssSelector("div.primary-navigation li#menu-item-248")).click();

        Set<String> cards = driver.getWindowHandles();
        String actualCard = driver.getWindowHandle();
        cards.remove(actualCard);
        String secondCard = cards.iterator().next();
        driver.switchTo().window(secondCard);

        driver.findElement(By.cssSelector("td.product-remove a")).click();

        By locatorToMessage = By.cssSelector("div.woocommerce-message");
        wait.until(ExpectedConditions.presenceOfElementLocated(locatorToMessage));

        //then
        assertThat(driver.findElement(locatorToMessage).getText(), equalTo(expectedMessage));
    }
}
