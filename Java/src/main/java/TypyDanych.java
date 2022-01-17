public class TypyDanych {

    // Pojedyńczy znak. 
    char aChar = 'a'; //Musi być w '' zamiast ""

    // Ciąg znaków.
    String aString = "test test"; // \n przeskakuje do kolejnej linijki.

    // Boolean. Domyślnie przyjmuje false.
    boolean aBoolean = true;
    boolean bBoolean = false;

    //Liczby całkowite
    byte aByte = 1;
    short aShort = 2;
    int anInt = 3;
    long aLong = 4;

    //Liczby zmiennoprzecinkowe
    float aFloat = 0.5f; // trzeba dodać na końcu f
    double aDouble = 0.7; // można ale nie trzeba dodać na końcu d

    // Rzytowanie

    // Rzutowanie niejawne wystepuje gdy jest pewnosć, ze nie bedzie strat danych np.
    int a = 7;
    double b = a;

    // Rzutowanie jawne trzeba przeoprowadzić gdy jest podejrzenie ze bedaą jakies straty
    double c = 7.5;
    int d = (int) c; // przy rzutowaniu ze zmienno przecinkowej na zwykla p prostu ucina to co po przecinku

    // Konwersja na teskt
    int e = 7;
    double f = 3.14;
    String s = Integer.toString(e) + Double.toString(f); // klasa osłonowa zależna od typu z jakiego robimy

    //Konwersja z tekstu
    String p = "7";
    int o = Integer.parseInt(p); // klasa osłonowa zależna od typu na jaki robimy
    double u = Double.parseDouble(p); // Gdy w tekscie beda zmiany to rzuci wyjatkiem java.lang.NumberFormatException

}
