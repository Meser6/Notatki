package Equals;

import java.util.Objects;

public class Dog {
    String imie;
    RasaPsa rasa;
    int wiek;

    public Dog(String imie, RasaPsa rasa, int wiek) {
        this.imie = imie;
        this.rasa = rasa;
        this.wiek = wiek;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Dog dog = (Dog) o;
        return Objects.equals(imie, dog.imie) && rasa == dog.rasa;
    }

    @Override
    public int hashCode() {
        return Objects.hash(imie, rasa);
    }
}
