package Selenium.Zad13;

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
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertFalse;

public class Zad13 {

    WebDriver driver;
    WebDriverWait wait;

    @BeforeEach
    void prepare() {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();

        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(15));

        driver.manage().window().maximize();

        driver.get("https://fakestore.testelka.pl/metody-na-elementach/");
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(".woocommerce-store-notice__dismiss-link"))).click();

    }

    @AfterEach
    void closeProcess() {
        driver.quit();
    }

    @Test
    void test() {
        //given
        WebElement buttonToMainPageLocator = driver.findElement(By.cssSelector("input[name=\"main-page\"]"));
        WebElement buttonToSailingPage = driver.findElement(By.cssSelector("a[name=\"sailing\"]"));
        List<WebElement> buttonsToPages = driver.findElements(By.cssSelector("p>*[class=\"button\"]"));
        List<WebElement> selectedCheckboxAndRadio = driver.findElements(By.cssSelector("p>input[name^=\"selected\"]"));
        List<WebElement> unselectedCheckboxAndRadio = driver.findElements(By.cssSelector("p>input[name^=\"not-selected\"]"));
        //when

        //then
        assertAll(
                () -> assertFalse(buttonToMainPageLocator.isEnabled()),
                () -> assertFalse(buttonToSailingPage.isDisplayed()),
                () -> {
                    int correctedColors = 0;
                    for (WebElement a : buttonsToPages) {
                        String actualColor;
                        actualColor = a.getCssValue("background-color");
                        if (actualColor.equals("rgba(245, 233, 101, 1)")) {
                            correctedColors++;
                        }
                    }
                    assertThat(correctedColors, equalTo(buttonsToPages.size()));
                },
                () -> {
                    int selectedElements = 0;
                    for (WebElement a : selectedCheckboxAndRadio) {
                        boolean isSelected;
                        isSelected = a.isSelected();
                        if (isSelected) {
                            selectedElements++;
                        }
                    }
                    assertThat(selectedElements, equalTo(selectedCheckboxAndRadio.size()));
                },
                () -> {
                    int notSelectedElements = 0;
                    for (WebElement a : unselectedCheckboxAndRadio) {
                        boolean isSelected = a.isSelected();
                        if (!isSelected) {
                            notSelectedElements++;
                        }
                    }
                    assertThat(notSelectedElements, equalTo(unselectedCheckboxAndRadio.size()));
                },
                () -> {
                    int buttonsWithTagA = 0;
                    for (WebElement a : buttonsToPages) {
                        String actualTag;
                        actualTag = a.getTagName();
                        if (actualTag.equals("a")) {
                            buttonsWithTagA++;
                        }
                    }
                    assertThat(buttonsWithTagA, equalTo(buttonsToPages.size()));
                }
        );
    }
}
