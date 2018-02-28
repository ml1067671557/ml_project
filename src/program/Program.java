package program;

public class Program {
	 public static int a=1;
	 public static int b=2;
	 public static void change(int a,int b) {
   	  a=a+b;
   	  b=b+a;
   	  System.out.println(a);
   	  System.out.println(b);
     }
	 
      public static void main(String[] args) {    	  
	
		change(a,b);
		System.out.println(a);
		System.out.println(b);
	}
     
}
