package Selenium.Zadania.Zad16;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class Zad16 {

    WebDriver driver;

    @BeforeEach
    void prepare() {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();

        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(15));

        driver.manage().window().maximize();

        driver.get("https://jsfiddle.net/nm134se7");
        WebElement frame = driver.findElement(By.cssSelector("iframe[name=\"result\"]"));
        driver.switchTo().frame(frame);
    }

    @AfterEach
    void closeProcess() {
        driver.quit();
    }

    @Test
    void thereIsCorrectResponseAfterClickingOKInAlert() {
        //given
        String correctResponse = "Wybrana opcja to OK!";
        String actualResponse;
        By response = By.cssSelector("p#demo");
        //when
        clickOnConfirmAlert();
        driver.switchTo().alert().accept();
        actualResponse = driver.findElement(response).getText();
        //then
        assertThat(actualResponse, equalTo(correctResponse));
    }

    @Test
    void thereIsCorrectResponseAfterClickingCANCELInAlert() {
        //given
        String correctResponse = "Wybrana opcja to Cancel!";
        String actualResponse;
        By response = By.cssSelector("p#demo");
        //when
        clickOnConfirmAlert();
        driver.switchTo().alert().dismiss();
        actualResponse = driver.findElement(response).getText();
        //then
        assertThat(actualResponse, equalTo(correctResponse));
    }

    @Test
    void thereIsCorrectResponseAfterSendAnyTextToAlert() {
        //given
        String textToSend = "test";
        String correctResponse = "Cześć " + textToSend + "! Jak leci?";
        String actualResponse;
        By response = By.cssSelector("p#prompt-demo");
        //when
        driver.findElement(By.cssSelector("button[onclick=\"promptFunction()\"]")).click();
        driver.switchTo().alert().sendKeys(textToSend);
        driver.switchTo().alert().accept();
        actualResponse = driver.findElement(response).getText();
        //then
        assertThat(actualResponse, equalTo(correctResponse));

    }

    void clickOnConfirmAlert() {
        driver.findElement(By.cssSelector("button[onclick=\"confirmFunction()\"]")).click();
    }
}


