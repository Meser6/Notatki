package PARAMETR;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.*;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

class PARAMETRTest {

    @ParameterizedTest
    @ValueSource(ints = {3, 4, -10})
        // sprawdź czy assercja przejdzie dla podanych wartości (można podać int/long/double lub String)
    void booleanShouldBeTrueIfValueIsSmallerThenFive(int value) {
        //given
        PARAMETR parametr = new PARAMETR(Colors.WHITE, value);
        //then
        assertThat(parametr.getIsSmallerThen5(), is(true));
    }

    @ParameterizedTest
    @EnumSource(Colors.class)
        // Można podać pojedyńcze enumu np. Colors.WHITE
        // sprawdź czy assercja przrejdzie dla podanych enumów
    void allColorsShouldBeShortedThenTen(Colors color) {
        //given
        PARAMETR parametr = new PARAMETR(color, 10);
        //then
        assertThat(parametr.getColors().toString().length(), lessThan(10));
    }

    @ParameterizedTest
    @MethodSource("createSomeObjects")
        // sprawdź czy assercja przechodzi dla obiektów/argumentów stworzonych w metodzie XXX
    void numbersShouldNotNullValue(Colors color, int number) {
        //given
        PARAMETR parametr = new PARAMETR(color, number);
        //then
        assertThat(parametr.getColors(), notNullValue());
        assertThat(parametr.getIsSmallerThen5(), is(true));
    }

    private static Stream<Arguments> createSomeObjects() { // przykład metody wykorzystanej wyżej
        return Stream.of(
                Arguments.of(Colors.WHITE, 1),
                Arguments.of(Colors.BLUE, 2)
        );
    }

    @ParameterizedTest
    @MethodSource("createSameValues")
        // sprawdź czy assercja przechodzi dla wartości/obiektów z metody XXX
    void booleanShouldBeFalseIfValueIsBiggerThenFive(int number) {
        //given
        PARAMETR parametr = new PARAMETR(Colors.WHITE, number);
        //then
        assertThat(parametr.getIsSmallerThen5(), is(false));
    }

    private static Stream<Integer> createSameValues() { // przykład metody wykorzystanej wyżej
        List<Integer> list = Arrays.asList(10, 20, 30, 40);
        return list.stream();
    }

    @ParameterizedTest
    @CsvSource({"XXX, 5", "YYY, 10", "'yy,xx', 15"})
        // sprawdź czy assercja przejdzie dla podanego zestawu wartości
        // wartości są wrzucane do parametrów. każdy parametr jest oddzielony przecinkiem
        // jeżeli chcemy wysłać przecinek w argumencie to trzeba go "zneutralizować" apostrofami np. 'xx,ss'
    void nameLengthShouldBeShortenThenNineChars(String name, int number) {
        //given
        PARAMETR parametr = new PARAMETR(name, number);
        //then
        assertThat(parametr.getName().length(), lessThan(9));
    }

    @ParameterizedTest
    @CsvFileSource(resources = "/ParametrSource.csv")
        // ścieżka do pliku (o ile jest projekcie)
        // sprawdź czy assercja przejdzie dla wartości podanych w pliku csv.
        // wartości podaje się oddzielnie w linijkach, oddzielające je przecinkiem
        // nie podajemy zestawów w cudzysłowiu
        // jeżeli chcemy wysłać przecinek w argumencie to trzeba go "zneutralizować" cudzysłowem np. "xx,ss"
    void nameLengthShouldBeShorterThenTenChars(String name, int number) {
        //given
        PARAMETR parametr = new PARAMETR(name, number);
        //then
        assertThat(parametr.getName().length(), lessThan(10));
    }

}