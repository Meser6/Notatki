package Zadania.Klasy;
/*
Utwórz klasę Human reprezentującą człowieka, musi posiadać atrybuty takie jak wiek, waga, wzrost, imię i płeć.
po swtorzeniu czlowieka, niech się przedstawi.
Klasa powinna także zawierać metody getAge, getWeight, getHeight, getName, isMale.
 */

public class Human {
    int age;
    int weight;
    double growth;
    String name;
    boolean isFemale;

    public Human(int age, int weight, double growth, String name, boolean isFemale) {
        this.age = age;
        this.weight = weight;
        this.growth = growth;
        this.name = name;
        this.isFemale = isFemale;
        introduce();
    }

    public void introduce() {
        String sex;
        if (isFemale) {
            sex = "Girl";
        } else {
            sex = "Boy";
        }
        String introduce = "My name is " + name + " and I have " + age + " years old. I have " + growth + "cm, and "
                + weight + "kg. I'm " + sex.toLowerCase() + '.';
        System.out.println(introduce);
    }

    public int getAge() {
        return age;
    }

    public int getWeight() {
        return weight;
    }

    public double getGrowth() {
        return growth;
    }

    public String getName() {
        return name;
    }

    public boolean isFemale() {
        return isFemale;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public void setGrowth(double growth) {
        this.growth = growth;
    }
}
