package FIGURE;

public class Triangle implements FigureInterface {
    double h;
    double a;

    Triangle(double h, double a) {
        this.h = h;
        this.a = a;
    }

    @Override
    public double getPerimeter() {
        return a + h + c(h, a);
    }

    @Override
    public double getArea() {
        return (a * h) / 2;
    }

    private double c(double h, double a) {
        return Math.sqrt((Math.pow(h, 2)) + Math.pow(a, 2));
    }
}
