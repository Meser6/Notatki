package Selenium.Zad14;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class Zad14 {

    WebDriver driver;
    WebDriverWait wait;

    By mainframe = By.cssSelector("iframe#main-frame");

    @BeforeEach
    void prepare() {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();

        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(15));

        driver.manage().window().maximize();

        driver.get("https://fakestore.testelka.pl/cwiczenia-z-ramek/");
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(".woocommerce-store-notice__dismiss-link"))).click();

    }

    @AfterEach
    void closeProcess() {
        driver.quit();
    }

    @Test
    void mainPageButtonShouldBeInactive() {
        //given
        WebElement frame = driver.findElement(mainframe);
        WebElement button;
        //when
        driver.switchTo().frame(frame);
        button = driver.findElement(By.cssSelector("input[name=\"main-page\"]"));
        //
        assertFalse(button.isEnabled());
    }

    @Test
    void clickingOnThePictureShouldForwardToMainPage() {
        //given
        String mainURL = "https://fakestore.testelka.pl/";
        //when
        driver.switchTo().frame(0).
                switchTo().frame(0);
        String actualURL = driver.findElement(By.cssSelector("article#post-292 p>a")).getAttribute("href");
        //then
        assertThat(actualURL, equalTo(mainURL));
    }

    @Test
    void secondMainPageButtonShouldBeInactive() {
        //given
        //wheen
        driver.switchTo().frame(0).
                switchTo().frame(0).
                switchTo().frame(0);
        boolean isEnabled = driver.findElement(By.cssSelector("article#post-322 a")).isEnabled();
        //then
        assertTrue(isEnabled);
    }

    @Test
    void thereIsCorrectLogoOnMainSiteAfterClickingOnClimbingCategory() {
        //given
        String logoURL = "https://fakestore.testelka.pl/wp-content/uploads/2018/10/cropped-logo.png";
        //when
        driver.switchTo().frame(0);
        driver.findElement(By.cssSelector("a[value=\"wspinaczka\"]")).click();
        driver.switchTo().defaultContent();
        String url = driver.findElement(By.cssSelector("div.site-branding img")).getAttribute("src");
        //then
        assertThat(url, equalTo(logoURL));
    }
}

