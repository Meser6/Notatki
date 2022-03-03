package Mockito.MOCKITO;

import Mockito.VERIFY.Ints;

import java.util.ArrayList;
import java.util.List;

public class MOCKITO {

    private final IDList idList;
    private List<Integer> IDSmallerThenValue;
    private String message;

    public MOCKITO(IDList idList) {
        this.idList = idList;
    }

    void filterAllIntsSmallerThenValue(int value) {
        IDSmallerThenValue = new ArrayList<>();
        for (int a : idList.getAllIDs()) {
            if (a < value) {
                IDSmallerThenValue.add(a);
                System.out.println(a);
            }
        }
    }

    public List<Integer> getIDSmallerThenValue() {
        return IDSmallerThenValue;
    }

    void shortWay(IDList idList) {
        if (idList.defaultText != null) {
            this.message = "default message";
        }
    }

    public String getMessage() {
        return message;
    }
}
