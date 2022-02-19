package EXTENSION;

public class EXTENSION {
    private int a;
    private int b;

    private int c;

    public void setA(int a) {
        this.a = a;
    }

    public void setB(int b) {
        this.b = b;
    }

    void add() {
        c = a + b;
    }

    void sub() {
        c = a - b;
    }

    public int getC() {
        return c;
    }

    void cleanC() {
        c = 0;
    }
}
