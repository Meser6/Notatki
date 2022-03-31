package Selenium.Zad12;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class Zad12 { //TODO

    WebDriver driver;
    WebDriverWait wait;

    @BeforeEach
    void prepare() {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(15));

        driver.manage().window().maximize();

        driver.get("https://fakestore.testelka.pl/");
        //driver.findElement(By.cssSelector("woocommerce-store-notice__dismiss-link")).click();
        addSomethingToCart(wait);
    }

    @AfterEach
    void closeProcess() {
        driver.quit();
    }

    @Test
    void dupa(){
        assertThat("xd", equalTo("xd"));
    }

    void addSomethingToCart(WebDriverWait wait) {
        driver.findElement(By.cssSelector("li[class=\"product-category product\"] img")).click();
        driver.findElement(By.cssSelector("a[aria-label=\"Dodaj „Wspinaczka Island Peak” do koszyka\"]")).click();
        wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("a[title=\"Zobacz koszyk\"]"))).click();
    }
}
