package Selenium.Zad1;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.net.MalformedURLException;
import java.net.URL;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class Zad1 {

    WebDriver driver;

    @BeforeEach
    void prepareChromeDriver() {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();
    }

    @AfterEach
    void closeProcess() {
        driver.quit();
    }

    @Test
    void AfterBackThereShouldBeWikiite() throws MalformedURLException {
        //given
        URL wikipediaURL = new URL("https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna");
        URL nasaURL = new URL("https://www.nasa.gov/");
        //when
        driver.navigate().to(wikipediaURL);
        driver.navigate().to(nasaURL);
        driver.navigate().back();
        //then
        assertThat(driver.getTitle(), equalTo("Wikipedia, wolna encyklopedia"));

    }
}
