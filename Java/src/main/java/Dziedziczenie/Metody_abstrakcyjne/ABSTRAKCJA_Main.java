package Dziedziczenie.Metody_abstrakcyjne;

public class ABSTRAKCJA_Main {

    public static void main(String[] args) {

        Kon kon = new Kon(true, false);


        // Możemy również zrobić obiekt bezposrenio z klasy abstrakcyjnej, jednak wówczas w jego ciele musimy wykorzystac metowy abstrakcyjne

        Zwierze zwierze = new Zwierze() {
            @Override
            void stoj(boolean bat) {
            }

            @Override
            void jedz() {
            }
        };

        // do niebstrakcyjnych metod możemy dostać się zarówno z obiektu abstrakcyjnego rdzoica, jak i nieabstrakcyjnego dziecka

        kon.zjedzOwsa(30);
        zwierze.zjedzOwsa(50);

        // Jeżeli klasa abstrakcyjna jest dzieckiem innej klasy abstrakcyjnej to nie trzeba w niej nadpisywac metod z rodzica
        // trzeba to dopiero zrobić gdy wywołamy ta pierwsza klase bądż jej dziecko.
        //Oczywiscie mozemy do tego dziecka dopisywac nowe metody abstrakcyjne i poszeszrzac zasob
    }
}
