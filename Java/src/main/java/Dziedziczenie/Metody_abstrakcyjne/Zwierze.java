package Dziedziczenie.Metody_abstrakcyjne;

public abstract class Zwierze {

    // Klasa abstrakcyjna polega na tym, że każda klasa która po niej dziedziczy bedzie musiała skorzystac z jej abstrakcynych metod;
    // Jeśli jakakolwiek metoda w klasie jest abstrakcyjna to klasa też tak musi być.

    // abstrakcyjne metody nie mogą mieć działa ale moga przyjmować zmienne
    abstract void stoj(boolean bat);

    abstract void jedz();


    // nieabstrakcyjna metoda w abstrakcyjnej klasie NIE musi być wywoływana w dzieciach (ale może ofc)
    void zjedzOwsa(int ileOwsa) {
        if (ileOwsa > 50) {
            System.out.println("Za dużo owsa");
        }
    }


}