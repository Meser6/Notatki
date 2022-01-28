package Equals;

public class EQUALS {

    // Metoda equals polega na porównywaniu dwóch obiektów po zadanych parametrach
    // Dzięki niej można porównać każdyu obiekt z każdym. Jeżeli ma takie same parametry to zwraca true
    // cyfry i booleany można porównywać za pomocą ==, całą reszte lepiej przez equals ()

    public static void main(String[] args) {
        Dog dog1 = new Dog("Burek", RasaPsa.BORDER, 15);
        Dog dog2 = new Dog("Burek", RasaPsa.BORDER, 1);

        Cat cat1 = new Cat("Mruczek", RasaKota.KOT1, 15);
        Cat cat2 = new Cat("Mruczek", RasaKota.KOT3, 15);

        System.out.println(dog1.equals(dog2)); // zwróci True ponieważ w przeciązonej metodzie jako parametry wzielismy tylko imie i rase

        System.out.println(cat2.equals(cat1)); // zwróci False poniewaz w przeciazonej metodzie jako parametry wzielismy wszystkie 3 rzeczy

        System.out.println(cat1.equals(dog1)); // Zwroci False bo porównywane obiekty są różnego typu

        System.out.println(cat1.equals(2)); // zwróci False bo porównywane obiekty sa rożnego typu

        System.out.println(dog1 == dog2); // zwróci false ponieważ te dwa obiekty maja rozne referencje (nawet jkaby parametry byly te same)

        dog2 = dog1;
        System.out.println(dog1 == dog2); // zwróci True ponieważ wpisalismy referencje dog1 do referencji dog2
    }
}
