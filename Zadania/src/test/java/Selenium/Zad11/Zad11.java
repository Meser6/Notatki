package Selenium.Zad11;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.equalTo;

public class Zad11 {


    WebDriver driver;

    @BeforeEach
    void prepare() {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();

        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(15));

        driver.get("https://fakestore.testelka.pl/moje-konto/");
    }

    @AfterEach
    void closeProcess() {
        driver.quit();
    }


    //Nie działa przez błędy w budowie strony
    //Nie da się zarejestrować z poziomu selenium
    //  @BeforeAll
    static void createAccount() throws RegistryException {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        WebDriver driver2 = new ChromeDriver();
        driver2.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver2.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(25));

        String mail = "qubcio@mail.pl";
        String password = "dwanascie12";

        driver2.get("https://fakestore.testelka.pl/moje-konto/");
        driver2.findElement(By.cssSelector("input#reg_email")).sendKeys(mail);
        driver2.findElement(By.cssSelector("input#reg_password")).sendKeys(password);
        driver2.findElement(By.cssSelector("input#reg_password")).submit();

        String actual = driver2.findElement(By.cssSelector("div.woocommerce-MyAccount-content strong:first-child")).getText();

        if (!actual.contains("qubcio")) {
            throw new RegistryException();
        }
        driver2.quit();
    }

    //  @AfterAll
    static void deleteAccount() throws DeleteAccountException {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        WebDriver driver2 = new ChromeDriver();
        driver2.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver2.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(25));

        String correctMail = "qubcio@mail.pl";
        String correctPassword = "dwanascie12!";

        driver2.get("https://fakestore.testelka.pl/moje-konto/");
        driver2.findElement(By.cssSelector("input#username")).sendKeys(correctMail);
        driver2.findElement(By.cssSelector("input#password")).sendKeys(correctPassword);
        driver2.findElement(By.cssSelector("button[value=\"Zaloguj się\"]")).click();


        WebElement element = driver2.findElement(By.cssSelector("a.delete-me"));
        element.click();
        element.sendKeys(Keys.ENTER);

        if (!driver2.getCurrentUrl().equals("https://fakestore.testelka.pl/")) {
            throw new DeleteAccountException();
        }

        driver2.quit();
    }

    @Test
    @Tag("happy path")
    void itIsPossibleToLogInCorrectly() {
        //given
        String correctMail = "qubcio4@mail.pl";
        String correctPassword = "Kubek666!";
        String expected = "qubcio4";
        //when
        driver.findElement(By.cssSelector("input#username")).sendKeys(correctMail);
        driver.findElement(By.cssSelector("input#password")).sendKeys(correctPassword);
        driver.findElement(By.cssSelector("button[value=\"Zaloguj się\"]")).click();
        String actual = driver.findElement(By.cssSelector("div.woocommerce-MyAccount-content strong:first-child")).getText();
        //then
        assertThat(actual, containsString(expected));
    }

    @Test
    void itIsImpassibleToLogInWithCorrectMailButIncorrectPassword() {
        //given
        String correctMail = "qubcio4@mail.pl";
        String incorrectPassword = "gdhasjk";
        String expectedCommunicate = "Błąd: Dla adresu e-mail qubcio4@mail.pl podano nieprawidłowe hasło. Nie pamiętasz hasła?";
        //when
        driver.findElement(By.cssSelector("input#username")).sendKeys(correctMail);
        driver.findElement(By.cssSelector("input#password")).sendKeys(incorrectPassword);
        driver.findElement(By.cssSelector("button[value=\"Zaloguj się\"]")).click();
        String actualCommunicate = driver.findElement(By.cssSelector("ul.woocommerce-error>li")).getText();
        //then
        assertThat(actualCommunicate, equalTo(expectedCommunicate));
    }

    @Test
    void itIsImpassibleToLogInWithCorrectMailButEmptyPassword() {
        //given
        String correctMail = "qubcio4@mail.pl";
        String expectedCommunicate = "Błąd: Hasło jest puste.";
        //when
        driver.findElement(By.cssSelector("input#username")).sendKeys(correctMail);
        driver.findElement(By.cssSelector("button[value=\"Zaloguj się\"]")).click();
        String actualCommunicate = driver.findElement(By.cssSelector("ul.woocommerce-error>li")).getText();
        //then
        assertThat(actualCommunicate, equalTo(expectedCommunicate));
    }

    @Test
    void itIsImpassibleToLogInWithAnyLoginAndAnyPassword() {
        //given
        String anyLogin = "qubcio99";
        String anyPassword = "gdhasjk";
        String expectedCommunicate = "Błąd: Brak qubcio99 wśród zarejestrowanych w witrynie użytkowników. Jeśli nie masz pewności co do nazwy użytkownika, użyj adresu e-mail.";
        //when
        driver.findElement(By.cssSelector("input#username")).sendKeys(anyLogin);
        driver.findElement(By.cssSelector("input#password")).sendKeys(anyPassword);
        driver.findElement(By.cssSelector("button[value=\"Zaloguj się\"]")).click();
        String actualCommunicate = driver.findElement(By.cssSelector("ul.woocommerce-error>li")).getText();
        //then
        assertThat(actualCommunicate, equalTo(expectedCommunicate));
    }

    @Test
    void itIsImpassibleToLogInWithAnyLoginAndEmptyPassword() {
        //given
        String anyLogin = "qubcio";
        String expectedCommunicate = "Błąd: Hasło jest puste.";
        //when
        driver.findElement(By.cssSelector("input#username")).sendKeys(anyLogin);
        driver.findElement(By.cssSelector("button[value=\"Zaloguj się\"]")).click();
        String actualCommunicate = driver.findElement(By.cssSelector("ul.woocommerce-error>li")).getText();
        //then
        assertThat(actualCommunicate, equalTo(expectedCommunicate));
    }

    @Test
    void itIsImpassibleToLogInWithEmptyMailAndEmptyPassword() {
        //given
        String emptyMail = "";
        String emptyPassword = "";
        String expectedCommunicate = "Błąd: Nazwa użytkownika jest wymagana.";
        //when
        driver.findElement(By.cssSelector("input#username")).sendKeys(emptyMail);
        driver.findElement(By.cssSelector("input#password")).sendKeys(emptyPassword);
        driver.findElement(By.cssSelector("button[value=\"Zaloguj się\"]")).click();
        String actualCommunicate = driver.findElement(By.cssSelector("ul.woocommerce-error>li")).getText();
        //then
        assertThat(actualCommunicate, equalTo(expectedCommunicate));
    }

    @Test
    void itIsImpassibleToLogInWithIncorrectMailAndAnyPassword() {
        //given
        String incorrectLogin = "qubcio222@mail.pl";
        String anyPassword = "gdhasjk";
        String expectedCommunicate = "Nieznany adres email. Proszę sprawdzić ponownie lub wypróbować swoją nazwę użytkownika.";
        //when
        driver.findElement(By.cssSelector("input#username")).sendKeys(incorrectLogin);
        driver.findElement(By.cssSelector("input#password")).sendKeys(anyPassword);
        driver.findElement(By.cssSelector("button[value=\"Zaloguj się\"]")).click();
        String actualCommunicate = driver.findElement(By.cssSelector("ul.woocommerce-error>li")).getText();
        //then
        assertThat(actualCommunicate, equalTo(expectedCommunicate));
    }
}
