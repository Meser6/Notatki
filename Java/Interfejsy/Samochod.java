package Interfejsy;

public class Samochod implements Swiatla, TypyMaterialow {

    // Klasa która imprementuje dany interfejs musi wykorzystać jego metody, ale zmenne już nie.

    @Override
    public boolean wlaczone(boolean turnOn) {
        return false;
    }

    @Override
    public void wlaczPrzeciwmgienlne(int widocznosc) {
        if (widocznosc < 50) {
            System.out.println("wlaczono swiatla przecimgielne");
        }
    }

    // Do zmiennych można się dostać tylko w klasie która impelentuje dany interfejs
    String material = aluminium;

    @Override
    public void wysokosc(int a) {
        System.out.println("wysokosc " + a);
    }

}
