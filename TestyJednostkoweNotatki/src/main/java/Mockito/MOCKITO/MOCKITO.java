package Mockito.MOCKITO;

import java.util.ArrayList;
import java.util.List;

public class MOCKITO {

    private final IDList idList;
    private List<Integer> IDSmallerThenValue;

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

}
