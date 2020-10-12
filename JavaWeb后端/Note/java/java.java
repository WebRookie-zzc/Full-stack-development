package Note.java;

public class java {
    public static void main(String[] args){
        getMax(3, 4);
    }

    

    public static double getMax(double d1, double d2){
        double temp = d1 - d2;
        if(temp > 0){
            System.out.println(d1);
        }else if (temp == 0){
            System.out.println("相同");
        }else{
            System.out.println(d2);
        }
        return 3.4;
    }
}
