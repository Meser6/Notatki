package java.Mockito.VERIFY;

public class VERIFY {

    Ints ints;

    private final int valueFromIntsClass;
    private int userValue;
    private String message;


    public VERIFY(Ints ints) {
        this.ints = ints;
        valueFromIntsClass = ints.getInts();
    }

    public void instructions() {
        if (ints.smallerThen100()) {
            tooSmallValue(valueFromIntsClass);
            ints.sendMessage();
            if (valueFromIntsClass < 50) {
                reinforcementTheMessage();
                ints.doNotSendMessage();
                ints.doNotSendMessage();
            }
        } else {
            tooBigValue(valueFromIntsClass);
            ints.sendMessage();
            if (valueFromIntsClass > 150) {
                reinforcementTheMessage();
                ints.doNotSendMessage();
            }
        }
    }

    void tooSmallValue(int userValue) {
        this.userValue = userValue += 10;
        message = "added 10 to your value";
    }

    void tooBigValue(int userValue) {
        this.userValue = userValue += 10;
        message = "subtracted 10 from your value";
    }

    void reinforcementTheMessage() {
        message = message + " !!";
    }

    public int getUserValue() {
        return userValue;
    }

    public String getMessage() {
        return message;
    }

}
