import Helpers.Post;
import io.restassured.http.ContentType;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Assertions;

import static io.restassured.RestAssured.given;

public class Assercje {

    public static void main(String[] args) {

        // kody odpowiedzi
        given()
                .when()
                .then().statusCode(200); //status code jest rowny danemu intowi

        given()
                .when()
                .then().statusCode(Matchers.lessThanOrEqualTo(299)); //można korzystac z hamcrestowych matcherow

        // linia statusu
        given()
                .when()
                .then().statusLine(Matchers.containsString("OK")); // linia statusu (np. HTTP/1.1 200 OK)

        //cialo odpowiedzi

        given()
                .when().get("http://localhost:3000/get/1")
                .then().body(Matchers.equalTo("jakies body")); // sprawdzi czy cale cialo jest dokadnie takie

        given()
                .when().get("http://localhost:3000/get/1")
                .then().body(Matchers.equalTo("jakies body")); // sprawdzi cale caialo

        given()
                .when().get("http://localhost:3000/get/1")
                .then().body(Matchers.containsString("czesc body")); // sprawdzi czy w body wystepuje ten string

        given()
                .when().get("http://localhost:3000/get/1")
                .then().body("author", Matchers.equalTo("zdzis")); // sprawdzi czy w body wystepuje author
        // ktory ma przyisany zdzis

        Post body = given()
                .when().get("http://localhost:3000/get/1")
                .then().extract().body().as(Post.class); // zwroci body jako instancje klasy Post na ktorej otem mozemy rbic assercje

        Assertions.assertEquals(body.getAuthor(), "daria");
        Assertions.assertNotNull(body.getTitle());

        Post wyslane = new Post();
        wyslane.setTitle("pierwszy");
        wyslane.setAuthor("Kuba");

        Post odebrane = given().contentType(ContentType.JSON).body(wyslane) // nie wysyla obiektu Post ale 'tlumaczy' go i wysyla Jsona
                .when().post("http://localhost:3000/get")
                .then().extract().body().as(Post.class);

        Assertions.assertEquals(wyslane, odebrane); // w tym przypadku sprawdzi czy wyslane body jest takie same jak odebrane.
        // aby to zadzialalo trzeba opatrzyc klase w metode eqals()

    }
}
