import java.util.HashMap;
import java.util.Scanner;
import java.util.Arrays;
import java.util.Map;
import java.util.*;
import java.applet.*;
import java.awt.*;

public class LeetGrailLogin extends Applet {
   public void paint(Graphics g) {
      g.drawString("this is code from java",10,10);
   }
   public static void main(String[] args) {
      Map<String, String> UserPass = new HashMap<String,String>();
      String userinput;
      String[] arrOfStr;
      Scanner sc = new Scanner(System.in);
      UserPass.put("test", "test");
      
      System.out.println("Please enter your username");
      userinput = sc.nextLine();
      
      userinput = userinput + ":";
      
      System.out.println("Please enter your password");
      userinput = userinput + sc.nextLine(); 
      
      arrOfStr = userinput.split(":"); 
      if(UserPass.get(arrOfStr[0]) != null) {
         if(arrOfStr[1].equals(UserPass.get(arrOfStr[0]))) {
            System.out.println("Thank you for logging in! Redirecting...");
         }
         else if(arrOfStr[0] != UserPass.get(arrOfStr[0])) {
            System.out.println("Incorrect Passord");
         }
      }
   } 
}