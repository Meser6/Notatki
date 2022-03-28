package Selenium.Zad10;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class Zad10 {

    WebDriver driver;

    @BeforeEach
    void prepare() {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://fakestore.testelka.pl/cwiczenia-z-selektorow-xpath/");
    }

    @AfterEach
    void closeProcess() {
        driver.quit();
    }

    @Test
    void buyerDataShouldBeProperly() {
        //given
        String expectedBuyerData = """
                Nabywca:
                Augustyna Gorska
                ul. Awionetki RWD 142
                03-982 Warszawa""";
        //when
        String actualBuyerData = driver.findElement(By.xpath(" .//tr/td[@colspan='2'][2]")).getText();
        //Then
        assertThat(actualBuyerData, equalTo(expectedBuyerData));
    }

    @Test
    void priceOfOneSelfAdhesivePadShouldBe10() {
        //when
        String expectedAmount = "100";
        //when
        String actualAmount = driver.findElement(By.xpath(".//td[text()='Bloczek samoprzylepny']/following-sibling::*[1]")).getText();
        //Then
        assertThat(actualAmount, equalTo(expectedAmount));
    }

    @Test
    void ammountOfSelfAdhesivePadShouldBe100() {
        //when
        String expectedAmount = "10.00";
        //when
        String actualAmount = driver.findElement(By.xpath(".//td[text()='Bloczek samoprzylepny']/following-sibling::*[2]")).getText();
        //Then
        assertThat(actualAmount, equalTo(expectedAmount));
    }

    @Test
    void priceOf100SelfAdhesivePadShouldBe1000() {
        //when
        String expectedAmount = "1000.00";
        //when
        String actualAmount = driver.findElement(By.xpath(".//td[text()='Bloczek samoprzylepny']/following-sibling::*[3]")).getText();
        //Then
        assertThat(actualAmount, equalTo(expectedAmount));
    }
}
