let strona = document.getElementById("1");
// funckje w js tworzymy przez podanie słówka kluczowego function + nazwa + ()

// 1 sposob
//tworzenie funkcji bezargumentowej
function funkcja (){
    alert("alert");
};

funkcja();

// 2 sposob (funkcja strzałkowa) - nie może zostać wywołana w kodzie przed miejcem inicjalizacji

const funkcjaStrzałkowa = () => {
    alert("=>");
}
funkcjaStrzałkowa();

//tworzenie funkcji z argumentami
function funkcja2(a, b){
    for(var i = 0; i<a; i++){
        strona.innerHTML += i + b + "<br>";
    };
};

funkcja2(4, "funkcja 2")

//nie da sie przeciążyć funkcji poprzez ilość argumentów.
//gdy będziemy mieli dwie tak samo nazwane to wywoła sie ta która jest niżej w kodzie bez wzgledu na wyslane argumenty

funkcja3(2, 3);

function funkcja3(c, d){ // ta sie nie wywoła
    strona.innerHTML += c + d + "<br>";
};

function funkcja3(c){ //ta sie wywoła
    strona.innerHTML += c + "<br>";
};

//gdy wyślemy do funkcji złe typy argumentów lub za mało tychże to nie rzuci wyjątkiem. Da zły output (np. NaN)

funkcja2(3);
funkcja2("xd", 2);

//wysyłając argumenty do funkcji wlatują tak na prawdę wlatują one do tablicy arguments


//nie rzyci tez wyjątkiem gdy wyslemy zbyt małą liczbe argumentów
// ale można zabezpieczyć się przed zbyt małą ich iloscia

funkcja4(3);

function funkcja4(e, f){
    if (f === undefined) {
        f = "pusto";
    }
    strona.innerHTML += e + f + "<br>";
};

//przy wysłaniu zbyt dużej liczby argumentów równiez nie dostanemy wyjątku
//można to obłużyć w poniższy sposób.

funkcja5(4,5,6);

function funkcja5(g, h){
    if(arguments.length <3){
    strona.innerHTML += g + h + "<br>";
    }
    else{
        strona.innerHTML += g + h + arguments[2] + "<br>";
    };
};

//zwracanie przez funkcje odbywa sie przes słówko return

strona.innerHTML += funcja6(1, 2) + "<br>";

function funcja6(a, b){
    return a + b;
};

// wszystko co jest po return nie zostanie wywołane bo return automatycznie konczy dana funcje

strona.innerHTML += funcja7(1, 2) + "<br>";

function funcja7(a, b){
    return a + b;
    alert("alert")// to już się nie wykona
};

//rekurencja to wywoływanie funcji we ciele tej funkcji
//trzeba pamietac, zeby nie bylo to wywoływanie nieskonczone

strona.innerHTML += funkcja8(5) + "<br>";

function funkcja8(a){
    if (a == 1){
        return 1;
    } else
    {
        return a * (funkcja8(a -1));
    }
};