package Selenium.Zadania.Zad18;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class Zad18 {
    WebDriver driver;
    WebDriverWait wait;


    @BeforeEach
    void prepare() {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();

        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(15));

        driver.manage().window().maximize();

        driver.get("https://fakestore.testelka.pl/product-category/windsurfing/");
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(".woocommerce-store-notice__dismiss-link"))).click();

    }

    @AfterEach
    void closeProcess() {
        driver.quit();
    }

    @Test
    void sortingByLowestPriceWorkCorrectly() {
        //given
        String expectedPrice = "2 900,00 zł";
        String actualPrice;

        List<WebElement> sortingLists = driver.findElements(By.cssSelector("select.orderby"));
        WebElement sortingList = sortingLists.get(0);
        Select select = new Select(sortingList);
        //when
        select.selectByValue("price");
        List<WebElement> productsList = driver.findElements(By.cssSelector("ul[class=\"products columns-3\"]>li bdi"));
        actualPrice = productsList.get(0).getText();
        //then
        assertThat(actualPrice, equalTo(expectedPrice));
    }

    @Test
    void sortingByHighestPriceWorkCorrectly() {
        //given
        String expectedPrice = "5 399,00 zł";
        String actualPrice;

        List<WebElement> sortingLists = driver.findElements(By.cssSelector("select.orderby"));
        WebElement sortingList = sortingLists.get(0);
        Select select = new Select(sortingList);
        //when
        select.selectByValue("price-desc");
        List<WebElement> productsList = driver.findElements(By.cssSelector("ul[class=\"products columns-3\"]>li bdi"));
        actualPrice = productsList.get(0).getText();
        //then
        assertThat(actualPrice, equalTo(expectedPrice));
    }
}
