package com.vandana;

import java.util.ArrayList;
import java.util.List;

public class EmployeeManager {
    public static void main(String[] args) {
        // Creating a list to store Employee objects
        List<Employee> employees = new ArrayList<>();

        System.out.println("Employee details are ");
        // Adding Employee objects to the list
        employees.add(new Employee(1, "Rahul", 76000));
        employees.add(new Employee(2, "Megha", 60860));
        employees.add(new Employee(3, "Vikas", 753200));

        // Displaying employee details
        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}