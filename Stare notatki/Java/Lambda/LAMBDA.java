package Lambda;

import java.util.Arrays;
import java.util.List;

public class LAMBDA {
    public static void main(String[] args) {
        // Wyrażenia Lambda służą do skracania kodu i czynienia go bardziej czytelnym
        // Można je stosować na metodach znajdujących się w interfejsach funkcyjnych tj. posiadajacych 1 metode abstrakcyjna
        // Składnia: <lista parametrów> -> <ciało wyrażenia> np potęgowaine x: x -> x * x
        // czyli:    to wo wysylamy        // to co ma zwrocic/wykonac

        Sum sum = new Sum() {
            @Override
            public int calculate(int a, int b) {
                return a + b;
            }
        };

        int p = sum.calculate(2, 3);

        Sum sumLambda = (a, b) -> a + b;

        int b = sumLambda.calculate(2, 3);

        // jeżeli metoda posiada tylko jeden parametr to można zrezygnować z nawiasow ()
        Pow powLambda = a -> a * a;

        int c = powLambda.a(3);

        Pow powLambdaBody = a -> {
            System.out.println(a);
            return a * a;
        };

        int d = powLambdaBody.a(2);
        // Jeżeli wyrażenie lambda służy jedynie jako pośrednik do wywołania innej metody i nic innego nie robi
        //to możemy skorzystać ze skrótów
        //Dzięki temu wyrażeniu możemy przypisać metodę do zmiennej bez jej wywołania.
        // Takie podejście pozwala na przekazanie tak wyłuskanej metody i wywołanie jej w zupełnie innym miejscu
        //https://docs.oracle.com/javase/tutorial/java/javaOO/methodreferences.html

        Sum sumLambda2 = Integer::sum;

        int e = sumLambda2.calculate(2, 3);

        Nothing nothing = LAMBDA::print;
        nothing.nothing();
        Nothing nothing1 = () -> print();
        //PRZYKŁAD
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);

        list.forEach(integer -> System.out.println(integer));

        list.forEach(integer -> {
            integer += 5;
            System.out.println(integer);
        });
    }

    private static void print() {
        System.out.println("print");
    }
}
