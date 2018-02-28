package program;

import java.util.Scanner;

import org.omg.Messaging.SyncScopeHelper;

public class MathCase {
	public static void main(String[] args) {
		System.out.println("-------------欢迎来到数学天堂---------------");
		System.out.println("请说出你想要实现的功能");
		Scanner sc=new Scanner(System.in);
		String msg=sc.next();
		if(msg.equals("我要求一个数的平方")) {
			System.out.println("请随便输入一个数字");
			while(true) {
				int a=sc.nextInt();
				change(a);
			}			
		}
	}
	public static void change(int a) {		
		a=a*a;
		System.out.println("这个数的平方:"+a);
	}

}
