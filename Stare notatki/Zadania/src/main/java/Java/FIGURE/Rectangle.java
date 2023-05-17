package Java.FIGURE;

public class Rectangle implements FigureInterface {

    double a;
    double b;

    Rectangle(double a, double b) {
        this.a = a;
        this.b = b;
    }

    @Override
    public double getPerimeter() {
        return 2 * a + 2 * b;
    }

    @Override
    public double getArea() {
        return a * b;
    }
}
