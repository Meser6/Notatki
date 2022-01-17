package Dziedziczenie.Podstawy;

abstract public class Dacia extends Samochod { // Klasa która posiada przynajmniej jedną metode abstrakcyjna też musi być astrakcyjna

    Dacia(String rodzajPaliwa) {
        super(rodzajPaliwa);
    }


    /* Metody abstrakcyjne 1/2

     Metory abstrakcyjne MUSZĄ być wywołane w każdej klasie dziecku chociaż jeden raz.
     Przy jej tworzeniu nie można ustawić jej ciała. musi być pusta i sluzy jako szkielet z nazwa i zmiennymi.
     */
    abstract void klakson(int glosnosc);
}
