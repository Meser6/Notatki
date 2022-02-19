package Java.DOSTEP;

public class DOSTEP {
    /*
    https://www.samouczekprogramisty.pl/modyfikatory-dostepu-w-jezyku-java/
Napisz program, który będzie symulował działanie banku. Zaimplementuj następujące interfejsy:

public interface Account {
    void deposit(int amount);
    void withdraw(int amount);
}
public interface BankTransfer {
    void transfer(BankAccount from, BankAccount to, int amount);
}
Bank przeprowadzający operację przesyłu środków pobiera stałą opłatę 1zł od nadawcy przelewu. Jakich modyfikatorów dostępu użyjesz? Dlaczego akurat tych?
     */

    public static void main(String[] args) {
        BankAccount first = new BankAccount();
        BankAccount second = new BankAccount();

        first.deposit(1000);
        second.deposit(5000);
        System.out.println("first balance " + first.getBalance());
        System.out.println("second balance " + second.getBalance());

        first.withdraw(100);
        System.out.println("first balance " + first.getBalance());
        second.withdraw(1000);
        System.out.println("second balance " + second.getBalance());

        first.transfer(second, first, 1000);
        System.out.println("first balance " + first.getBalance());
        System.out.println("second balance " + second.getBalance());
    }
}
