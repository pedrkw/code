import java.util.Scanner;

class User {
    private String name;
    private int age;

    // Constructor
    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Getters
    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        // Register user
        User user = new User(name, age);

        // Display registered user's information
        System.out.println("\nRegistered User Information:");
        System.out.println("Name: " + user.getName());
        System.out.println("Age: " + user.getAge());
    }
}
