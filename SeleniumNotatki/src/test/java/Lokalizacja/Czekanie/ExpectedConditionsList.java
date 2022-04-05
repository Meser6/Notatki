package Lokalizacja.Czekanie;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;
import java.util.regex.Pattern;

public class ExpectedConditionsList {

    WebDriver driver = new ChromeDriver();
    WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    By locator = By.cssSelector("XYZ");
    WebElement webElement = driver.findElement(locator);
    String string = "string";

    @Test
    void obecnoscElementowNaStronie() {

        //Czy element jest obecny na stronie?
        WebElement webElement1 = wait.until(ExpectedConditions.presenceOfElementLocated(locator));

        //Czy element nie istnieje już na stornie?
        boolean boolean1 = wait.until(ExpectedConditions.stalenessOf(webElement));

        //Czy element z określonym rodzicem jest obecny na stronie?
        WebElement webElement2 = wait.until(ExpectedConditions.presenceOfNestedElementLocatedBy(locator, locator)); //rodzic, dziecko
        WebElement webElement3 = wait.until(ExpectedConditions.presenceOfNestedElementLocatedBy(webElement, locator));
        List<WebElement> webElement1List = wait.until(ExpectedConditions.presenceOfNestedElementsLocatedBy(locator, locator)); //elementy z danym rodzicem
    }

    @Test
    void atrybutyElelemtow() {

        //Czy atrybut elementu zawiera podaną wartość?
        boolean boolean1 = wait.until(ExpectedConditions.attributeContains(locator, "class", "button"));
        boolean boolean2 = wait.until(ExpectedConditions.attributeContains(webElement, "class", "button"));

        //Czy atrybut elementu ma dokładnie podaną wartość?
        boolean boolean3 = wait.until(ExpectedConditions.attributeToBe(locator, "data-product-id", "41"));
        boolean boolean4 = wait.until(ExpectedConditions.attributeToBe(webElement, "data-product-id", "41"));

        //Czy atrybut elementu ma jakąś wartość?
        boolean boolean5 = wait.until(ExpectedConditions.attributeToBeNotEmpty(webElement, "data-product-id"));

        //Czy podany tekst zawiera się w atrybucie value elementu?
        boolean boolean6 = wait.until(ExpectedConditions.textToBePresentInElementValue(locator, "Update"));
        boolean boolean7 = wait.until(ExpectedConditions.textToBePresentInElementValue(webElement, "Update"));
    }

    @Test
    void zaznaczanieElementow() {

        //Czy element jest zaznaczony lub nie?
        boolean boolean1 = wait.until(ExpectedConditions.elementSelectionStateToBe(locator, false)); // false - nie zaznaczony
        boolean boolean2 = wait.until(ExpectedConditions.elementSelectionStateToBe(webElement, true)); //true - zaznaczony

        //Czy element jest zaznaczony?
        boolean boolean3 = wait.until(ExpectedConditions.elementToBeSelected(locator));
        boolean boolean4 = wait.until(ExpectedConditions.elementToBeSelected(webElement));
    }

    @Test
    void klikalnoscElementow() {

        //Czy element jest klikalny? (czekaj az element stanie sie klikalny)
        WebElement webElement1 = wait.until(ExpectedConditions.elementToBeClickable(locator));
        WebElement webElement2 = wait.until(ExpectedConditions.elementToBeClickable(webElement));
    }

    @Test
    void widocznoscElementow() {

        //Czy element nie jest widoczny?
        boolean boolean1 = wait.until(ExpectedConditions.invisibilityOf(webElement));
        boolean boolean2 = wait.until(ExpectedConditions.invisibilityOfAllElements(webElement)); //elementy
        boolean boolean3 = wait.until(ExpectedConditions.invisibilityOfAllElements(webElement, webElement, webElement)); //elementy

        //Czy element jest niewidoczny albo go nie ma na stronie?
        boolean boolean4 = wait.until(ExpectedConditions.invisibilityOfElementLocated(locator));

        //Czy element zawierający podany tekst jest niewidoczny albo go nie ma na stronie?
        boolean boolean5 = wait.until(ExpectedConditions.invisibilityOfElementWithText(locator, "Buy"));

        //Czy podany element jest widoczny?
        WebElement webElement1 = wait.until(ExpectedConditions.visibilityOf(webElement));
        List<WebElement> webElement1List = wait.until(ExpectedConditions.visibilityOfAllElements(webElement)); // elementy
        List<WebElement> webElement2List = wait.until(ExpectedConditions.visibilityOfAllElements(webElement, webElement)); // elementy

        //Czy elementy, które są dziećmi podanego rodzica są widoczne?
        List<WebElement> webElement3List = wait.until(ExpectedConditions.visibilityOfNestedElementsLocatedBy(locator, locator));//rodzic, dziecko
        List<WebElement> webElement4List = wait.until(ExpectedConditions.visibilityOfNestedElementsLocatedBy(webElement, locator));//rodzic, dziecko
    }

