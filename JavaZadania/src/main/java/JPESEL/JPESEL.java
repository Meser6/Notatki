package JPESEL;

public class JPESEL {
    /*
    https://pl.spoj.com/problems/JPESEL/

Jan Kowalski musi wpisać do systemu szpitalnego dane osobowe pacjenta, oprócz imienia i nazwiska musi również wpisać
PESEL pacjenta. Jakież było jego zdziwienie, gdy spostrzegł, że pewnych pacjentów system nie przyjmował z powodu wadliwego PESELu.

Twoim zadaniem jest sprawdzenie, czy podana liczba 11-cyfrowa jest poprawnym PESELem.

Aby sprawdzić czy dany PESEL jest prawidłowy należy wykonać następujące działania:

Pierwszą cyfrę mnożymy przez 1,
drugą cyfrę mnożymy przez 3,
trzecią cyfrę mnożymy przez 7,
czwarta cyfrę mnożymy przez 9,
piątą cyfrę mnożymy przez 1,
szóstą cyfrę mnożymy przez 3,
siódmą cyfrę mnożymy przez 7,
ósmą cyfrę mnożymy przez 9,
dziewiątą cyfrę mnożymy przez 1,
dziesiątą cyfrę mnożymy przez 3,
jedenastą cyfrę mnożymy przez 1.

Tak uzyskane 11 iloczynów dodajemy do siebie. Jeśli ostatnia cyfra tej sumy jest zerem to podany PESEL jest prawidłowy. Przykład dla numeru PESEL 44051401458

4*1 + 4*3 + 0*7 + 5*9 + 1*1 + 4*3 + 0*7 + 1*9 + 4*1 + 5*3 + 8*1 = 4 + 12 + 0 + 45 + 1 + 12 + 0 + 9 + 4 + 15 + 8 = 110

Źródło: www.wikipedia.pl

Jeśli suma jest większa od zera, wtedy sprawdzamy jej poprawność. W przeciwnym przypadku nr PESEL jest błędny. Ponieważ ostatnia cyfra liczby 110 jest zerem więc podany PESEL jest prawidłowy.

Na wejściu podana jest w pojedyńczej linii ilość t<=100 numerów PESEL do sprawdzenia. W kolejnych t liniach są 11-cyfrowe liczby.

Output
W pojedyńczej linii powinna zostać wyświetlona litera D, jeśli numer PESEL jest poprawny lub N, gdy nie.
     */

    public static void main(String[] args) {
        long psl = 95442110l;
        boolean dupa = isCorect(psl);
        System.out.println(dupa);
    }


    static boolean isCorect(long pesel) {
        final int[] multiper = {1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 7};
        int sum = 0;
        int[] numbers = list(pesel);

        for (int i = 0; i < 11; i++) {
            sum += numbers[i] * multiper[i];
        }
        return sum % 10 == 0;
    }

    static int[] list(long pesel) {
        int[] list = new int[11];
        String peselString = String.valueOf(pesel);

        for (int i = 0; i < 11; i++) {
            char znak = peselString.charAt(i);
            int cyfra = Character.getNumericValue(znak);
            list[i] = cyfra;
        }
        return list;
    }


    void przyklad() {
        int liczba = 1234567890;
        String napis = String.valueOf(liczba);
        int suma = 0;
        int ileCyfr = napis.length();
        for (int i = 0; i < ileCyfr; i++) {
            char znak = napis.charAt(i);
            int cyfra = Character.getNumericValue(znak);
            suma = suma + cyfra;
        }
        System.out.println("Suma wszystkich cyfr to: " + suma);
    }
}
