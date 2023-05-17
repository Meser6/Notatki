package Selenium.Zadania.Zad5;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Zad5 {

    WebDriver driver;

    @BeforeEach
    void prepareDriver(){
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna");
    }

    @AfterEach
    void closeProcess(){
        driver.quit();
    }

    @Test
    void thereAreThatElements(){
        driver.findElement(By.id("n-mainpage-description"));
        driver.findElement(By.className("searchButton"));
        driver.findElement(By.name("search"));
        driver.findElements(By.linkText("Wspomóż Wikipedię"));
        driver.findElements(By.partialLinkText("Ostatnie"));
        driver.findElements(By.tagName("div"));
    }
}
