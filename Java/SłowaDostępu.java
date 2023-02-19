public class SłowaDostępu {

    //Ochrona klas/metod/zmiennych


    private void priv() {
        // private powoduje, że metoda ta jest widzocza tylko i wyłącznie w tej klasie
        System.out.println("Kenedys kiled by...");
    }

    protected void protect() {
        // protected - metoda jest widocza tylko w klasach w hierarchii dziedziczenia
        //dostepny jest też dla innych klas w tym samym pakiecie. Klasa nie moze być protected
        System.out.println("Duda debil");
    }

    public void publico() {
        // public/brak - nieograniczony dostęp w całym projekcie
        System.out.println("***** ***");
    }

    final void finale() {
        // nie moze być nadpisana przez klasy dziedziczone, ale mogą one je wywoływać.
        // z klasy final nie można już dziedziczyć dalej.
        System.out.println("duda debil");
    }
}
