package java.JUnit.PARAMETR;

public class PARAMETR {

    private Colors colors;
    private boolean isSmallerThen5;
    private String name;

    public PARAMETR(Colors colors, int number) {
        this.colors = colors;
        isSmallerThen5 = number < 5;
    }

    public PARAMETR(String name, int number) {
        this.name = name;
        isSmallerThen5 = number < 5;
    }

    public String getName() {
        return name;
    }

    public Colors getColors() {
        return colors;
    }

    public void setColors(Colors colors) {
        this.colors = colors;
    }

    public boolean getIsSmallerThen5() {
        return isSmallerThen5;
    }

}
