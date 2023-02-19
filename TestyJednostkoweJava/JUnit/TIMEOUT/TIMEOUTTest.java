package JUnit.TIMEOUT;

import org.junit.jupiter.api.Test;

import java.time.Duration;

import static org.junit.jupiter.api.Assertions.assertTimeout;

class TIMEOUTTest {


    @Test
        // W Junit 4 wpisuje sie koło @test (timeout = 20)
        // Sprawdzenie czy wykona się w dany czas. jesli dłużej bedzie faild
    void thereShouldBeGenerate1000AinMax20msc() {
        //given
        TIMEOUT timeout = new TIMEOUT();
        //then
        assertTimeout(Duration.ofMillis(20), () -> timeout.simulate(1000));

    }
    /*
        Duration.ofDays();
        Duration.ofHours();
        Duration.ofMinutes();
        Duration.ofSeconds();
        Duration.ofMillis();
        Duration.ofNanos();
     */


}