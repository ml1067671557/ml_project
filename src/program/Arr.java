package program;

public class Arr {
	
 public static void main(String[] args) {
	  int[]arr= {1,2,3,4};
	  System.out.println(arr[2]);
	  change(arr);
	  System.out.println(arr[2]);
	  Class<Arr> a=Arr.class;
	  String packagename=a.getName();
	  System.out.println(packagename);
	  
	  
}

private static void change(int[]arr) {
	arr[2]=100;	
}
}
