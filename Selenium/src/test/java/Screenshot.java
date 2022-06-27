import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInfo;
import org.junit.jupiter.api.extension.RegisterExtension;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.io.FileHandler;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class Screenshot {

    //W przypadku NIE przejscia testu zrobi screenshot i zapisze w danym miejscu
    //W nazwie bedzie nazwa testu i data
    //W konsolce dalego testu bedzie info gdzie sie zapisalo

    //Potrzebna klasa pomocnicza main/java/ScreenShotHelper.class

    WebDriver driver;

    @RegisterExtension
    ScreenshotHelper status = new ScreenshotHelper();

    @AfterEach
    public void driverQuit(TestInfo info) throws IOException {
        if (status.isFiled) {
            System.out.println("Test screenshot is availabe at: " + takeScreenshot(info));
        }
    }

    @Test
    void someTest() {
        driver.findElement(By.cssSelector("xx"));
        assertThat(0, equalTo(1));
    }

    //Zrobienie screena całej widocznej strony
    private String takeScreenshot(TestInfo info) throws IOException {
        File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        LocalDateTime timeNow = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyy HH-mm-ss");
        String path = "C:\\screenshots\\" + info.getDisplayName() + " " + formatter.format(timeNow) + ".jpg";
        FileHandler.copy(screenshot, new File(path));
        return path;
    }

    /*
    jeśli chemy zrobic screena daneg elementu to wystarczy
    WebElement element;
    File screenshot = element.getScreenshotAs(OutputType.FILE);
    FileHandler.copy(screenshot, new File("C:\\screenshots\\elementName.jpg"));
    */
}
