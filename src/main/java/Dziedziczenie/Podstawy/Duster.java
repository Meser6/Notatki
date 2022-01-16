package Dziedziczenie.Podstawy;

public class Duster extends Dacia {

    Duster(String rodzajPaliwa) {
        super(rodzajPaliwa);
    }

    @Override // Metody abstrakcyjne 2/2
    void klakson(int glosnosc) { // nie można wysłać więcej zmiennych niż to co jest zadeklarowane w abstrakcyjnej
        System.out.println(glosnosc + "ti ti");
    }

}
