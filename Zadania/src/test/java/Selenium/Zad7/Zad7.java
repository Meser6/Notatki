package Selenium.Zad7;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class Zad7 {

    WebDriver driver;

    @BeforeEach
    void prepare() {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://fakestore.testelka.pl/cwiczenia-z-selektorow-fragmenty-wartosci-atrybutow/");
    }

    @AfterEach
    void closeProcess() {
        driver.quit();
    }

    @Test
    void one() {
        //given
        List<WebElement> list = driver.findElements(By.cssSelector("a[id^='b']"));
        //when
        //then
        assertThat(list.size(), equalTo(4));
    }

    @Test
    void two() {
        //given
        List<WebElement> list = driver.findElements(By.cssSelector("[id|='btn']"));
        //when
        //then
        assertThat(list.size(), equalTo(3));
    }

    @Test
    void three() {
        //given
        List<WebElement> list = driver.findElements(By.cssSelector("[style*='background-color: #db456f']"));
        //when
        //then
        assertThat(list.size(), equalTo(2));
    }

    @Test
    void four() {
        //given
        List<WebElement> list = driver.findElements(By.cssSelector("[id|='button']"));
        //when
        //then
        assertThat(list.size(), equalTo(3));
    }

    @Test
    void five() {
        //given
        List<WebElement> list = driver.findElements(By.cssSelector(".accent"));
        //when
        //then
        assertThat(list.size(), equalTo(3));
    }


    @Test
    void six() {
        //given
        List<WebElement> list = driver.findElements(By.cssSelector(".test[id^='b']"));
        //when
        //then
        assertThat(list.size(), equalTo(3));
    }

    @Test
    void seven() {
        //given
        List<WebElement> list = driver.findElements(By.cssSelector("[class^='button accent']"));
        //when
        //then
        assertThat(list.size(), equalTo(4));
    }

}
