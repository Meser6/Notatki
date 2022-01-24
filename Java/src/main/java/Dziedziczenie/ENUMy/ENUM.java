package Dziedziczenie.ENUMy;

public class ENUM {

    // ENUM - jest to typ wyliczeniowy.
    //Tworząc nowy ENUM tworzymy jakby nowy typ danych (coś jak int, String itp) ale z zadeklarowanymi od razu możliwościami wyboru
    // powołując się na dany ENUM możemy wybrać tylko z tych rzeczy ktore tam umieściliśmy.
    public static void main(String[] args) {

        Samochod samochod = new Samochod(Marka.BMW, Kolor.BARDZO_CZARNY, 4);
        // wywylając ENUM najpierw podajemy jego nazwe a potem typ wyliczeniowy.


        //ENUMY bardzo fajnie współpracują ze Switchem

        switch (samochod.kolor) {
            case BIAŁY: {
                System.out.println("Biały");
                break;
            }
            case ŻÓŁTY: {
                System.out.println("Żółty");
                break;
            }
            case BARDZO_CZARNY: {
                System.out.println("Czarny");
                break;
            } default: {
                System.out.println("NN Kolor");
                break;
            }
        }
    }
}
