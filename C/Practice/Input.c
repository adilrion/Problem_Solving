#include <stdio.h>
int main(){
    int getData;
    printf("Add yor roll number: ");
    scanf("%d", &getData);
    printf("\nYour Roll Number is : %d", getData);




    /* get user input as a string */
    int getStringData[30];
    printf("\nAdd your name: ");
    scanf("%s", getStringData);
    printf("\nYour name is: %s", getStringData);

    return 0;
}