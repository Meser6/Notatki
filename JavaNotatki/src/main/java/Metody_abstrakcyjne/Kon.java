package Metody_abstrakcyjne;

public class Kon extends  Zwierze{

    Kon (boolean jechac, boolean bat){
        if (jechac = false){
            stoj(bat);
        } else if (jechac = true){
            jedz();
        }
    }
    @Override
    void stoj(boolean bat) {
        System.out.println("stoje");
    }

    @Override
    void jedz() {
        System.out.println("jade");
    }
}
