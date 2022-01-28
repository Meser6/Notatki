package Equals;

import java.util.Objects;

public class Cat {
    String imie;
    RasaKota rasa;
    int wiek;

    public Cat(String imie, RasaKota rasa, int wiek) {
        this.imie = imie;
        this.rasa = rasa;
        this.wiek = wiek;
    }

    @Override // Najłatwiej wygenerowac automatycznie
    public boolean equals(Object o) {
        if (this == o) return true; // tu sprawdzamy czy nie porownujemy dwóch tych samych obiektów
        if (o == null || getClass() != o.getClass())
            return false; // jeżeli obiekt do ktorego porównujemy jest pusty albo obiekty porównywane sa roznego typu
        Cat cat = (Cat) o; // skoro doszlo to tego to sa takiego samego typu a wiec mozemyu wykonac rzutowanie
        return wiek == cat.wiek && Objects.equals(imie, cat.imie) && rasa == cat.rasa; // tu porównujemy zadane parametry

    }

    @Override
    public int hashCode() {
        return Objects.hash(imie, rasa, wiek);
    }
}
