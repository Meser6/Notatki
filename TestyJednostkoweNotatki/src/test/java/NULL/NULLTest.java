package NULL;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.notNullValue;
import static org.hamcrest.Matchers.nullValue;

class NULLTest {

    @Test
        //Sprawdzenie czy dana wartość jest nullem
    void defaultNullsColorShouldBeNull() {
        //given
        NULL nullik = new NULL();
        //then
        Assertions.assertNull(nullik.getColor()); // czy dana wartość jest nullem
        // Przyjmuje: Sprawdzany obiekt/wartosć
        assertThat(nullik.getColor(), nullValue());
    }

    @Test
        //Sprawdzanie czy dana wartość nie jest nullem
    void nullsColorShouldNotBeNullAfterSet() {
        //given
        Color color = new Color("White");
        NULL nullik = new NULL();
        //then
        nullik.setColor(color);
        //then
        Assertions.assertNotNull(nullik.getColor()); // czy dana wartość nie jest nullem
        // Przyjmuje: Sprawdzany obiekt/wartosć
        assertThat(nullik.getColor(), notNullValue());
    }

}