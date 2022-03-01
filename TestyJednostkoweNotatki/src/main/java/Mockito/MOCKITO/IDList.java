package Mockito.MOCKITO;

import java.util.List;

//Jest to "udawana baza danych"
//"łaczy" się ona z baza, pobiera id i dopisuje do listy allIDs

public class IDList {

    private List<Integer> allIDs;

    public List<Integer> getAllIDs() {
        return allIDs;
    }

    public int nothing(IDList idList) {
        return  5;
    }

    public boolean nothingButWithBoolean(boolean something) {
        return true;
    }
}
