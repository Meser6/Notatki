package Selenium.Zadania.Zad19;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class Zad19 {

    WebDriver driver;
    WebDriverWait wait;
    Actions actions;
    JavascriptExecutor js;


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
    }

    @AfterEach
    void closeProcess() {
        driver.quit();
    }

    @Test
    void one() {
        //given
        By menuLinkSelector = By.cssSelector("a#menu-link");
        By cartLinkSelector = By.cssSelector("div#div-context-menu li.menu-cart");

        String expectedDomain = "https://fakestore.testelka.pl/koszyk/";
        String actualDomain;
        //when
        WebElement menuLinkElement = driver.findElement(menuLinkSelector);
        js.executeScript("arguments[0].scrollIntoView()", menuLinkElement);
        actions.contextClick(menuLinkElement).build().perform();
        driver.findElement(cartLinkSelector).click();
        actualDomain = driver.getCurrentUrl();
        //then
        assertThat(actualDomain, equalTo(expectedDomain));
    }

    @Test
    void two() {
        //given
        By doubleClickAreaSelector = By.cssSelector("div[id='double-click']");

        String expectedColor = "rgba(245, 93, 122, 1)";
        String actualColor;
        //when
        WebElement doubleClickArea = driver.findElement(doubleClickAreaSelector);
        js.executeScript("arguments[0].scrollIntoView()", doubleClickArea);
        actions.doubleClick(doubleClickArea).build().perform();
        actualColor = doubleClickArea.getCssValue("background-color");
        //then
        assertThat(expectedColor, equalTo(actualColor));
    }

    @Test
    void three() {
        //given
        By textSpaceSelector = By.cssSelector("p>input[type='text']");
        By acceptedButtonSelector = By.cssSelector("p>button");
        By visibleTextSelector = By.cssSelector("p#output");

        String textToSend = "testTest";
        String expectedText = "Wprowadzony tekst: " + textToSend;
        String actualText;
        //
        WebElement textSpace = driver.findElement(textSpaceSelector);
        WebElement acceptedButton = driver.findElement(acceptedButtonSelector);
        js.executeScript("arguments[0].scrollIntoView(true)", textSpace);
        actions.sendKeys(textSpace, textToSend).build().perform();
        actions.click(acceptedButton).build().perform();
        actualText = driver.findElement(visibleTextSelector).getText();
        //then
        assertThat(actualText, equalTo(expectedText));
    }

    @Test
    void four() {
        //given
        By squaresSpaceSelector = By.cssSelector("ol#selectable>li");
        By selectedSquaresSelector = By.cssSelector("ol#selectable >li[class$='ui-selected']");
        List<WebElement> allSquaresList;
        List<WebElement> selectedSquares;

        int expectedQuantityOdSelectedSquares = 3;
        int actualQuantityOdSelectedSquares;

        //when
        allSquaresList = driver.findElements(squaresSpaceSelector);
        js.executeScript("arguments[0].scrollIntoView(true)", allSquaresList.get(0));

        actions.keyDown(Keys.CONTROL).click(allSquaresList.get(0)).click(allSquaresList.get(4)).click(allSquaresList.get(6)).build().perform();

        selectedSquares = driver.findElements(selectedSquaresSelector);
        actualQuantityOdSelectedSquares = selectedSquares.size();
        //then
        assertThat(expectedQuantityOdSelectedSquares, equalTo(actualQuantityOdSelectedSquares));


    }

}
