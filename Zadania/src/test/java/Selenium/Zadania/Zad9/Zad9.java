package Selenium.Zadania.Zad9;

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

public class Zad9 {

    WebDriver driver;

    @BeforeEach
    void prepare() {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://fakestore.testelka.pl/cwiczenia-z-selektorow-atrybuty-w-xpath/");
    }

    @AfterEach
    void closeProcess() {
        driver.quit();
    }

    @Test
    void one() {
        //given
        //when
        List<WebElement> list = driver.findElements(By.xpath(".//*[text()='Button']"));
        //then
        assertThat(list.size(), equalTo(4));

    }

    @Test
    void two() {
        //given
        //when
        List<WebElement> list = driver.findElements(By.xpath(".//*[contains(@id, 'btn-') and not(contains(@class, 'accent-test'))]"));
        //then
        assertThat(list.size(), equalTo(2));
    }

    @Test
    void three() {
        //given
        //when
        List<WebElement> list = driver.findElements(By.xpath(".//*[contains(text(), 'Btn')]"));
        //then
        assertThat(list.size(), equalTo(3));
    }

    @Test
    void four() {
        //given
        //when
        List<WebElement> list = driver.findElements(By.xpath(".//*[contains(text(), 'Button') and not(@id='button6')]"));
        //then
        assertThat(list.size(), equalTo(3));
    }

    @Test
    void five() {
        //given
        //when
        List<WebElement> list = driver.findElements(By.xpath(".//*[@class='button primary test']"));
        //then
        assertThat(list.size(), equalTo(3));
    }

    @Test
    void six() {
        //given
        //when
        List<WebElement> list = driver.findElements(By.xpath(".//*[contains(@class, 'accent')]"));
        //then
        assertThat(list.size(), equalTo(4));
    }

    @Test
    void seven() {
        //given
        //when
        List<WebElement> list = driver.findElements(By.xpath(".//*[starts-with(@class, 'button accent') and not(contains(@class, '-'))]"));
        //then
        assertThat(list.size(), equalTo(3));
    }

    @Test
    void eight() {
        //given
        //when
        List<WebElement> list = driver.findElements(By.xpath(".//*[starts-with(@id, 'button-') and not(contains(@id, '2'))]"));
        //then
        assertThat(list.size(), equalTo(2));
    }

}
