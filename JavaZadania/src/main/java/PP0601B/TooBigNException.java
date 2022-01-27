package PP0601B;

public class TooBigNException extends Exception {

    @Override
    public String getMessage() {
        return "N must be smaller then 100000";
    }
}
