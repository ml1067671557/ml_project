package program;

import java.util.Scanner;

import org.omg.Messaging.SyncScopeHelper;

public class MathCase {
	public static void main(String[] args) {
		System.out.println("-------------��ӭ������ѧ����---------------");
		System.out.println("��˵������Ҫʵ�ֵĹ���");
		Scanner sc=new Scanner(System.in);
		String msg=sc.next();
		if(msg.equals("��Ҫ��һ������ƽ��")) {
			System.out.println("���������һ������");
			while(true) {
				int a=sc.nextInt();
				change(a);
			}			
		}
	}
	public static void change(int a) {		
		a=a*a;
		System.out.println("�������ƽ��:"+a);
	}

}
