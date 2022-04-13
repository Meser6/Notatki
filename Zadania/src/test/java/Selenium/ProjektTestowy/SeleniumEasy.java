package Selenium.ProjektTestowy;

import Selenium.ProjektTestowy.Helpers.ExercisesDifficulty;
import Selenium.ProjektTestowy.Helpers.ScreenshotHelper;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.RegisterExtension;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.io.FileHandler;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.IOException;
import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class SeleniumEasy {

    WebDriver driver;
    WebDriverWait wait;

    @RegisterExtension
    ScreenshotHelper status = new ScreenshotHelper();

    @BeforeEach
    void prepare() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();

        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(15));
        driver.manage().window().maximize();

        driver.get("https://demo.seleniumeasy.com/");
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("a.at-cm-no-button"))).click();

    }

    @AfterEach
    void closeProcess(TestInfo info) throws IOException {
        if (status.isFiled) {
            System.out.println("Test screenshot is availabe at: " + takeScreenshot(info));
        }
        driver.quit();
    }

    @Tag("input")
    @Test
    void singleInputField() {
        //given
        String messageToSend = "Test01#";
        String expectedMessage = "Your Message: " + messageToSend;
        String receivedMessage;

        By formToSendMessageSelector = By.cssSelector("form#get-input input");
        By showMessageButtonSelector = By.cssSelector("form#get-input>button");
        By receivedMessageSelector = By.cssSelector("div#user-message");
        //when
        choseExercisesCategoryAndIndex(ExercisesDifficulty.BASIC, 0);
        driver.findElement(formToSendMessageSelector).sendKeys(messageToSend);
        driver.findElement(showMessageButtonSelector).click();
        receivedMessage = driver.findElement(receivedMessageSelector).getText();
        //then
        assertThat(receivedMessage, equalTo(expectedMessage));
    }

    @Tag("input")
    @ParameterizedTest
    @CsvSource({"5, 10, 15", "x, 10, NaN", "x, y, NaN"})
    void twoInputFields(String a, String b, String sum) {
        //given
        String expectedMessage = "Total a + b = " + sum;
        String receivedMessage;

        By formToSendASelector = By.cssSelector("#sum1");
        By formToSendBSelector = By.cssSelector("#sum2");
        By getTotalButtonSelector = By.cssSelector("#gettotal button");
        By receivedSumSelector = By.cssSelector("#gettotal+div:not([class])");
        //when
        choseExercisesCategoryAndIndex(ExercisesDifficulty.BASIC, 0);
        driver.findElement(formToSendASelector).sendKeys(a);
        driver.findElement(formToSendBSelector).sendKeys(b);
        driver.findElement(getTotalButtonSelector).click();
        receivedMessage = driver.findElement(receivedSumSelector).getText();
        //then
        assertThat(receivedMessage, equalTo(expectedMessage));
    }

    /**
     * @param difficulty chose BASIC, INTERMEDIATE and ADVANCED from ExercisesDifficulty
     */
    private void choseExercisesCategoryAndIndex(ExercisesDifficulty difficulty, int exercisesIndex) {
        List<WebElement> difficultyCategoriesList = driver.findElements(By.cssSelector("li.tab-toggle a"));

        switch (difficulty) {
            case BASIC -> difficultyCategoriesList.get(0).click();
            case INTERMEDIATE -> difficultyCategoriesList.get(1).click();
            case ADVANCED -> difficultyCategoriesList.get(2).click();
        }
        choseExercises(exercisesIndex);
    }

    /**
     * @param exercisesIndex Basic - 8 example
     *                       Intermediate - 8 example
     *                       Advanced - 11 example
     */
    private void choseExercises(int exercisesIndex) {
        wait = new WebDriverWait(driver, Duration.ofSeconds(1));
        wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("div[class=\"tab-pane fade active in\"] div.list-group")));

        List<WebElement> exercisesList = driver.findElements(By.cssSelector("div.active div.list-group>a"));
        exercisesList.get(exercisesIndex).click();
    }

    private String takeScreenshot(TestInfo info) throws IOException {
        File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        LocalDateTime timeNow = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyy HH-mm-ss");
        String path = "C:\\Users\\48513\\Desktop\\Screenshot\\" + info.getDisplayName() + " " + formatter.format(timeNow) + ".jpg";
        FileHandler.copy(screenshot, new File(path));
        return path;
    }
}
