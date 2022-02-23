package JUnit.KOLEKCJE;

import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

class KOLEKCJETest {

    @Test
        // sprawdzanie czy dana kolekcja jest pusta / ma rozmiar 0
    void listOfAnimalsShouldBeEmptyAfterCreation() {
        //given
        KOLEKCJE kolekcje = new KOLEKCJE();
        //then
        assertThat(kolekcje.getList().size(), equalTo(0));
        assertThat(kolekcje.getList(), empty());
        assertThat(kolekcje.getList(), hasSize(0));
        assertThat(kolekcje.getList(), emptyCollectionOf(Animal.class));
    }

    @Test
        // sprawdzanie czy kolekcja zawiera dany element
    void itIsPossibleToAddAnimalToList() {
        //given
        KOLEKCJE kolekcje = new KOLEKCJE();
        Animal mouse = new Animal("mouse", 1);
        //when
        kolekcje.addAnimal(mouse);
        //then
        assertThat(kolekcje.getList(), contains(mouse));
        assertThat(kolekcje.getList(), hasItem(mouse));
    }

    @Test
        // sprawdzanie czy kolekcja zawiera elementy bez patrzenia na ich kolejność
    void itIsPossibleToAddTwoAnimalsToList() {
        //given
        KOLEKCJE kolekcje = new KOLEKCJE();
        Animal mouse = new Animal("mouse", 1);
        Animal dog = new Animal("dog", 15);
        //when
        kolekcje.addAnimal(mouse);
        kolekcje.addAnimal(dog);
        //then
        assertThat(kolekcje.getList(), containsInAnyOrder(dog, mouse));
    }

    @Test
        // sprawdzanie czy kolekcja nie zawiera danego elementu
    void itIsPossibleToRemoveAnimalFromList() {
        //given
        KOLEKCJE kolekcje = new KOLEKCJE();
        Animal mouse = new Animal("mouse", 1);
        //when
        kolekcje.addAnimal(mouse);
        kolekcje.removeAnimal(mouse);
        //then
        assertThat(kolekcje.getList(), hasSize(0));
        assertThat(kolekcje.getList(), not(contains(mouse)));
        assertThat(kolekcje.getList(), not(hasItem(mouse)));
    }

    @Test
        // sprawdzanie czy elementy dodawane sa w dobrej kolejności
    void animalsAddedToListInCorrectOrder() {
        //given
        KOLEKCJE kolekcje = new KOLEKCJE();
        Animal mouse = new Animal("mouse", 1);
        Animal dog = new Animal("dog", 15);
        //when
        kolekcje.addAnimal(mouse);
        kolekcje.addAnimal(dog);
        //then
        assertThat(kolekcje.getList(), contains(mouse, dog)); // sprawdza po kolei. gdyby dog byl pierwszy to daloby fail
    }

    @Test
        // czy dwie takie same listy zawieraja takie same elementy w tej samej kolejności
    void twoListWithTheSameElementsShouldBeTheSame() {
        //given
        Animal mouse = new Animal("mouse", 1);
        Animal dog = new Animal("dog", 15);
        List<Animal> list1 = Arrays.asList(mouse, dog);
        List<Animal> list2 = Arrays.asList(mouse, dog);
        //then
        assertThat(list1, is(list2));
    }

}