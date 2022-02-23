package JUnit.MULTI;

import java.util.ArrayList;
import java.util.List;

public class MULTI {

   private List<Integer> list = new ArrayList<>();

    void addNumberToList(int number){
        list.add(number);
    }

    void cleanList(){
        list.clear();
    }

    public List<Integer> getList() {
        return list;
    }


}
