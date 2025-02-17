#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define NUM_SUBJECTS 5
#define MAX_STUDENTS 100

// Structure to hold student data
typedef struct {
    int id;
    char name[50];
    int marks[NUM_SUBJECTS];
    float gpa;
} Student;

// Function to calculate GPA
float calculateGPA(int marks[]) {
    float total = 0;
    for (int i = 0; i < NUM_SUBJECTS; i++) {
        total += marks[i];
    }
    return total / (NUM_SUBJECTS * 10); // Assuming GPA is out of 10
}

// Function to generate a transcript for a student
void generateTranscript(Student student) {
    printf("\nStudent ID: %d\n", student.id);
    printf("Student Name: %s\n", student.name);
    printf("Marks:\n");
    for (int i = 0; i < NUM_SUBJECTS; i++) {
        printf("Subject %d: %d\n", i + 1, student.marks[i]);
    }
    printf("GPA: %.2f\n", student.gpa);
}

// Function to find and print the top 3 students
void printTop3Students(Student students[], int numStudents) {
    // Sort students by GPA in descending order
    for (int i = 0; i < numStudents - 1; i++) {
        for (int j = i + 1; j < numStudents; j++) {
            if (students[i].gpa < students[j].gpa) {
                Student temp = students[i];
                students[i] = students[j];
                students[j] = temp;
            }
        }
    }

    // Print top 3 students
    printf("\nTop 3 Students:\n");
    for (int i = 0; i < 3 && i < numStudents; i++) {
        generateTranscript(students[i]);
    }
}

int main() {
    Student students[MAX_STUDENTS];
    int numStudents = 0;

    // Input student data
    printf("Enter the number of students: ");
    scanf("%d", &numStudents);

    for (int i = 0; i < numStudents; i++) {
        printf("\nEnter details for student %d:\n", i + 1);
        printf("ID: ");
        scanf("%d", &students[i].id);
        printf("Name: ");
        scanf("%s", students[i].name);
        printf("Marks for 5 subjects:\n");
        for (int j = 0; j < NUM_SUBJECTS; j++) {
            printf("Subject %d: ", j + 1);
            scanf("%d", &students[i].marks[j]);
        }
        students[i].gpa = calculateGPA(students[i].marks);
    }

    // Generate transcripts for all students
    for (int i = 0; i < numStudents; i++) {
        generateTranscript(students[i]);
    }

    // Print top 3 students
    printTop3Students(students, numStudents);

return 0;
}