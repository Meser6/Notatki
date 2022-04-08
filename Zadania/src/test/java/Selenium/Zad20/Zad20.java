package Selenium.Zad20;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class Zad20 {
    WebDriver driver;
    WebDriverWait wait;
    Actions actions;
    JavascriptExecutor js;


    WebElement yellowSquare;
    WebElement redSquare;

    @BeforeEach
    void prepare() {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();

        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(15));

        driver.manage().window().maximize();

        driver.get("https://fakestore.testelka.pl/actions/");
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(".woocommerce-store-notice__dismiss-link"))).click();

        actions = new Actions(driver);
        js = (JavascriptExecutor) driver;

        yellowSquare = driver.findElement(By.cssSelector("div#draggable"));
        redSquare = driver.findElement(By.cssSelector("div#droppable"));
        js.executeScript("arguments[0].scrollIntoView(true)", yellowSquare);
    }

    @AfterEach
    void closeProcess() {
        driver.quit();
    }

    @Test
    void one() {
        //given
        String expectedText = "Dropped!";
        String actualText;
        //when
        actions.dragAndDrop(yellowSquare, redSquare).build().perform();
        actualText = redSquare.getText();
        //then
        assertThat(actualText, equalTo(expectedText));
    }

    @Test
    void two() {
        //given
        String expectedText = "Dropped!";
        String actualText;
        //when
        actions.dragAndDropBy(yellowSquare, 200, -30).build().perform();
        actualText = redSquare.getText();
        //then
        assertThat(actualText, equalTo(expectedText));
    }

    @Test
    void three() {
        //given
        String expectedText = "Dropped!";
        String actualText;
        //when
        actions.dragAndDropBy(yellowSquare, 160, 40).build().perform();
        actualText = redSquare.getText();
        //then
        assertThat(actualText, equalTo(expectedText));
    }
}
