package WYJATKI;

public class WYJATKI {

    private int a;

    public int getA() {
        return a;
    }

    public void setA(int a) {
        if (a > 100) {
            throw new IllegalArgumentException("a must be smaller then 100");
        }
        this.a = a;
    }
}
