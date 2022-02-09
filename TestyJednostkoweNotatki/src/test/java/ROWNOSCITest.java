import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

class ROWNOSCITest {

    @Test
        // Porównywanie czy dwie wartości typu prostego są takie same
    void subtractionShouldWorksCorrect() {
        // given
        ROWNOSCI rownosci = new ROWNOSCI(100);
        //when
        rownosci.sub(15);
        //then
        Assertions.assertEquals(85, rownosci.getNumber()); // czy wartości są takie same
        // Przyjmuje: Oczewkiwana wartość, sprawdzana wartość
        assertThat(rownosci.getNumber(), equalTo(85));
    }

    @Test
        //Porównanie czy dwie wartości typu prostego sa różne
    void numberAfterSettingShouldBeDifferent() {
        //given
        ROWNOSCI rownosci = new ROWNOSCI(100);
        //when
        rownosci.setNumber(50);
        //then
        Assertions.assertNotEquals(100, rownosci.getNumber()); // czy wartości są różne
        // Przyjmuje: Oczewkiwana wartość, sprawdzana wartość
        assertThat(rownosci.getNumber(), not(equalTo(100)));
    }

    @Test
        //Porównanie czy referencja do różnych obiektów ale tego samego typu jest inna
        // Aby ta assercja zadziałała trzeba nadpisać metodę equals() aby sprawdzała po parametrach, nie po referencji
    void twoDifferentObjectWithTheSameParametersShouldBeEquals() {
        //given
        ROWNOSCI rownosci = new ROWNOSCI(100);
        ROWNOSCI rownosci2 = new ROWNOSCI(100);
        //then
        Assertions.assertEquals(rownosci, rownosci2); // czy parametry obiektów są takie same
        // Przyjmuje: Pierwszy obiekt, drugi obiekt
        assertThat(rownosci, equalTo(rownosci2));

    }

    @Test
        // Porównywanie czy referencja(ścieżka do obiektu, jego adres) jest ten sam
    void referenceToTheSameObjectShouldBeEquals() {
        //given
        ROWNOSCI rownosci = new ROWNOSCI(100);
        ROWNOSCI rownosci2 = rownosci;
        //then
        Assertions.assertSame(rownosci, rownosci2); // czy referencje do obiektów są takie same
        // Przyjmuje: Pierwszy obiekt, drugi obiekt
        assertThat(rownosci, sameInstance(rownosci2));
    }

    @Test
        //Porównanie czy referencja do różnych obiektów ale tego samego typu jest inna
    void referenceToDifferentObjectShouldNotBeEquals() {
        //given
        ROWNOSCI rownosci = new ROWNOSCI(100);
        ROWNOSCI rownosci2 = new ROWNOSCI(100);
        //then
        Assertions.assertNotSame(rownosci, rownosci2); // czy referencje do obiektów są różne
        // Przyjmuje: Pierwszy obiekt, drugi obiekt
        assertThat(rownosci, not(sameInstance(rownosci2)));
    }
}