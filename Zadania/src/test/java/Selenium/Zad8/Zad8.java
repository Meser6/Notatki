package Selenium.Zad8;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Zad8 {

    WebDriver driver;

    @BeforeEach
    void prepare() {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://fakestore.testelka.pl/wyszukiwanie-elementow-poprzez-relacje/");
    }

    @AfterEach
    void closeProcess() {
        driver.quit();
    }

    @Test
    void one() {
        //given
        //when
        //then
        driver.findElement(By.cssSelector("dd#name-element>input#name"));
    }

    @Test
    void two() {
        //given
        //when
        //then
        driver.findElement(By.cssSelector("div.second-div>input[name='email']"));
    }

    @Test
    void three() {
        //given
        //when
        //then
        driver.findElement(By.cssSelector("div.second-div>input:nth-of-type(1)"));
    }

    @Test
    void four() {
        //given
        //when
        //then
        driver.findElement(By.cssSelector("div.second-div input:last-child"));
    }

    @Test
    void five() {
        //given
        //when
        //then
        driver.findElement(By.cssSelector("div.second-div input#submit:last-of-type"));
    }

    @Test
    void six() {
        //given
        //when
        //then
        driver.findElement(By.cssSelector("div:not([class])>button"));
    }
}