    @Test
    void liczbaElementowNaStronie() {

        //Czy liczba elementów jest równa podanej liczbie?
        List<WebElement> webElement1List = wait.until(ExpectedConditions.numberOfElementsToBe(locator, 10)); // number - ile ma ich byc

        //Czy liczba elementów jest mniejsza od podanej liczby?
        List<WebElement> webElement2List = wait.until(ExpectedConditions.numberOfElementsToBeLessThan(locator, 11));

        //Czy liczba elementów jest większa od podanej liczby?
        List<WebElement> webElement3List = wait.until(ExpectedConditions.numberOfElementsToBeMoreThan(locator, 11));

        //Czy przynajmniej jeden element jest obecny na stronie?
        List<WebElement> webElement4List = wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(locator));
    }

    @Test
    void tekstElementu() {

        //Czy tekst elementu zawiera podany tekst?
        boolean boolean1 = wait.until(ExpectedConditions.textToBePresentInElementLocated(locator, "129.99"));
        boolean boolean2 = wait.until(ExpectedConditions.textToBePresentInElement(webElement, "129.99"));

        //Czy tekst elementu jest taki jak podany?
        boolean boolean3 = wait.until(ExpectedConditions.textToBe(locator, "129.99 zł."));

        //Czy tekst elementu odpowiada podanemu wyrażeniu regularnemu?
        boolean boolean4 = wait.until(ExpectedConditions.textMatches(locator, Pattern.compile("129.99"))); // a co to wyrażenie regularneme? TODO
    }

    @Test
    void javascript() {

        //Czy javascript nie rzuca wyjątkiem?
        boolean boolean1 = wait.until(ExpectedConditions.javaScriptThrowsNoExceptions(string));

        //Czy javascript zwraca jakąś wartość?
        Object returnedValue = wait.until(ExpectedConditions.jsReturnsValue(string));
    }

    @Test
    void ramki() {

        //Czy ramka jest dostępna i można się na nią przełączyć?
        WebDriver frameContext1 = wait.until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(locator)); //podajac lokator
        WebDriver frameContext2 = wait.until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(2)); //podajac index ramki
        WebDriver frameContext3 = wait.until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(string)); //podajac nazwe albo id
        WebDriver frameContext4 = wait.until(ExpectedConditions.frameToBeAvailableAndSwitchToIt(webElement)); //podajac nazwe albo id

    }

    @Test
    void oknaPrzegladarkiIAlerty() {

        //Czy liczba okien przeglądarki jest równa podanej?
        boolean boolean1 = wait.until(ExpectedConditions.numberOfWindowsToBe(3));

        //Czy alert jest obecny
        Alert alert = wait.until(ExpectedConditions.alertIsPresent());
        alert.accept();
    }

    @Test
    void tytulStronyIURL() {

        //Czy tytuł zawiera podany tekst?
        boolean boolean1 = wait.until(ExpectedConditions.titleContains(string));

        //Czy tytuł jest taki sam jak podany tekst?
        boolean boolean2 = wait.until(ExpectedConditions.titleIs(string));

        //Czy adres url zawiera podany tekst?
        boolean boolean3 = wait.until(ExpectedConditions.urlContains(string));

        //Czy url jest taki jak podany tekst?
        boolean boolean4 = wait.until(ExpectedConditions.urlToBe(string));

        //Czy adres url odpowiada podanemu wyrażeniu regularnemu?
        boolean boolean5 = wait.until(ExpectedConditions.urlMatches(string));

    }

    @Test
    void laczenie() {

        // Łączenie warunków: koniunkcja
        Boolean boolean1 =
                wait.until(ExpectedConditions.and(ExpectedConditions.frameToBeAvailableAndSwitchToIt(locator), ExpectedConditions.alertIsPresent()));

        // Łączenie warunków: alternatywa
        Boolean boolean2 =
                wait.until(ExpectedConditions.or(ExpectedConditions.frameToBeAvailableAndSwitchToIt(locator), ExpectedConditions.alertIsPresent()));

        //Odświeżanie elementów - Wrapper na expected condition, pomagający uniknąć StaleElementException
        WebElement webElement1 = wait.until(ExpectedConditions.refreshed(ExpectedConditions.visibilityOfElementLocated(locator)));

        //Zaprzeczenie warunku: negacja
        Boolean boolean3 = wait.until(ExpectedConditions.not(ExpectedConditions.elementToBeClickable(locator)));

    }

}
