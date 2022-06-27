package Lokalizacja.CSS;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Dziedziczenie {

    WebDriver driver;

    // Zaznaczy wszystkie elementy które spełniają taka konfiguracje. Jeśli używamy FindElement to ofc złapie pierwszy

    @Test
    void dziedziczenie() {

        /*
        1 <div id="jeden">
        2     <button type="oppo">text</button>
        3     <button type="reno">text</button>
        4 </div>
         */
        driver.findElement(By.cssSelector("div>button")); // znajdzie wszystkie elementy o tagu button które są bezpośrednimi dziecmi diva (2)
        driver.findElement(By.cssSelector("div#jeden>button"));// znajdzie wszystkie elementy o tagu button które są bezpośrednimi dziecmi diva o id jeden (2)
        driver.findElement(By.cssSelector("div#jeden>button[type='reno']"));// znajdzie wszystkie elementy o tagu button które są bezpośrednimi dziecmi diva o id jeden (3)

    }

    @Test
    void dzieci() {

        /*
        1 <div id="jeden">
        2    <button type="oppo"> text1 </button>
        3    <button type="reno" class="klasa"> text2 </button>
        4    <button type="redmi"> text3 </button>
        5    <p> text4 </p>
        6    <button type="samsung"> text5 </button>
        7    <p id="IDS"> text4 </p>
        8 </div>
         */

        //w nawiasach liczymy od 1, a nie od 0
        driver.findElement(By.cssSelector("div#jeden>button:nth-child(2)")); //znajdź buttona który jest drugim od początku dzieckiem diva o tagu jeden (3)
        driver.findElement(By.cssSelector("div#jeden>button:nth-last-child(2)")); //znajdź buttona który jest drugim od końca dzieckiem diva o tagu jeden (3)
        driver.findElement(By.cssSelector("div#jeden>button:last-child()")); //znajdź buttona który jest ostatnimu dzieckiem diva o tagu jeden (brak)

        driver.findElement(By.cssSelector("div#jeden>button:nth-of-type(4)")); //znajdź buttona który jest 4 buttonem (liczac od gory) diva o tagu jeden (6)
        driver.findElement(By.cssSelector("div#jeden>button:nth-last-of-type(4)")); //znajdź buttona który jest 4 buttonem (liczac od końca) diva o tagu jeden (6)

        driver.findElement(By.cssSelector("div#jeden>p:first-child")); //znajdz element o tagu p który jest pierwszym dzieckiem diva o id jeden (brak)
        driver.findElement(By.cssSelector("div#jeden>p:last-child")); //znajdz element o tagu p który jest ostatnim dzieckiem diva o id jeden (7)

        driver.findElement(By.cssSelector("div#jeden>p:first-of-type")); //znajdz pierwsze p które jest dzieckiem diva o tagu jeden (5)
        driver.findElement(By.cssSelector("div#jeden>p:last-of-type")); //znajdz ostatnie p które jest dzieckiem diva o tagu jeden (7)
        driver.findElement(By.cssSelector("div#jeden>p:only-of-type")); //znajdź p  który jest jedynym dzieciem tego typu w divie o id jeden (brak)

        //łączenie jest bardzo proste np.
        driver.findElement(By.cssSelector("div#jeden>button.klasa:only-of-type"));
    }

    @Test
    void rodzenstwo() {

        /*
        1 <div id="jeden">
        2    <button type="oppo"> text1 </button>
        3    <button type="reno" class="klasa"> text2 </button>
        4    <button type="redmi"> text3 </button>
        5    <p> text4 </p>
        6    <button type="samsung"> text5 </button>
        7    <p id="IDS"> text4 </p>
        8 </div>
         */
        driver.findElement(By.cssSelector("div#jeden>button+p")); //znajdź p które jest bezpośrednio po buttonie (jako rodzeństwo). Oba elmenty są dziecmi diva o tagu jeden (5)
        driver.findElement(By.cssSelector("div#jeden>button+p#IDS")); //znajdź p z id IDS które jest bezpośrednio po buttonie (jako rodzeństwo). Oba elmenty są dziecmi diva o tagu jeden (7)
        driver.findElement(By.cssSelector("div#jeden>button.klasa+button")); //znajdź button który jest bezpośrednio po buttonie o klasie klasa (jako rodzeństwo). Oba elmenty są dziecmi diva o tagu jeden (4)
        driver.findElement(By.cssSelector("button.klasa+button")); //znajdź button który jest bezpośrednio po buttonie o klasie klasa (jako rodzeństwo). Oba elmenty są dziecmi jakiegoś elemntu (5)

        driver.findElements(By.cssSelector("div#jeden>button.klasa~button")); // znajdź wszystkie buttony które są po butonnie z klasa klasa (jako rodzeństwo) i są rodzicami diva o tagu jeden (4)(5)
    }

    @Test
    void potomkowie() {

        /*
        1 <div id="jeden">
        2    <button type="oppo"> text1 </button>
        3    <button type="reno" class="klasa"> text2
        4       <p id="dwa"> text4 </p>
        5    </button>
        6    <button type="redmi"> text3 </button>
        7    <p> text4 </p>
        8    <button type="samsung"> text5 </button>
        9    <p id="IDS"> text4 </p>
        10 </div>
         */
        driver.findElement(By.cssSelector("div#jeden p#dwa")); //znajdź p o id dwa które jest potomkiem diva o id jeden (dowolnie głęboko zagnieżdzonym) (4)
        driver.findElements(By.cssSelector("div#jeden p")); //znajdź wszystkie p które sa potomkami diva o id jeden (dowolnie głęboko zagnieżdzonymi) (4)(7)(9)
    }

    @Test
    void not(){
        /*
        1 <div id="jeden">
        2     <button type="oppo" id="ids">text</button>
        3     <button type="reno">text</button>
        4 </div>
         */
        driver.findElement(By.cssSelector("button:not(#ids)")); // znajdz wszystkie buttony które NIE mają id ids (3)
        driver.findElement(By.cssSelector("button:not([id])")); //znajdź wszystkie buttony które NIE mają żadnego id

    }
}
