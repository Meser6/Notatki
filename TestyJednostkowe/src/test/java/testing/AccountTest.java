package testing;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class AccountTest {

    // Wywoływanie testów z poziomy terminala:
    //      mvn test - odpala wszystkie testy
    //      mvn -Dtest=Account test - odpala wszystkie testy z w klasie Account
    //      mvn -Dtest=Account,Main test - odpala wszystkie testy z w klasie Account i Main
    //      mvn Dtest-Account#accountIsDefauldInactive - odpala metode acc.. w klasie Account

    @Test
    void newAccountShouldBeNotActiveBeforeActivation() {
        //given
        Account account = new Account();

        //then
        assertFalse(account.isActive());

    }

    @Test
    void newAccountShouldBeNotActiveAfterActivation() {
        //given - wstepnę warunki testu.Tworzymy obiekty, ustawiamy stan początkowy , zaślepiamyich zależności
        Account account = new Account();
        //when  - wykonuje sie tu operacje ktore chemy przetestowac
        account.activate();
        //then - tu umieszczamy nasze assercje
        assertTrue(account.isActive());

        // Asercji w jednym teście może być kilka ale powinny one dotyczyć tylko jednej ścieżki wykonania
    }
}
