import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assumptions.assumingThat;

public class TESTOWANIETest {

    // Aby stworzyć nową klasę testową do stworzonej wcześniej klasy można najechać na nazwę tej drugiej
    // i skorzysać ze skrtóu Ctrl + Shift + T. Zostanie stworzona klasa z dopiskiem Test i ścieżką do niej


    // Wywoływanie testów z poziomy terminala:
    //      mvn test - odpala wszystkie testy
    //      mvn -Dtest=Account test - odpala wszystkie testy z w klasie Account
    //      mvn -Dtest=Account,Main test - odpala wszystkie testy z w klasie Account i Main
    //      mvn Dtest-Account#accountIsDefauldInactive - odpala metode acc.. w klasie Account

    //Hamcrest / assertJ - są to bibiolteki która zmieniaja składnie assercji aby byla ona bardziej przejrzysta
    // Składnia - assertThat(sprawdzany obiekt, metoda matcherowa)
    // Jeżel są dwie assercje to hamcrestowa bedzie podana poniżej.
    // http://hamcrest.org/JavaHamcrest/javadoc/2.1/ - lista matcherów


    @Test
    void newAccountShouldBeNotActiveBeforeActivation() {
        //given
        TESTOWANIE account = new TESTOWANIE();
        //then
        assertFalse(account.isActive());
        assertThat(account.isActive(), equalTo(false)); // sprawdz czy isActive równa sie false
        assertThat(account.isActive(), is(false)); // sprawdz czy isActive jest falsem
    }

    @Test
    void newAccountShouldBeActiveAfterActivation() {
        // Podane poniżej opisy są zgodnę z konwencją JDD.
        //given - wstepnę warunki testu.Tworzymy obiekty, ustawiamy stan początkowy , zaślepiamyich zależności
        TESTOWANIE account = new TESTOWANIE();
        //when  - wykonuje sie tu operacje ktore chemy przetestowac
        account.activate();
        //then - tu umieszczamy nasze assercje
        assertTrue(account.isActive());
        assertThat(account.isActive(), is(true));
    }

    @Test
        // Asercji w jednym teście może być kilka ale powinny one dotyczyć tylko jednej ścieżki wykonania
        // podany przykład jest błędny na co może wskazywać już sama nazwa
    void newAccountShouldBeNotActiveAfterActivationAndActiveAfterActivation() {
        //given
        TESTOWANIE testowanie = new TESTOWANIE();
        // then?
        assertFalse(testowanie.isActive()); // nie ma sensu tego testowac bo ta ścieżke sprawdzilismy w 1 tescie
        //when
        testowanie.activate();
        //then
        Assertions.assertTrue(testowanie.isActive());
    }

    //-----------------------------------------------------------

    @Test
        // Jeżeli assumption jest true, sprawdź assercje
    void accountShouldBeActiveAfterActivate() {
        //given
        TESTOWANIE testowanie = new TESTOWANIE();
        //when
        testowanie.activate();
        //then
        assumingThat(testowanie.isActive() != false, () -> assertTrue(testowanie.isActive()));
    }

    @Test
        // spradź czy zawiera XXX
    void nameShouldContainsCake() {
        //given
        TESTOWANIE testowanie = new TESTOWANIE();
        //when
        testowanie.setName("XXXcakePPP");
        //then
        assertThat(testowanie.getName(), containsString("cake"));
    }

    @Test
        // sprawdź czy kończy się na XXX
    void nameShouldEndsWithPPP() {
        //given
        TESTOWANIE testowanie = new TESTOWANIE();
        //when
        testowanie.setName("cakePPP");
        //then
        assertThat(testowanie.getName(), endsWith("PPP"));
    }

}
