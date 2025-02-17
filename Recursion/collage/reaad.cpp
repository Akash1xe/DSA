#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

void countFile(const char *filename, int *lines, int *words, int *characters) {
    FILE *file = fopen(filename, "r");
    if (file == NULL) {
        printf("Error opening file!\n");
        return;
    }

    char *buffer = NULL;
    size_t bufferSize = 0;
    ssize_t bytesRead;

    *lines = *words = *characters = 0;
    int inWord = 0;

    while ((bytesRead = getline(&buffer, &bufferSize, file)) != -1) {
        (*lines)++;
        *characters += bytesRead;

        for (size_t i = 0; i < bytesRead; i++) {
            if (isspace(buffer[i])) {
                if (inWord) {
                    (*words)++;
                    inWord = 0;
                }
            } else {
                inWord = 1;
            }
        }
    }
    
    if (inWord) {
        (*words)++;
    }

    free(buffer);
    fclose(file);
}

int main() {
    const char *filename = "example.txt";
    int lines, words, characters;

    countFile(filename, &lines, &words, &characters);

    printf("Lines: %d\n", lines);
    printf("Words: %d\n", words);
    printf("Characters: %d\n", characters);

    return 0;
}
