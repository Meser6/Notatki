import 'package:flutter/material.dart';

//Podobnie jak w javie glowna funckcja ktora bedzie wywolaywana jako pierwsza to main
void main() {
  // runApp to funkcja ktora odpowiada za uruchomienie aplikacji. Przyjmuje ona drzewo widgetow ktore ma byc wyswietlone
  runApp(
      //Aplikacja zbudowana we flutter to drzewo widgetow. Najwyzszym widgetem jest MaterialApp ktory odwojuje dalej i dalej
      const MaterialApp(
    home: Scaffold(
      body: Center(
        child: Text('Hello World'),
      ), // mocno zalecanym a wrecz wymaganym jest uzywanie , po zakmnieciu kazdego widzetu.
      //dzieki temu formater wie gdzie sie dany widzet konczy
    ),
  ));
}
