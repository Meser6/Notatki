public class TESTOWANIE {

    private boolean active;

    public TESTOWANIE() {
        this.active = false;
    }

    void activate() {
        this.active = true;
    }

    boolean isActive() {
        return this.active;
    }
}
