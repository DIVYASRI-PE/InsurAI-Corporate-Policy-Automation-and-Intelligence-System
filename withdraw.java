import java.util.*;
import java.util.Scanner;
class withdraw
{
public static void main(String args[])
{
Scanner sc=new Scanner(System.in);
int amount=sc.nextInt();
int balance=sc.nextInt();
if(amount%100==0)
{
if(amount<=balance)
{
System.out.println("Amount withdrawl");
}
else
{
System.out.println("Amount not withdraw");
}
}
}
}