package com.vandana;

import java.util.*;

class Employee {
    int id;
    String name;
    double salary;

    // Constructor - to initialize employee details
    Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Method - to display employee details
    void displayDetails() {
        System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary);
    }
}
