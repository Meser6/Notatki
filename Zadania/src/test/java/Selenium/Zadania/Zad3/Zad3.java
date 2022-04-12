package Selenium.Zadania.Zad3;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.Set;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class Zad3 {

    WebDriver driver;

    @BeforeEach
    void prepareDriver() throws MalformedURLException {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();

        URL amazonMainURL = new URL("https://www.amazon.pl/");
        driver.navigate().to(amazonMainURL);
    }

    @AfterEach
    void closeProcess() {
        driver.quit();
    }

    @Test
    void onMainWebsiteShouldBeSixCookies() throws InterruptedException {
        //given
        //when
        Thread.sleep(1000);
        Set<Cookie> cookiesList = driver.manage().getCookies();
        //then
        assertThat(cookiesList.size(), equalTo(6));
    }

    @Test
    void itIsPossibleToAddingCookie() throws InterruptedException {
        //given
        Cookie cookie = new Cookie("TEST", "test");
        //when
        Thread.sleep(1000);
        driver.manage().addCookie(cookie);
        int size = driver.manage().getCookies().size();
        //then
        assertThat(size, equalTo(7));
    }

    @Test
    void addedCookieNameShouldBeProperly() throws InterruptedException {
        //given
        Cookie cookie = new Cookie("TEST", "test");
        //when
        Thread.sleep(1000);
        driver.manage().addCookie(cookie);
        String name = driver.manage().getCookieNamed("TEST").getName();
        //then
        assertThat(name, equalTo(cookie.getName()));
    }

    @Test
    void addedCookieCanBeRemoved() throws InterruptedException {
        //given
        Cookie cookie = new Cookie("TEST", "test");
        //when
        Thread.sleep(1000);
        driver.manage().addCookie(cookie);
        driver.manage().deleteCookie(cookie);
        int size = driver.manage().getCookies().size();
        //then
        assertThat(size, equalTo(6));
    }

    @Test
    void itIsPossibleToDeletingCookie() throws InterruptedException {
        //given
        //when
        Thread.sleep(1000);
        driver.manage().deleteCookieNamed("i18n-prefs");
        int size = driver.manage().getCookies().size();
        //then
        assertThat(size, equalTo(5));
    }

    @Test
    void onceOfCookieHaveCorrectValues() throws InterruptedException {
        //given
        Cookie cookie;
        //when
        Thread.sleep(1000);
        cookie = driver.manage().getCookieNamed("i18n-prefs");
        String domain = cookie.getDomain();
        String path = cookie.getPath();
        boolean httpOnly = cookie.isHttpOnly();
        boolean secure = cookie.isSecure();
        //then
        assertThat(domain, equalTo(".amazon.pl"));
        assertThat(path, equalTo("/"));
        assertThat(httpOnly, equalTo(false));
        assertThat(secure, equalTo(false));
    }
}
