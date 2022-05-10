public class HTTP {

    /**
     * HTTP
     */
    /*
    Protokół http określa format w jaki moze komunikowac sie klinet z serwerem
    Klient wysyłą rzadanie do serwera, a ten na nie odpowiada

    klient wysyla zadanie do serwera w formacie:
        -metoda
        -zasob i wersje protokołu
        -nagłówki
        -ciało (opcjonalne. przy GET raczej go nie ma)

    odpowiedź serwera
        -wersja protokolu i status odpowiedzi
        -naglowki
        -ciało (opcjonalne)
     */
    /**
     * Zasoby
     */
    /*
    Zasobem jest wszystko to co pobieramy z serwera. moze to byc obrazek, strona html lub plik z JS

    Przykład URL
    http://www.site.pl/post

    http - protokół
    www.site.pl - nazwa hosta
    post - sciezka do zasobu
     */
    /**
     * Nagłówki
     */
    /*
    Nagłówki wykorzystywane sa do przesyłania danych na temat zasobów. Moga zawierac ingo o formacie, statusie, jezuku itp.
    Przyjmuja format klucz : wartość
     */
    /**
     * Metody
     */
    /*
    GET - służy do pobierania danych
    POST - słuzy do tworzenia i wysyłania danych (musi mieć ciało)
    PUT - służy do aktualizowania danych
    DELETE - służy do usuwania danych
     */
    /**
     * Kody odpowiedzi
     */
    /*
    dzielą się na:
        -informacyjne
        -powodzenia
        -przekierownia
        -błędu klienta
        -błędu serwera
     */
}
