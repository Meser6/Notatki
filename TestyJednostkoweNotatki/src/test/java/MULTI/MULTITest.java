package MULTI;

import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertAll;

class MULTITest {

    @Test
        // Sprawdza czy którykolwiek z warunków jest spełniony.
        // Jeśli warunek nr 1 i 3 bedzie bledny to pokaze tylo nr 1
    void listShouldNotBeEmptyAfterAddNumber() {
        //given
        MULTI multi = new MULTI();
        //when
        multi.addNumberToList(9);
        //when
        assertThat(multi.getList(), anyOf(
                notNullValue(),
                hasSize(1),
                is(not(empty()))
        ));
    }

    @Test
        // Sprawdza czy wszystkie warunki sa spełnione.
    void listShouldNotBeEmptyAfterAddNumber2() {

        //given
        MULTI multi = new MULTI();
        //when
        multi.addNumberToList(9);
        //when
        assertThat(multi.getList(), allOf(
                notNullValue(),
                hasSize(1),
                is(not(empty()))
        ));
    }

    @Test
        //sprwadza czy wszystkie warunki sa spełnione
        // można sprawdzać różne rzeczy a nie tylko jedna jak wyżej
    void listShouldNotBeEmptyAfterAddNumber3() {
        //given
        MULTI multi = new MULTI();
        //when
        multi.addNumberToList(9);
        //when
        assertAll(
                () -> assertThat(multi.getList(), notNullValue()),
                () -> assertThat(multi.getList(), hasSize(1)),
                () -> {
                    multi.addNumberToList(11); //to wykonuje sie statycznie dla obiektu (bedize widoczne w kolejnych asercjach
                    assertThat(multi.getList(), hasSize(2));
                },
                () -> assertThat(multi.getList().get(0), equalTo(9)),
                () -> assertThat(multi.getList(), hasSize(2))
        );
    }
}
