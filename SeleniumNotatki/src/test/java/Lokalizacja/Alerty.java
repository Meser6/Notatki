package Lokalizacja;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

public class Alerty {

    //Alerty to okienka które wyskakują po danej akcji (np zgoda na lokalizacje albo wysyłanie powiadomień
    /*
    Są ich 3 typu;
    alert - z przyciskiem OK
    confirm - z przyciskami OK i CANCEL
    prompt - z tekstem do wpisania, przyciskiem OK i CANCEL
     */

    WebDriver driver;

    @Test
    void aletry() {

        //przełączenie się na okienko alertu
        driver.switchTo().alert();

        //Kliknięcie OK
        driver.switchTo().alert().accept();

        //Kliknięcie CANCEL
        driver.switchTo().alert().dismiss();

        //Pobranie tekstu alertu
        driver.switchTo().alert().getText();

        //Wpisanie jakichs wartości do alertu typu prompt
        //Na chrome wysłane wartosci nie wiadc jako rzewcziscie wspisane ale one tam sa
        driver.switchTo().alert().sendKeys("xxx");

    }
}
