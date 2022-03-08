package Selenium.Zad4;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.anyOf;
import static org.hamcrest.Matchers.equalTo;

public class Zad4 {

    WebDriver driver;

    @BeforeEach
    void prepare() {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");

        driver = new ChromeDriver();

        driver.manage().window().setPosition(new Point(445, 30));
        driver.manage().window().setSize(new Dimension(854, 480));
    }

    @AfterEach
    void closeProcess() {
        driver.quit();
    }

    @Test
    void windowPositionShouldBeProperly() {
        //given
        Point point = new Point(445, 30);
        Point point2 = new Point(444, 30);
        //when
        //then
        assertThat(driver.manage().window().getPosition(), anyOf(
                equalTo(point),
                equalTo(point2)
        ));
    }

    @Test
    void windowSizeShouldBeProperly() {
        //given
        Dimension dimension = new Dimension(854, 480);
        //when
        //then
        assertThat(driver.manage().window().getSize(), equalTo(dimension));
    }

    @Test
    void itIsNotTest() {
        driver.manage().window().maximize();
        driver.manage().window().fullscreen();
    }
}
