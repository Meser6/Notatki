package Lambda;

@java.lang.FunctionalInterface // Interfejs funkcyjny ma jedną abstrakcyjną metodę. Może mieć statyczne i defoltowe;
// Po dodaniu tej adnotacji kompilator upewni sie czu aby na pewno tak jest
// Wyjątkowo w takich interfejsach może być wiecej niz 1 metoda abstrakcyja, jednak te pozostałe muszą być nadpisane z klasy Object
public interface Sum {

    int calculate(int a, int b);

    default void printS() {
        System.out.println('s');
    }

    boolean equals(Object ob);
}
