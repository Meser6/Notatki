package Selenium.Zadania.Zad6;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Zad6 {

    WebDriver driver;

    @BeforeEach
    void prepare() {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://fakestore.testelka.pl/moje-konto/");
    }

    @AfterEach
    void closeProcess() {
        driver.quit();
    }

    @Test
    void findAllElements() {
        driver.findElement(By.cssSelector("#username"));
        driver.findElement(By.cssSelector("#password[type='password']"));
        driver.findElement(By.cssSelector("[value='Zaloguj się']"));
        driver.findElement(By.cssSelector("input[type='email']"));
        driver.findElement(By.cssSelector("input#reg_password"));
        driver.findElement(By.cssSelector("button[name='register']"));
        driver.findElement(By.cssSelector("[href='https://fakestore.testelka.pl/product-category/wspinaczka/']"));
    }
}
