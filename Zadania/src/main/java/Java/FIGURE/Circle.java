package Java.FIGURE;

public class Circle implements FigureInterface {
    double r;

    Circle(double r) {
        this.r = r;
    }

    @Override
    public double getPerimeter() {
        return 2 * Math.PI * r;
    }

    @Override
    public double getArea() {
        return Math.PI * r * r;
    }
}
