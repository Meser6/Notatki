import java.util.Objects;

public class ROWNOSCI {

    private int number;

    public ROWNOSCI(int number) {
        this.number = number;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    void sub(int number) {
        this.number -= number;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ROWNOSCI rownosci = (ROWNOSCI) o;
        return number == rownosci.number;
    }

    @Override
    public int hashCode() {
        return Objects.hash(number);
    }
}
