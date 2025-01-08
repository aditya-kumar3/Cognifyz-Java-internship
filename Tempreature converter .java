import java.util.*;

public class CtoF {

    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        double cel,fah;
        
        //Getting input Celsius Tempreture by user
        System.out.print("\nEnter Tempreture in Celsius: ");
        cel=scan.nextDouble();
        
        //Converting Celsius to fahrenheit
        fah=1.8*cel+32;
        
        //Showing Fahrenheit Tempreture to user
        System.out.println("\nFahrenheit : "+fah);

    }
}
