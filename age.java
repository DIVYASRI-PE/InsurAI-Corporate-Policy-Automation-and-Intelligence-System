import java.util.*;
import java.util.Scanner;
class vote
{
public static void main(String ags[])
{
Scanner sc=new Scanner(System.in);
System.out.println("Enter the age:");
int age=nextInt();
if(age>=18)
{
System.out.println("Eligible to vote");
}
else
{
System.out.println("Not eligible to vote");
}
}
}
