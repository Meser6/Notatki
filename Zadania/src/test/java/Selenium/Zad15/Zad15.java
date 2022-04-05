package Selenium.Zad15;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class Zad15 {

    WebDriver driver;
    WebDriverWait wait;


    @BeforeEach
    void prepare() {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();

        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(15));

        driver.manage().window().maximize();

        driver.get("https://fakestore.testelka.pl/product/wczasy-relaksacyjne-z-yoga-w-toskanii/");
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(".woocommerce-store-notice__dismiss-link"))).click();

    }

    @AfterEach
    void closeProcess() {
        driver.quit();
    }

    @Test
    void cartShouldBeVisibleIfElementIsOnTheView() {
        //given
        WebElement relatedProductsButton = driver.findElement(By.cssSelector("section[class='related products'] a.button"));
        WebElement cart;
        //when
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].scrollIntoView()", relatedProductsButton);
        cart = driver.findElement(By.cssSelector("section[class$=\"slideInDown\""));
        //then
        assertTrue(cart.isDisplayed());

    }
}
