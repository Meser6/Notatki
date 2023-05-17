package java.JUnit.KOLEKCJE;

import java.util.ArrayList;

public class KOLEKCJE {

    private ArrayList<Animal> list = new ArrayList<>();

    public ArrayList<Animal> getList() {
        return list;
    }

    public void addAnimal(Animal animal) {
        this.list.add(animal);
    }

    public void removeAnimal(Animal animal) {
        this.list.remove(animal);
    }
}
