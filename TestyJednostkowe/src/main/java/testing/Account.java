package testing;

public class Account {

    private boolean active;

    public Account() {
        this.active = false;
    }

    void activate() {
        this.active = true;
    }

    boolean isActive() {
        return this.active;
    }
}
