package Interfejsy;

public interface Swiatla {

    // Metody - w więkzsości stanowią tylko sam szkielet, bez ciała. Zawsze są publiczne i abstrakcyjne

    boolean wlaczone(boolean turnOn);

    void wlaczPrzeciwmgienlne(int widocznosc);


    // metoty defaultowe mogą zawierać ciało. można je też nadpisywać i wywoływać z intancji klasy w której są zareferowane
    default void wysokosc (int b){
        System.out.println(b);
    }
    // metody statyczne też mogą zawierać ciało. nie da się ich jedank nadpisywać i musza być wywoływane z instancji interfejsu
    static void dzwiekKierunkowskazu(int a){
        System.out.println("dupa2");
    }

}
