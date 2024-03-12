#include <stdio.h>
int main(){
    int checkAddress= 30;
    printf("Address of checkAddress variable: %p", &checkAddress);
    

    /* Create pointer variable */
    int *pointer = &checkAddress;
    printf("\nAddress of new pointer variable: %d", *pointer);
    printf("\nvalue of new pointer variable: %p", checkAddress);
    return 0;
}