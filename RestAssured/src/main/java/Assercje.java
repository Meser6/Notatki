import org.hamcrest.Matchers;

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


    }
}
