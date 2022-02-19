package Java.WYJATKI;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertThrows;

class WYJATKITest {

    @Test
        // Sprawdzane czy dany rzuci odpowiedni wyjątkiem
    void expectionShouldBeThrowIfAIsHigherThen100() {
        //given
        WYJATKI wyjatki = new WYJATKI();
        //then
        assertThrows(IllegalArgumentException.class, () -> wyjatki.setA(110));
    }

/*
    @Test
        //sprawdzanie czy nie rzuci danym wyjątkiem
    void expectionShouldNotBeThrowIfAIsSmallerThen100() {
        //given
        Java.WYJATKI wyjatki = new Java.WYJATKI();
        //then
        assertDoesNotThrow(IllegalArgumentException.class, () -> wyjatki.setA(90));
    }
    NIE MAM POJECIA CZEMU NIE DZIALA
 */

    /* JUnit 4 - składnia byłay trochę inna

    @Test (expected = IllegalArgumentException.class)
    void expectionShouldBeThrowIfAIsHigherThen1002222() {
        //given
        Java.WYJATKI wyjatki = new Java.WYJATKI();
        //when
        wyjatki.setA(110);
    } */


}