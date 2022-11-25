import Helpers.Post;
import io.restassured.http.ContentType;
import org.hamcrest.Matchers;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;
import static io.restassured.RestAssured.when;

public class RESTAssured {
    public static void main(String[] args) {

        // parametryzowanie endpointow

        given().pathParam("id", 3).
                when().post("http://localgost:3000/get/{id}"); // znajdzie odpowiedznik tego co wrzucilismy ale w {}
                                                                    // i wrzuci parametr

        given().
                when().post("http://localgost:3000/get/{id}", 3); // wrzuci parametr do pierwszego naptkanego {}.
                                                                    // jesli bedzie ic wiecej to bedzie wrzucal pokolei

        // modyfikacja query

        given().queryParam("author", "daria"). // w query wysle zadane parametry
                when().get("http://localhost:3000/get/1");

        Map<String, Object> params = new HashMap<>();
        params.put("author", "daria");

        given().queryParams(params). // w query wysle wszystkie parametry jakie sa w danej mapie
                when().get("http://localhost:3000/get/1");

        // logowanie odpowiedzi

        when().get("http://localhost:3000/get").then().log().body();
        when().get("http://localhost:3000/get").then().log().headers();
        when().get("http://localhost:3000/get").then().log().all();
        when().get("http://localhost:3000/get").then().log().everything();
        when().get("http://localhost:3000/get").then().log().ifStatusCodeIsEqualTo(200); // wyloguje jesli status jest rowny 200
        when().get("http://localhost:3000/get").then().log().status(); // wyloguje status
        when().get("http://localhost:3000/get").then().log().ifValidationFails().statusCode(404); // wyloguje jak status code nie jest rowny 404

        // lacznie watkow

        given()
                .when().get("http://localhost:3000/get/1")
                .then().body("author", Matchers.equalTo("zdzis"))
                .and().body("id", Matchers.equalTo(1)); //laczyc ciagi mozna za pomoca and()

        //zwracanie body jako elementu klasy

        Post body = given()
                .when().get("http://localhost:3000/get/1")
                .then().extract().body().as(Post.class); // zwroci body jako instancje klasy Post na ktorej otem mozemy rbic assercje
    }


}
