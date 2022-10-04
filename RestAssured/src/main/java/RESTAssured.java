import Helpers.Post;
import io.restassured.http.ContentType;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;
import static io.restassured.RestAssured.when;

public class RESTAssured {
    public static void main(String[] args) {

        //testy sa podzielone zgodnie z bdd na 3 sekcje
        // given - poczatkowe ustawienia
        // when - wykonywane akcje
        // then - oczekiwane rezultaty

        // -------- dodawanie - POST

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

        // -------- logowanie odpowiedzi

        when().get("http://localhost:3000/get").then().log().body();
        when().get("http://localhost:3000/get").then().log().headers();
        when().get("http://localhost:3000/get").then().log().all();
        when().get("http://localhost:3000/get").then().log().everything();
        when().get("http://localhost:3000/get").then().log().ifStatusCodeIsEqualTo(200); // wyloguje jesli status jest rowny 200
        when().get("http://localhost:3000/get").then().log().status(); // wyloguje status
        when().get("http://localhost:3000/get").then().log().ifValidationFails().statusCode(404); // wyloguje jak status code nie jest rowny 404


    }


}
