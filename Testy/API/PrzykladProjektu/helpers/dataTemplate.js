// obiekty do przeslania w body to mozemy je trzymac oddzielnie, importowac, potem edytowac i wysylac
export const bodyDoPierwszegoRequesta = {
  id: 2312321,
  type: "add",
};

export const bodyZParametrem = function (parametr) {
  const data = { id: 23231 };
  if (parametr === "bob") data.imie = "bob";

  return data;
};
