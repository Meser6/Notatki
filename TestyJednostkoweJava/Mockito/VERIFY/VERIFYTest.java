package Mockito.VERIFY;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.mockito.InOrder;

import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.then;
import static org.mockito.Mockito.*;

class VERIFYTest {

    //metoda verify() słyży do sprawdzenia czy w naszym moku została(lub nie) wywołana dana metoda

    @ParameterizedTest
    @ValueSource(ints = {70, 130})
        // sprawdź czy dana metoda sendMessage() została wywołana
    void messageShouldBeSendingIfValueIsCorrect(int value) {
        //given
        Ints ints = mock(Ints.class);
        given(ints.getInts()).willReturn(value);
        setBooleanToSmallerThenTen(ints, value);
        VERIFY verify = new VERIFY(ints);
        //when
        verify.instructions();
        //then
        verify(ints).sendMessage();
        then(ints).should().sendMessage(); //- alternatywny zapis /\
    }

    @Test
        // sprawdź czy dana metoda deleteSystem()nie została wywołana
    void systemShouldNotBeDeleted() {
        //given
        Ints ints = mock(Ints.class);
        VERIFY verify = new VERIFY(ints);
        //when
        //then
        verify(ints, never()).deleteSystem();
        then(ints).should(never()).deleteSystem(); //- alternatywny zapis /\
    }

    @Test
        // sprawdź czy metoda została wywołana X razy
    void messageShouldNotBeSendingTwoTimesIfValueIsSmallerThen50() {
        //given
        int i = 49;
        Ints ints = mock(Ints.class);
        given(ints.getInts()).willReturn(i);
        given(ints.smallerThen100()).willReturn(true);
        VERIFY verify = new VERIFY(ints);
        //when
        verify.instructions();
        //then
        verify(ints, times(2)).doNotSendMessage(); // sprawdź czy metoda została wywołana X razy
        verify(ints, atLeast(1)).doNotSendMessage(); // sprawdź czy metoda została wywołana mimimum X razy
        verify(ints, atMost(2)).doNotSendMessage(); // sprawdź czy metoda została wywołana maximum X razy
        verify(ints, atLeastOnce()).doNotSendMessage(); // sprawdź czy metoda została wywołana minimum 1 raz
        //verify(ints, atMostOnce()).doNotSendMessage(); // sprawdź czy metoda została wywołana maximum 1 raz
    }

    @Test
        //sprawdz czy metody wykonaja się w takiej kolejności (pomiedzy nimi moga byc tez inne)
    void metodShouldBeTriggeredInCorrectOrder() {
        //given
        Ints ints = mock(Ints.class);
        given(ints.getInts()).willReturn(155);
        given(ints.smallerThen100()).willReturn(false);
        VERIFY verify = new VERIFY(ints);
        //when
        verify.instructions();
        //then
        InOrder inOrder = inOrder(ints);
        inOrder.verify(ints).sendMessage();
        inOrder.verify(ints).doNotSendMessage();
    }

    void setBooleanToSmallerThenTen(Ints ints, int i) {
        if (i < 100) {
            given(ints.smallerThen100()).willReturn(true);
        } else {
            given(ints.smallerThen100()).willReturn(false);
        }
    }
}