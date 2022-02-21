package TestyJednostkowe.JUnit;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertThrows;

class UnitTest {

    Coordinates coordinates;
    Unit unit;

    @BeforeEach
    void setCoordinatesAndUnit() {
        //given
        coordinates = new Coordinates(10, 30);
        unit = new Unit(coordinates, 100, 50);
    }

    @Test
    void currentCargoWeightValueShouldBe0AfterCreatingNewUnit() {
        //then
        assertThat(unit.getCurrentCargoWeight(), is(0));
    }

    @Test
    void coordinatesShouldBeActualizedAfterMoveIfSumOfCoordinatesIsSmallerThenFuel() {
        //given
        Coordinates newCoordinates;
        //when
        newCoordinates = unit.move(20, 40);
        //then
        assertThat(newCoordinates, not(equalTo(coordinates)));
        assertThat(newCoordinates.getX(), is(30));
        assertThat(newCoordinates.getY(), is(70));
    }

    @Test
    void fuelShouldBeActualizedAfterMove() {
        //given
        Coordinates newCoordinates = unit.move(20, 30);
        //when
        int newFuel = unit.getFuel();
        assertThat(newFuel, allOf(
                not(0),
                lessThan(100),
                equalTo(50)
        ));
    }

    @Test
    void exceptionShouldBeThrowIfNewCoordinatesSumIsBiggerThenFuel() {
        //then
        assertThrows(IllegalStateException.class, () -> unit.move(60, 100));
    }

    @Test
    void exceptionMessageShouldBeProperlyAfterSetATooBigCoordinatesAndTryToMoveUnit() {
        //given
        String errorMessage = null;
        //when
        try {
            unit.move(60, 100);
        } catch (Exception e) {
            errorMessage = e.getMessage();
        }
        //then
        assertThat(errorMessage, equalTo("Unit cannot move that far"));
    }

    @Test
    void fuelShouldNotBeBiggerThenMaxFuelAfterTank() {
        //given
        Unit newUnit = new Unit(coordinates, 10, 50);
        //when
        newUnit.tankUp();
        //then
        assertThat(newUnit.getFuel(), is(10));
    }


    @Test
    void cargoWithWeightSmallerThenMaxCargoShouldBeAddedProperly() {
        //given
        Cargo cargo = new Cargo("one", 40);
        //when
        unit.loadCargo(cargo);
        //then
        assertThat(unit.getCurrentCargoWeight(), is(40));
        assertThat(unit.getCargo().size(), is(1));
        assertThat(unit.getCargo().get(0), is(equalTo(cargo)));
    }

    @Test
    void ifWeightsSumIsSmallerThenMaxCargoWeightIsPossibleToAddMoreThenOneCargo() {
        //given
        Cargo cargo1 = new Cargo("one", 10);
        Cargo cargo2 = new Cargo("two", 20);
        Cargo cargo3 = new Cargo("three", 15);
        //when
        unit.loadCargo(cargo1);
        unit.loadCargo(cargo2);
        unit.loadCargo(cargo3);
        //then
        assertThat(unit.getCurrentCargoWeight(), is(45));
        assertThat(unit.getCargo().size(), is(3));
    }

    @Test
    void exceptionShouldBeThrowIfCargoWeightsSumIsBiggerThenMaxCargoWeight() {
        //given
        Cargo cargo1 = new Cargo("one", 20);
        Cargo cargo2 = new Cargo("two", 40);
        //when
        unit.loadCargo(cargo1);
        //then
        assertThrows(IllegalStateException.class, () -> unit.loadCargo(cargo2));
        assertThat(unit.getCurrentCargoWeight(), is(20));
    }

    @Test
    void exceptionMessageShouldBeProperlyAfterAddingTooBigCargo() {
        //given
        Cargo cargo1 = new Cargo("one", 110);
        String errorMessage = null;
        //when
        try {
            unit.loadCargo(cargo1);
        } catch (Exception e) {
            errorMessage = e.getMessage();
        }
        //then
        assertThat(errorMessage, is("Can not load any more cargo"));
    }

    @Test
    void cargoListShouldBeActualizedAfterRemovingOneOfThem() {
        //given
        Cargo cargo1 = new Cargo("one", 20);
        Cargo cargo2 = new Cargo("two", 10);
        unit.loadCargo(cargo1);
        unit.loadCargo(cargo2);
        //when
        unit.unloadCargo(cargo2);
        //then
        assertThat(unit.getCargo().size(), is(1));
        assertThat(unit.getCargo(), not(contains(cargo2)));
        assertThat(unit.getCurrentCargoWeight(), is(20));

    }

    @Test
    void cargosWeightValueShouldBeEqualTo0AfterUnloadAllCargo() {
        //given
        Cargo cargo1 = new Cargo("one", 20);
        Cargo cargo2 = new Cargo("two", 10);
        unit.loadCargo(cargo1);
        unit.loadCargo(cargo2);
        //when
        unit.unloadAllCargo();
        //then
        assertThat(unit.getCurrentCargoWeight(), is(0));
        assertThat(unit.getCargo().size(), is(0));
    }


}