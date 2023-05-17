package JUnit;

import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertThrows;

class CoordinatesTest {

    @Test
    void coordinatesShouldBeSavedAfterSet() {
        //given
        Coordinates coordinates = new Coordinates(10, 20);
        //when
        int x = coordinates.getX();
        int y = coordinates.getY();
        //then
        assertThat(x, allOf(is(10), notNullValue()));
        assertThat(y, allOf(is(20), notNullValue()));

    }

    @Tag("exception")
    @ParameterizedTest
    @ValueSource(ints = {-1, 101})
    void exceptionShouldBeThrowXorYValueIsSmallerThenOrBiggerThen100(int value) {
        //then
        assertThrows(IllegalArgumentException.class, () -> new Coordinates(value, 1));
    }

    @Tag("exception")
    @ParameterizedTest
    @ValueSource(ints = {-1, 101})
    void exceptionShouldBeThrowYValueIsSmallerThen0rBiggerThen100(int value) {
        //then
        assertThrows(IllegalArgumentException.class, () -> new Coordinates(1, value));
    }

    @Tag("exception")
    @Test
    void exceptionMessageShouldBeProperlyIfValueIsSmallerThen0() {
        //given
        String message = null;
        //when
        try {
            Coordinates coordinates = new Coordinates(-5, 10);
        } catch (IllegalArgumentException e) {
            message = e.getMessage();
        }
        assertThat(message, equalTo("Position can not be less than 0"));
    }

    @Tag("exception")
    @Test
    void exceptionMessageShouldBeProperlyIfValueIsBiggerThen100() {
        //given
        String message = null;
        //when
        try {
            Coordinates coordinates = new Coordinates(5, 109);
        } catch (IllegalArgumentException e) {
            message = e.getMessage();
        }
        assertThat(message, equalTo("Position can not be more than 100"));
    }


    @Test
    void copiedCoordinatedShouldBeEqualToOriginalCoordinates() {
        //given
        Coordinates coordinates = new Coordinates(10, 30);
        //when
        Coordinates copiedCoordinates = Coordinates.copy(coordinates, 10, 29);
        //then
        assertAll(
                () -> assertThat(copiedCoordinates.getX(), is(20)),
                () -> assertThat(copiedCoordinates.getY(), is(59)),
                () -> assertThat(copiedCoordinates, not(sameInstance(coordinates)))
        );
    }

}