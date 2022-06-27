package API;

public class HTTP {

    /**
     * API.HTTP
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
        -1XX - informacyjne
            100 - konunuj prośbę o dalsze wyslanie zapytania
            111 - polaczenie odrzucone przez serwer
        -2XX - powodzenia
            200 - ządanie sie powiodło. serwer zwrocil odpowiedz
            201 - zadanie sie powiodło. serwer storzył/zaktualizował zasób
        -3XX - przekierownia
            301 - uzytkownik zostal trwale przeniesiony na inna strone
            310 - zbyt wiele przekierowan
        -4XX - błędu klienta
            400 - błędne zapytanie
            401 - nieautoryzowany dostęp
            403 - dostep zabroniony
        -5XX - błędu serwera
            500 - nieoczekiwany blad. nie mozna zrealizowac zapytania/zadania
     */
}
