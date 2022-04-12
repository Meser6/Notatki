package Selenium.Zadania.Zad12;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.junit.jupiter.api.Assertions.assertAll;


public class Zad12 {

    WebDriver driver;
    WebDriverWait wait;

    String correctCoupon = "10procent";
    String incorrectCoupon = "testCoupon";

    String correctPrice;
    String correctAlert;

    By deleteButton = By.cssSelector(".woocommerce-remove-coupon");

    @BeforeEach
    void prepare() {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();
        wait = new WebDriverWait(driver, Duration.ofSeconds(10), Duration.ofMillis(1500));

        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(15));

        driver.manage().window().maximize();

        driver.get("https://fakestore.testelka.pl/");
        wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(".woocommerce-store-notice__dismiss-link"))).click();
        addSomethingToCart(wait);
    }

    @AfterEach
    void closeProcess() {
        driver.quit();
    }

    @Test
    void appliedCorrectCouponWillChargeDiscountCorrectly() {
        //given
        correctPrice = "7 380,00 zł";
        correctAlert = "Kupon został pomyślnie użyty.";
        //when
        addCoupon(correctCoupon);
        wait.until(ExpectedConditions.presenceOfElementLocated(deleteButton));
        //then
        assertions(correctPrice, correctAlert);

    }

    @Test
    void appliedCorrectCouponTwoTimesWillChargeDiscountOnlyOnce() {
        //given
        correctPrice = "7 380,00 zł";
        correctAlert = "Kupon został zastosowany!";
        //when
        addCoupon(correctCoupon);
        wait.until(ExpectedConditions.presenceOfElementLocated(deleteButton));
        addCoupon(correctCoupon);
        wait.until(ExpectedConditions.presenceOfElementLocated(deleteButton));
        //then
        assertions(correctPrice, correctAlert);
    }

    @Test
    void appliedCorrectCouponAndIncreasingProductAmountWillChargeDiscountCorrectly() {
        //given
        correctPrice = "14 760,00 zł";
        correctAlert = "Koszyk zaktualizowany.";
        WebElement amount;
        //when
        addCoupon(correctCoupon);
        wait.until(ExpectedConditions.presenceOfElementLocated(deleteButton));
        amount = driver.findElement(By.cssSelector("input[id^=\"quantity\"]"));
        amount.clear();
        amount.sendKeys("2");
        wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("button[name=\"update_cart\"]"))).click();
        //then
        assertions(correctPrice, correctAlert);
    }

    @Test
    void appliedCorrectCouponAndAddingNewProductShouldChargeDiscountCorrectly() {
        //given
        correctPrice = "10 620,00 zł";
        //when
        addCoupon(correctCoupon);
        wait.until(ExpectedConditions.presenceOfElementLocated(deleteButton));
        driver.findElement(By.xpath(".//a[text()=\"Windsurfing\"]")).click();
        driver.findElement(By.cssSelector("li[class*=\"post-393\"] img")).click();
        driver.findElement(By.cssSelector("button[name=\"add-to-cart\"]")).click();
        wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("div.woocommerce-message>a[class=\"button wc-forward\"]"))).click();
        //then
        assertThat(checkPrice(), equalTo(correctPrice));
    }

    @Test
    void appliedIncorrectCouponWillNotChargeDiscount() {
        //given
        correctPrice = "8 200,00 zł";
        correctAlert = "Kupon \"testcoupon\" nie istnieje!";
        //when
        addCoupon(incorrectCoupon);
        //then
        assertions(correctPrice, correctAlert);
    }

    @Test
    void appliedEmptyCouponWillNotChargeDiscount() {
        //given
        correctPrice = "8 200,00 zł";
        correctAlert = "Proszę wpisać kod kuponu.";
        //when
        addCoupon("");
        //then
        assertions(correctPrice, correctAlert);
    }


    // no nie rozkkminie tego. pojawia sie kreciol, znika i pojawiaja sie dwa, a po nich prawidlowe wartosci
    // Czasami lapie w przerwie, czasem po kreciolach a czasem nie zlapie ich
    @Test
    @Deprecated
    void deletingCouponShouldRestoredNormalPrice() {
        //given
        correctPrice = "8 200,00 zł";
        correctAlert = "Kupon został usunięty.";
        //when
        addCoupon(correctCoupon);
        checkBlockUIElements();
        driver.findElement(deleteButton).click();
        checkBlockUIElements();
        //then
        assertions(correctPrice, correctAlert);
    }

    void assertions(String price, String alert) {
        assertAll(
                () -> assertThat(checkPrice(), equalTo(price)),
                () -> assertThat(checkAlert(), equalTo(alert))
        );
    }


    void addSomethingToCart(WebDriverWait wait) {
        driver.findElement(By.cssSelector("li[class=\"product-category product\"] img")).click();
        driver.findElement(By.cssSelector("li.post-42 img")).click();
        driver.findElement(By.cssSelector("button[name=\"add-to-cart\"]")).click();
        wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("div.woocommerce-message>a[class=\"button wc-forward\"]"))).click();
    }

    void addCoupon(String coupon) {
        driver.findElement(By.cssSelector("input[name=\"coupon_code\"]")).sendKeys(coupon);
        driver.findElement((By.cssSelector("button[name=\"apply_coupon\"]"))).click();
    }

    String checkPrice() {
        checkBlockUIElements();
        return driver.findElement(By.cssSelector("td[data-title=\"Suma\"] bdi")).getText();
    }

    String checkAlert() {
        checkBlockUIElements();
        return wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("*[role=\"alert\"]"))).getText();
    }

    void checkBlockUIElements() {
        wait = new WebDriverWait(driver, Duration.ofSeconds(15), Duration.ofMillis(1000));
        By locator = By.cssSelector("div.blockUI");
        wait.until(ExpectedConditions.numberOfElementsToBeLessThan(locator, 1));
    }
}
