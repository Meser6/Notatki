package Lokalizacja;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class CSS {

    WebDriver driver;

    // Selektory CSS wyszukują po stylach
    // $$("SELEKTOR-CSS") - wyszukiwanie w konsoli po CSSach. Zwróci listę wszystkich znalezionych elementów

    @Test
    void CSS() {

        // -------- wyszukanie po tagu  --------

        //<button>text</button>
        driver.findElement(By.cssSelector("button"));

        // -------- wyszukiwanie po id  --------

        //<button id="jakies-id">text</button>
        driver.findElement(By.cssSelector("#jakies-id")); //znajdzie wszystkie obiekty które maja w sobie takie id - nawet jak mają wiecej ich wiecej
        driver.findElement(By.cssSelector("button#jakies-id")); //znajdzie obiekty o tagu button które maja w sobie takie id - nawet jak mają wiecej ich wiecej
        driver.findElement(By.cssSelector("[id='jakieś-id]")); //znajdzie wszystkie obiekty które maja dokładnie takie id - nie znajdzie obiektow ktore mają ten i jeszce jakies
        driver.findElement(By.cssSelector("button[id='jakieś-id]")); //znajdzie obiekty o tagu button które maja dokładnie takie id - nie znajdzie obiektow ktore mają ten i jeszce jakies
        //<button id="jakies-id id-2">text</button>
        driver.findElement(By.cssSelector("[id='jakieś-id id-2]")); //znajdzie wszystkie obiekty które maja dokładnie takie dwa id w takiej kolejnosci - nie znajdzie obiektow ktore mają te i jeszce jakies
        driver.findElement(By.cssSelector("button[id='jakieś-id id-2]")); //znajdzie wszystkie obiekty o tagu button które maja dokładnie takie dwa id w takiej kolejnosci - nie znajdzie obiektow ktore mają te i jeszce jakies

        // -------- wyszukiwanie po klasie  --------

        //<button class="jakas-klasa">tekst</button>
        driver.findElement(By.cssSelector(".jakas-klasa")); //znajdzie wszystkie obiekty które maja w sobie takia klase - nawet jak mają wiecej ich wiecej
        driver.findElement(By.cssSelector("button.jakas-klasa")); //znajdzie obiekty o tagu button które maja w sobie takią klase - nawet jak mają wiecej ich wiecej
        driver.findElement(By.cssSelector("[class='jakas-klasa")); //znajdzie wszystkie obiekty które maja dokładnie taką klase - nie znajdzie obiektow ktore mają tą i jeszce jakies
        driver.findElement(By.cssSelector("button[class='jakas-klasa'")); //znajdzie obiekty o tagu button które maja dokładnie taką klase - nie znajdzie obiektow ktore mają tą i jeszce jakies
        //<button class="jakas-klasa klasa-2">tekst</button>
        driver.findElement(By.cssSelector("[clss='jakas-klasa klasa-2']")); //znajdzie wszystkie obiekty które maja dokładnie takie dwie klasy w takiej kolejnosci - nie znajdzie obiektow ktore mają te i jeszce jakies
        driver.findElement(By.cssSelector("button[clss='jakas-klasa klasa-2']")); //znajdzie wszystkie obiekty o tagu button które maja dokładnie takie dwie klasy w takiej kolejnosci - nie znajdzie obiektow ktore mają te i jeszce jakies
        driver.findElement(By.cssSelector("button.jakas-klasa.klasa-2")); //znajdzie wszystkie obiekty o tagu button które maja dokładnie takie dwie klasy BEZ WZGLEDY NA KOLEJNOSC - nie znajdzie obiektow ktore mają te i jeszce jakies

        // tak na prawde przy pomocy nawiasów kwadratowych mozna szukac po dowolnym elemencie
        // wyszukiwanie z nawiasami kwadratowymi zawsze znajdzie obiekty ktore mają dokładnie taka wartość
        //<button class="jakas-klasa" href="ppoo" costam="xd">tekst</button>
        driver.findElement(By.cssSelector("[costam='xd']"));
        driver.findElement(By.cssSelector("[href='ppoo']"));

        // można dowolnie łączyć selektory. nie będzie brana pod uwage kolejność ich podwania
        //<button class="jakas-klasa" id="jakies-id href="ppoo" costam="xd">tekst</button>
        driver.findElement(By.cssSelector(".jakas-klasa#jakies-id"));
        driver.findElement(By.cssSelector("[href='ppoo'].jakas-klasa"));
        driver.findElement(By.cssSelector("button#jakies-id[costam='xd']"));

        // przy wyszukaniu po stylu trzeba szukać po całej warsości (przynajmniej w przykladzie ponizej)
        //<button style="jeden; dwa; trzy">tekst</button>
        driver.findElement(By.cssSelector("style='jeden; dwa; trzy'"));

    }
}
