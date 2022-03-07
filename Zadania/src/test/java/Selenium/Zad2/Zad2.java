package Selenium.Zad2;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.equalTo;

public class Zad2 {

    WebDriver driver;

    @BeforeEach
    void prepareDriver() {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://www.google.pl/");
    }

    @AfterEach
    void closeProcess() {
        driver.quit();
    }

    @Test
    void titleInPolishLanguageIsCorrect() {
        //given
        //when
        //then
        assertThat(driver.getTitle(), equalTo("Google"));
    }

    @Test
    void URLeInPolishLanguageIsCorrect() {
        //given
        //when
        //then
        assertThat(driver.getCurrentUrl(), containsString("google.pl"));
    }

    @Test
    void timeZoneShouldBe8UFT() {
        //given
        //when
        //then
        assertThat(driver.getPageSource(), containsString("charset=\"UTF-8\""));
    }

    @Test
    void titleInSpanishLanguageShouldBeCorrect(){
        //given
        //when
        driver.get("https://www.google.pl/?hl=es");
        //then
        assertThat(driver.getTitle(), equalTo("Google"));
    }

    @Test
    void URLeInSpanishLanguageIsCorrect() {
        //given
        //when
        driver.get("https://www.google.pl/?hl=es");
        //then
        assertThat(driver.getCurrentUrl(), containsString("es"));
    }

    @Test
    void timeZoneShouldBeTheSameLikeInPolishSite() {
        //given
        //when
        driver.get("https://www.google.pl/?hl=es");
        //then
        assertThat(driver.getPageSource(), containsString("charset=\"UTF-8\""));
    }
}
