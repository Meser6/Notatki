package Mockito.MOCKITO;

import java.util.ArrayList;
import java.util.List;

public class MOCKITO {

    private final IDList idList;
    private List<Integer> IDSmallerThenFive;
    private List<Integer> IDSmallerThenTen;

    public MOCKITO(IDList idList) {
        this.idList = idList;
    }

    void filterAllIntsSmallerThenFive() {
        IDSmallerThenFive = new ArrayList<>();
        for (int a : idList.getAllIDs()) {
            if (a < 5) {
                IDSmallerThenFive.add(a);
                System.out.println(a);
            }
        }
    }


    void filterAllIntsSmallerThenTen() {
        IDSmallerThenTen = new ArrayList<>();
        for (int a : idList.getAllIDs()) {
            if (a < 10) {
                this.IDSmallerThenTen.add(a);
            }
        }
    }

    public List<Integer> getIDSmallerThenFive() {
        return IDSmallerThenFive;
    }

    public List<Integer> getIDSmallerThenTen() {
        return IDSmallerThenTen;
    }
}
