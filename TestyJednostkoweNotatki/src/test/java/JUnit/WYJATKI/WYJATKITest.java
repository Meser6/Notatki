package JUnit.WYJATKI;

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
        JUnit.WYJATKI wyjatki = new JUnit.WYJATKI();
        //then
        assertDoesNotThrow(IllegalArgumentException.class, () -> wyjatki.setA(90));
    }
    NIE MAM POJECIA CZEMU NIE DZIALA
 */

    /* JUnit 4 - składnia byłay trochę inna

    @Test (expected = IllegalArgumentException.class)
    void expectionShouldBeThrowIfAIsHigherThen1002222() {
        //given
        JUnit.WYJATKI wyjatki = new JUnit.WYJATKI();
        //when
        wyjatki.setA(110);
    } */


}