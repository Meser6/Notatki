package EXTENSION;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.AfterAllCallback;
import org.junit.jupiter.api.extension.ExtendWith;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@ExtendWith(TestExecutionExceptionHandler.class) // przed każdym testem będzie wywoływał się callback z tej klasy.
class EXTENSIONTest {

    // Extensiony uzywamy gdy chcemy rozszerzyć nasze testy o dodatkowe funkcjonalności. Możemy je dowolnie wywoływać na
    // rzecz calej klasy lub pojedyńczego testu
    // Swoje własne Ectensiony tworzymy poprzez stworzenie odpowiedniej klasy implementujacej odpowiedni interfejs

    /* Schemat wywoływania:
    BeforeAllCallback
        @BeforeAll
            BeforeEachCallback
                @BeforeEach
                    BeforeTestExecutionCallback
                        @Test
                        TestExecutionExceptionHandler
                    AfterTestExecutionCallback
                @AfterEach
            AfterEachCallback
        @AfterAll
    AfterAllCallback
     */

   static EXTENSION extension;


    @BeforeAll
    @ExtendWith(BeforeAllCallback.class)
    static void createNewObject() {
        extension = new EXTENSION();
        extension.setA(10);
        extension.setB(5);
    }

    @ExtendWith(AfterAllCallback.class)
    @AfterAll
    static void cleanResult() {
        extension.cleanC();
    }

    @ExtendWith(BeforeTestExecutionCallback.class)
    @Test
    void resultShouldBeProperlyAfterAdd() {
        //when
        extension.add();
        //then
        assertThat(extension.getC(), is(15));
    }

    @ExtendWith(AfterTestExecutionCallback.class)
    @Test
    void resultShouldBeProperlyAfterSub() {
        //when
        extension.sub();
        //then
        assertThat(extension.getC(), is(5));
    }

    @ExtendWith({BeforeTestExecutionCallback.class, AfterTestExecutionCallback.class})
    // można wywołać więcej niż jeden callback.
    @Test
    void resultShouldBe0AfterCleaning() {
        //when
        extension.cleanC();
        //then
        assertThat(extension.getC(), is(0));
    }

}