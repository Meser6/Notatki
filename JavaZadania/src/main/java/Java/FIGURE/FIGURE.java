package Java.FIGURE;

import java.util.Scanner;

public class FIGURE {
    /*
    Stwórz interfejs Figure. Interfejs powinien zawierać metody getPerimeter (zwracającą obwód) oraz getArea
    (zwracającą powierzchnię). Następnie utwórz klasy Circle, Triangle i Rectangle, niech każda z klas implementuje
     interfejs Figure. Napisz program, który pobierze od użytkownika:
długość promienia koła,
2 długości boków trójkąta prostokątnego (boki przy kącie prostym),
długość boków prostokąta.
Utworzy instancje tych obiektów i umieści je w tablicy Figure[]. Następnie iterując po obiektach wyświetl pole
oraz obwód aktualnego obiektu.
     */
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        FigureInterface[] figureInterfaces = new  FigureInterface[3];

        System.out.println("rectangle: ");
        Rectangle rectangle = new Rectangle(scanner.nextDouble(), scanner.nextDouble());
        System.out.println("circle: ");
        Circle circle = new Circle(scanner.nextDouble());
        System.out.println("triangle: ");
        Triangle triangle = new Triangle(scanner.nextDouble(), scanner.nextDouble());

        figureInterfaces[0] = rectangle;
        figureInterfaces[1] = circle;
        figureInterfaces[2] = triangle;

        for (FigureInterface a : figureInterfaces){
            System.out.println(a.getPerimeter());
            System.out.println(a.getArea());
        }
    }
}
