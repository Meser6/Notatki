package Mockito.MOCKITO;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.hasSize;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.mock;

class MOCKITOTest {
    //Mocki służą jako zaślepki klas/serwisów.
    // Jeśli jedna korzysta z drugiej (np. do pozyskania danych) to możemy tą drugą zmockować i wrzucić własne dane

    @Test
    void filterSmallerThenTenShouldAddToListValuesSmallerThenTenOnly() {
        //given
        List<Integer> IDsList = prepareIDs(); // wlatują przykładowe dane z metody pomocniczej
        IDList idList = mock(IDList.class); // Inicjalizujemy mocka i przekazujemy jaką klasę ma udawać
        MOCKITO mockito = new MOCKITO(idList);
        given(idList.getAllIDs()).willReturn(IDsList); // tutaj tak na prawdę inicjalizujemy mocka
        //jeśli na danym obiekcie zostanie wywolana ta metoda to zrob to i to
        //when(idList.getAllIDs()).thenReturn(prepareIDs()); //- alternatywny zapis /\
        //when
        mockito.filterAllIntsSmallerThenValue(10);
        List<Integer> listToCheck = mockito.getIDSmallerThenValue();
        //then
        assertThat(listToCheck, hasSize(2));
    }

    @Test
        // różne zestawy danych
    void filterSmallerThenTenShouldAddToListValuesSmallerThenTenOnly2() {
        //given
        List<Integer> IDsList = prepareIDs();
        List<Integer> IDsList2 = Arrays.asList(4, 5, 6);
        IDList idList = mock(IDList.class);
        MOCKITO mockito = new MOCKITO(idList);
        given(idList.getAllIDs()).willReturn(IDsList, IDsList2);
        // za pierwszym razem gdy zostanei wywołana te metoda to zwroc 1 wartość, za 2 druga itd.
        //when
        mockito.filterAllIntsSmallerThenValue(10);
        List<Integer> listToCheck = mockito.getIDSmallerThenValue();
        //then
        assertThat(listToCheck, hasSize(2));
    }

    @Test
        // sprawdź czy zostanie rzucony wyjątek
    void exceptionShouldBeThrowAfterUsingGetAllIdsMethod() {
        //given
        IDList idList = mock(IDList.class);
        given(idList.getAllIDs()).willThrow(IllegalArgumentException.class);
        // jeśli na danym obiekcie zostanie wywolana ta metoda to rzuć wyjatek
        //when
        //then
        assertThrows(IllegalArgumentException.class, () -> idList.getAllIDs());
    }

    @Test
        // Jeżeli źle zaimplementujemy mocka i nie przekażemy do niego żadnych wartości to przyjmie on defultowe (Nice mock)
        // np/ 0, "", '', null, false, pusta kolekcje
    void listShouldZeroSizeIfMockIsNotImplement() {
        //given
        IDList idList = mock(IDList.class);
        MOCKITO mockito = new MOCKITO(idList);
        //when
        mockito.filterAllIntsSmallerThenValue(5);
        List<Integer> list = mockito.getIDSmallerThenValue();
        //then
        assertThat(list, hasSize(0));
    }

    private List<Integer> prepareIDs() {
        int a = -1;
        int b = 5;
        int c = 15;
        return Arrays.asList(a, b, c);
    }
}