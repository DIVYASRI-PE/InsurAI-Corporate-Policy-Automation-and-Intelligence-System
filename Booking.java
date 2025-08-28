import java.util.Scanner;
class Booking 
{
public static void main(String[] args) 
{
Scanner sc = new Scanner(System.in);
System.out.print("Enter room type (Deluxe / Standard): ");
String roomType = sc.next();
System.out.print("Is it peak season? (true/false): ");
boolean peakSeason = sc.nextBoolean();
System.out.print("Enter number of nights: ");
int nights = sc.nextInt();
System.out.print("Is customer regular? (true/false): ");
boolean regular = sc.nextBoolean();
int pricePerNight = 0;
if (roomType.equalsIgnoreCase("Deluxe"))
{
if (peakSeason) 
{
pricePerNight = 5000;
}
else 
{
pricePerNight = 3500;
}
} 
else if (roomType.equalsIgnoreCase("Standard")) 
{
pricePerNight = 2000;
} 
else 
{
System.out.println("Invalid room type entered!");
sc.close();
return;
}
int total = pricePerNight * nights;
if (regular) 
{
total = total - (total * 10 / 100);  // 10% discount
}
System.out.println("\n--- Booking Summary ---");
System.out.println("Room Type: " + roomType);
System.out.println("Nights: " + nights);
System.out.println("Price per Night: ₹" + pricePerNight);
System.out.println("Total Amount: ₹" + total);
sc.close();
}
}