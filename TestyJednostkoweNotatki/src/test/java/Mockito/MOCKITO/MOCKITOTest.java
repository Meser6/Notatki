package Mockito.MOCKITO;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.hasSize;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

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
        //when(idList.getAllIDs()).thenReturn(prepareIDs()); - alternatywny zapis /\
        //when
        mockito.filterAllIntsSmallerThenValue(10);
        List<Integer> listToCheck = mockito.getIDSmallerThenValue();
        //then
        assertThat(listToCheck, hasSize(2));
    }

    @Test
    void listShouldBeEmptyIfIDLIstIsEmpty(){
        //given
        IDList idList = mock(IDList.class);
        MOCKITO mockito = new MOCKITO(idList);
        given(idList.getAllIDs()).willReturn(Collections.emptyList()); // Można przekazywac dowolne rzeczy, nie tylko przygotowane metody
        //when
        mockito.filterAllIntsSmallerThenValue(100);
        List<Integer> listToCheck = mockito.getIDSmallerThenValue();
        //then
        assertThat(listToCheck, hasSize(0));

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