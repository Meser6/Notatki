package ADNOTACJE;

import org.junit.jupiter.api.*;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

class ADNOTACJETest {

    ADNOTACJE adnotacje;
    // Poniższe adnotacje używamy zeby skrócić długość kodu

    @BeforeEach
        // W JUnit 4 - @Before
        //Wykonuje się przed każdym testem w tej klasie
    void start() {
        adnotacje = new ADNOTACJE();
    }

    @AfterEach
        // W JUnit 4 - @Before
        // Wykonuje się po każdym teściew tej klasie
    void clean() {
        adnotacje.cleanNumbers();
    }

    @BeforeAll // W JUnit 4 - @BeforeClass
    // Wykonuje się przed odpaleniem się pierwszego testu w tej klasie
    static void sayHello() { // Musi być statyczna
        System.out.println("So, it's begin");
    }

    @AfterAll // W JUnit 4 - @AfterClass
    //// Wykonuje się po zakończeniu wszystkich puszczonych testów w tej klasie
    static void sayGoodbye() { // Musi być statyczna
        System.out.println("Bye bye american pie");
    }

    @Test
    @Disabled
        // w Junit 4 - @Ignore
        // Ignoruje poniższy test.
        //Można też dodać przed klasą - wtedy nie wykona testów z całej klasy
    void thisTestShouldNotBeStared() {
        //given
        adnotacje.setNumbers(4, 5);
        //when
        int c = adnotacje.add();
        //then
        assertThat(c, equalTo(9));
    }

    @Test
    @DisplayName("Test - sub")
        // Przy podsumowaniu testów zamiast metody wyświetli wrzucony tekst
        // Można też dodać przed klasą - wtedy nie wykona testów z całej klasy
    void thisMethodNameIsIncorrect() {
        //given
        adnotacje.setNumbers(4, 1);
        //when
        int c = adnotacje.sub();
        //then
        assertThat(c, equalTo(3));
    }

    @Test
    void numbersShouldBeActualizedAfterSet() {
        //when
        adnotacje.setNumbers(4, 9);
        //then
        assertThat(adnotacje.getA(), equalTo(4));
        assertThat(adnotacje.getB(), equalTo(9));
    }

    @Test
    void afterCleaningNumbersShouldHaveZeroValue() {
        //when
        adnotacje.setNumbers(9, 5);
        adnotacje.cleanNumbers();
        //then
        assertThat(adnotacje.getA(), equalTo(0));
        assertThat(adnotacje.getB(), equalTo(0));
    }


}