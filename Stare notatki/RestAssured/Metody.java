import Helpers.Post;
import io.restassured.http.ContentType;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;
import static io.restassured.RestAssured.when;

public class Metody {

    public static void main(String[] args) {

        //testy sa podzielone zgodnie z bdd na 3 sekcje
        // given - poczatkowe ustawienia
        // when - wykonywane akcje
        // then - oczekiwane rezultaty

        // ---------------- dodawanie - POST ----------------

        // dodawanie - body ze stringa
        String jakiesBody = "\"title\": \"pierwszy\" \n" +
                "\"author\": \"kuba\"";

        given().contentType(ContentType.JSON).body(jakiesBody)// w contentType okreslamy jakiego typu body przekazujemy
                .when().post("http://localhost:3000/get") // metoda post wysylamy body z sekcji given
                .then().statusCode(202); //sprawdzi czy dostalismy 202

        // dodawanie - body z pliku
        File jakisJson = new File("src/resources/jakisJson.json");

        given().contentType(ContentType.JSON).body(jakisJson)
                .when().post("http://localhost:3000/get")
                .then().statusCode(202);

        // dodawanie - z Map
        //aby zadzialalo dodawanie body z mapy potrzebna jest dodatkowa zaleznosc https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-databind
        Map<String, Object> mapaZbody = new HashMap<>();
        mapaZbody.put("title", "pierwszy");
        mapaZbody.put("author", "kuba");

        given().contentType(ContentType.JSON).body(mapaZbody)
                .when().post("http://localhost:3000/get")
                .then().statusCode(202);

        // dodawanie - z klasy
        Post jakasKlasa = new Post();
        jakasKlasa.setTitle("pierwszy");
        jakasKlasa.setAuthor("Kuba");

        given().contentType(ContentType.JSON).body(jakasKlasa) // nie wysyla obiektu Post ale 'tlumaczy' go i wysyla Jsona
                .when().post("http://localhost:3000/get")
                .then().statusCode(202);

        // ---------------- zastepowanie  - PUT ----------------

        // zastepowanie -z Map
        Map<String, Object> mapaZbody2 = new HashMap<>();
        mapaZbody.put("title", "pierwszy");
        mapaZbody.put("author", "kuba"); // jesli wrzucalibysmy mape i nie wypelnilibysmy wszystkich pol to zostana wyslane
        // tylko te wypelnione a reszta po prostu znika

        given().contentType(ContentType.JSON).body(mapaZbody2)
                .when().put("http://localhost:3000/get/1")
                .then().statusCode(202);

        // zastepowanie -z klasy
        Post jakasKlasa2 = new Post();
        jakasKlasa.setTitle("pierwszy");
        jakasKlasa.setAuthor("Kuba"); // jesli wrzucalibysmy klase i nie wypelnilibysmy wszystkich pol to zostana wyslane
        // wszystkie pola zadeklarowane w klasie a te nie wypelnione przyjma wartosc null
        //jesli nie chcemy zeby wysylaly sie nulle przy uzywaniu klasy to trzeba jej dodac adnotacje @JsonInclude(JsonInclude.Include.NON_NULL)

        given().contentType(ContentType.JSON).body(jakasKlasa2) // nie wysyla obiektu Post ale 'tlumaczy' go i wysyla Jsona
                .when().post("http://localhost:3000/get/1")
                .then().statusCode(202);

        // ---------------- aktualizacja - PATCH ----------------

        Post jakasKlasa3 = new Post();
        jakasKlasa.setTitle("pierwszyAktualizacja"); // podmieni tylko te watsoci ktore zadeklaruemy. inne zostawi takimi jakimi byly
        // jesli korzystamy z klasy to nie wypelnione wartosci tez sie wysla jako nulle, chyna ze dodamy adnotacje @JsonInclude(JsonInclude.Include.NON_NULL)

        given().contentType(ContentType.JSON).body(jakasKlasa3) // nie wysyla obiektu Post ale 'tlumaczy' go i wysyla Jsona
                .when().patch("http://localhost:3000/get/1")
                .then().statusCode(202);

        // ---------------- usuwanie - DELETE ----------------

        when().delete("http://localhost:3000/get/1");

        // ---------------- pobieranie - GET ----------------

        when().get("http://localhost:3000/get/1");



    }
}
