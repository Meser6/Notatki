package java.JUnit.TIMEOUT;

import java.util.Random;

public class TIMEOUT {

    private int a;

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public void setRandomA(){
        Random random = new Random();
        a = random.nextInt(1000);
    }

    public void simulate(int p){
        for (int i = 0; i < p; i++ ){
            setRandomA();
        }
    }
}
