package JUnit;

public class TESTOWANIE {

    private boolean active;
    private String name;

    public TESTOWANIE() {
        this.active = false;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    void activate() {
        this.active = true;
    }

    boolean isActive() {
        return this.active;
    }
}
