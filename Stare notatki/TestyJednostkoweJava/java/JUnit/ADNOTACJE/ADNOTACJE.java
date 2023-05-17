package java.JUnit.ADNOTACJE;

public class ADNOTACJE {
    private int a;
    private int b;

    public void setNumbers(int a, int b) {
        this.a = a;
        this.b = b;
    }

    public int add() {
        return a + b;
    }

    public int sub() {
        return a - b;
    }

    public void cleanNumbers() {
        a = 0;
        b = 0;
    }

    public int getA() {
        return a;
    }

    public int getB() {
        return b;
    }
}
