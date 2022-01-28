package POROWNANIE;

import java.util.Objects;

public class Human {
    private final String imie;
    private final String nazwisko;
    private final long pesel;

    public Human(String imie, String nazwisko, long pesel) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.pesel = pesel;
    }

    public String getImie() {
        return imie;
    }

    public String getNazwisko() {
        return nazwisko;
    }

    public long getPesel() {
        return pesel;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Human human = (Human) o;
        return pesel == human.pesel;
    }

    @Override
    public int hashCode() {
        return Objects.hash(imie, nazwisko, pesel);
    }
}
