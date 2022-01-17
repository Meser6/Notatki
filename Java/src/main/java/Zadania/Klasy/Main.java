package Zadania.Klasy;

public class Main {
    public static void main(String[] args) {
        Human ola = new Human(18, 56, 1.72, "Ola", true);
        Human bartek = new Human(22, 88, 1.82, "Bartek", false);

        System.out.println("Ola have " + ola.getAge() + " years old");
        bartek.setAge(23);
        System.out.println("Bartek have " + bartek.getAge() + " years, not 22.");
    }
}
