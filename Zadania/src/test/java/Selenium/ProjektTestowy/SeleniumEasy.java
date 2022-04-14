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
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.io.FileHandler;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.IOException;
import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.junit.jupiter.api.Assertions.assertAll;

public class SeleniumEasy {

    WebDriver driver;
    WebDriverWait wait;
    Select select;
    Actions actions;

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

    @Tag("input")
    @Test
    void singleCheckboxDemo() {
        //given
        String expectedMessage = "Success - Check box is checked";
        String receivedMessage;

        By checkboxInputSelector = By.cssSelector("input#isAgeSelected");
        By receivedMessageSelector = By.cssSelector("div#txtAge");
        //when
        choseExercisesCategoryAndIndex(ExercisesDifficulty.BASIC, 1);
        driver.findElement(checkboxInputSelector).click();
        receivedMessage = driver.findElement(receivedMessageSelector).getText();
        //then
        assertThat(receivedMessage, equalTo(expectedMessage));
    }

    @Tag("input")
    @Test
    void multipleCheckboxDemo() {
        //given
        String expectedMessage = "Uncheck All";
        String receivedMessage;

        By allCheckboxSelector = By.cssSelector("input.cb1-element");
        By checkAllButtonSelector = By.cssSelector("#check1");
        //when
        choseExercisesCategoryAndIndex(ExercisesDifficulty.BASIC, 1);
        WebElement checkAllButtonElement = driver.findElement(checkAllButtonSelector);
        checkAllButtonElement.click();
        receivedMessage = checkAllButtonElement.getAttribute("value");
        //
        assertAll(
                () -> assertThat(receivedMessage, equalTo(expectedMessage)),
                () -> {
                    int checkedCheckbox = 0;
                    List<WebElement> checkboxList = driver.findElements(allCheckboxSelector);
                    for (WebElement e : checkboxList) {
                        if (e.isSelected()) {
                            checkedCheckbox++;
                        }
                    }
                    assertThat(4, equalTo(checkedCheckbox));
                }
        );
    }

    @Tag("input")
    @Test
    void multipleCheckboxDemo2() {
        //given
        String expectedMessage = "Check All";
        String receivedMessage;

        By allCheckboxSelector = By.cssSelector("input.cb1-element");
        By checkAllButtonSelector = By.cssSelector("#check1");
        //when
        choseExercisesCategoryAndIndex(ExercisesDifficulty.BASIC, 1);
        WebElement checkAllButtonElement = driver.findElement(checkAllButtonSelector);
        checkAllButtonElement.click();
        driver.findElements(allCheckboxSelector).get(3).click();
        receivedMessage = checkAllButtonElement.getAttribute("value");
        //
        assertAll(
                () -> assertThat(receivedMessage, equalTo(expectedMessage)),
                () -> {
                    int checkedCheckbox = 0;
                    List<WebElement> checkboxList = driver.findElements(allCheckboxSelector);
                    for (WebElement e : checkboxList) {
                        if (e.isSelected()) {
                            checkedCheckbox++;
                        }
                    }
                    assertThat(3, equalTo(checkedCheckbox));
                }
        );
    }

    @Tag("iput")
    @ParameterizedTest
    @CsvSource({"Male", "Female"})
    void radioButtonDemo(String sex) {
        //given
        String expectedMessage = "Radio button '" + sex + "' is checked";
        String receivedMessage;

        By radioSelectorSelector = By.cssSelector("[name='optradio'][value='" + sex + "']");
        By getCheckValueButtonSelector = By.cssSelector("button#buttoncheck");
        By receivedMessageSelector = By.cssSelector("p.radiobutton");
        //when
        choseExercisesCategoryAndIndex(ExercisesDifficulty.BASIC, 2);
        driver.findElement(radioSelectorSelector).click();
        driver.findElement(getCheckValueButtonSelector).click();
        receivedMessage = driver.findElement(receivedMessageSelector).getText();
        //when
        assertThat(receivedMessage, equalTo(expectedMessage));
    }

    @Tag("input")
    @ParameterizedTest
    @CsvSource({"Male, 0 - 5", "Male, 5 - 15", "Male, 15 - 50", "Female, 0 - 5", "Female, 5 - 15", "Female, 15 - 50"})
    void groupRadioButtonsDemo(String sex, String ageGroup) {
        //given
        String expectedMessage = "Sex : " + sex + "\nAge group: " + ageGroup;
        String receivedMessage;

        By sexRadioSelector = By.cssSelector("[name='gender'][value='" + sex + "']");
        By ageGroupSelector = By.cssSelector("[name='ageGroup'][value='" + ageGroup + "']");
        By getValuesButton = By.cssSelector("div.panel-body>button");
        By receivedMessageSelector = By.cssSelector("p.groupradiobutton");
        //when
        choseExercisesCategoryAndIndex(ExercisesDifficulty.BASIC, 2);
        driver.findElement(sexRadioSelector).click();
        driver.findElement(ageGroupSelector).click();
        driver.findElement(getValuesButton).click();
        receivedMessage = driver.findElement(receivedMessageSelector).getText();
        //when
        assertThat(receivedMessage, equalTo(expectedMessage));
    }

