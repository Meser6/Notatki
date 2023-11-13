//Własne typy
{
  // własne typy nazywamy z duzej listery przez slowko kluczowe type
  type OgraniczoneTypy2 = string | { name: string }; //typy moga byc tez ogolne

  const type4: OgraniczoneTypy2 = { name: "bob" };
  const type5: OgraniczoneTypy2 = "bob";
  const type6: OgraniczoneTypy2 = true; //blad// nie moze przyjac takiego typu
}
//Łączenie typow
{
  type Typ1 = { name: string };
  type Typ2 = { surname: string };
  type Type3 = Typ1 & Typ2; // bedzie obiektem który ma wlasciwosci z obu przypisanych obiektow

  type Typ4 = number | string;
  type Typ5 = string | boolean;
  type Typ6 = Typ4 & Typ5; // bedzie wartoscia ktora laczy te dwa typy. jesli nie bedzie takiej wartosci to bedzie never
}
//sprawdzanie wlscowosci obiektu
{
  //załóżmy że mamy taka sytuacje
  type Typ1 = { name: string };
  type Typ2 = { surname: string };

  function funkcja(v1: Typ1 | Typ2) {
    if (v1.name) console.log(v1.name); //błąd// bo jak wyslemy cos z Typ2 to nie bedzie tej wlasciwosci
    //aby tegmu zapobiec trzeba najpierw sprawdzic, czy obiekt ktory dostalismy ma ta wlasciwosc
    if ("name" in v1) console.log(v1.name);
  }
}
