package Java.DOSTEP;

public class BankAccount implements Account, BankTransfer {
    private int balance;

    @Override
    public void deposit(int amount) {
        balance += amount;
    }

    @Override
    public void withdraw(int amount) {
        balance -= amount;
    }

    @Override
    public void transfer(BankAccount from, BankAccount to, int amount) {
        from.balance -= amount + 1;
        to.balance += amount;
    }

    public int getBalance() {
        return balance;
    }
}