    @Tag("input")
    @Test
    void selectListDemo() {
        //given
        String selectedOption = "Wednesday";
        String expectedMessage = "Day selected :- " + selectedOption;
        String receivedMessage;

        By listSelector = By.cssSelector("select.form-control");
        By receivedMessageSelector = By.cssSelector("p.selected-value");
        //when
        choseExercisesCategoryAndIndex(ExercisesDifficulty.BASIC, 3);
        WebElement list = driver.findElement(listSelector);
        select = new Select(list);
        select.selectByVisibleText(selectedOption);
        receivedMessage = driver.findElement(receivedMessageSelector).getText();
        //when
        assertThat(receivedMessage, equalTo(expectedMessage));
    }

    @Tag("input")
    @Test
    @Disabled
//TODO Zachowuje sie jakby tylko secondOprion byl zaznaczony. Przy debugu przechodzi, a wiec przydalby sie pewnie jakis wait.
    void multiSelectListDemo() {
        //given
        String firstSelectedOption = "California";
        String secondSelectedOption = "Ohio";
        String firstSelectExpectedMessage = "First selected option is :" + firstSelectedOption;
        String allSelectExpectedMessage = "Options selected are : " + firstSelectedOption + "," + secondSelectedOption;

        By firstSelectedOptionSelector = By.cssSelector("option[value='" + firstSelectedOption + "']");
        By secondSelectedOptionSelector = By.cssSelector("option[value='" + secondSelectedOption + "']");
        By firstSelectedButtonSelector = By.cssSelector("button[value='Print First']");
        By allSelectedButtonSelector = By.cssSelector("button[value='Print All']");
        By receivedMessageSelector = By.cssSelector("p.getall-selected");
        //when
        choseExercisesCategoryAndIndex(ExercisesDifficulty.BASIC, 3);
        actions = new Actions(driver);
        WebElement firstSelectedOptionElement = driver.findElement(firstSelectedOptionSelector);
        WebElement secondSelectedOptionElement = driver.findElement(secondSelectedOptionSelector);
        actions.click(firstSelectedOptionElement).keyDown(Keys.LEFT_CONTROL).click(secondSelectedOptionElement).build().perform();
        //then
        assertAll(
                () -> {
                    String firstSelectReceivedMessage;
                    driver.findElement(firstSelectedButtonSelector).click();
                    firstSelectReceivedMessage = driver.findElement(receivedMessageSelector).getText();
                    assertThat(firstSelectReceivedMessage, equalTo(firstSelectExpectedMessage));
                },
                () -> {
                    String allSelectReceivedMessage;
                    driver.findElement(allSelectedButtonSelector).click();
                    allSelectReceivedMessage = driver.findElement(receivedMessageSelector).getText();
                    assertThat(allSelectReceivedMessage, equalTo(allSelectExpectedMessage));
                }
        );
    }

    @Tag("alerts")
    @Test
    void javaScriptAlertBox() {
        //given
        String expectedMessage = "I am an alert box!";
        String receivedMessage;

        By clickMeButtonSelector = By.cssSelector("button[onclick=\"myAlertFunction()\"]");
        //when
        choseExercisesCategoryAndIndex(ExercisesDifficulty.BASIC, 4);
        driver.findElement(clickMeButtonSelector).click();
        Alert alert = driver.switchTo().alert();
        receivedMessage = alert.getText();
        alert.accept();
        //when
        assertThat(receivedMessage, equalTo(expectedMessage));
    }

    @Tag("alerts")
    @ParameterizedTest
    @CsvSource({"OK", "Cancel"})
    void javaScriptConfirmBox(String alert) {
        //given
        String expectedMessage = "You pressed " + alert + "!";
        String receivedMessage;

        By clickMeButtonSelector = By.cssSelector("button[onclick=\"myConfirmFunction()\"]");
        By receivedMessageSelector = By.cssSelector("p#confirm-demo");
        //when
        choseExercisesCategoryAndIndex(ExercisesDifficulty.BASIC, 4);
        driver.findElement(clickMeButtonSelector).click();
        if (alert.equals("OK")) driver.switchTo().alert().accept();
        else driver.switchTo().alert().dismiss();
        receivedMessage = driver.findElement(receivedMessageSelector).getText();
        //then
        assertThat(receivedMessage, equalTo(expectedMessage));
    }

    @Tag("alerts")
    @Test
    void javaScriptAlertBox2() {
        //given
        String messageToSend = "Test01#";
        String expectedMessage = "You have entered '" + messageToSend + "' !";
        String receivedMessage;

        By clickForPromptButtonSelector = By.cssSelector("button[onclick=\"myPromptFunction()\"]");
        By receivedMessageSelector = By.cssSelector("p#prompt-demo");
        //when
        choseExercisesCategoryAndIndex(ExercisesDifficulty.BASIC, 4);
        driver.findElement(clickForPromptButtonSelector).click();
        Alert alert = driver.switchTo().alert();
        alert.sendKeys(messageToSend);
        alert.accept();
        receivedMessage = driver.findElement(receivedMessageSelector).getText();
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
