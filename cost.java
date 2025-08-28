import java.util.*;
import java.util.Scanner;
class cost
{
public static void main(String args[])
{
Scanner sc=new Scanner(System.in);
System.out.println("Enter the cost:");
double cost=sc.nextDouble();
System.out.println("Enter the price of item:");
int item=sc.nextInt();
System.out.println("Total cost:" +cost* item);
}
}

