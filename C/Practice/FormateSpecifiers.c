#include <stdio.h>

/* 
    Basic formate specifiers
    %d or %i    = int
    %f          = float
    %c          = character
    %s          = String type Text
    %lu         = long Unsigned Integer
*/

int main(){

    int wholeNumber = 5;
    float flotaingPointNumber = 12.41;
    char singleCharacter = 'F';

    printf("integer whole number %d \n", wholeNumber);
    printf("Flotaing Point Number %f \n", flotaingPointNumber);
    printf("Character %c \n", singleCharacter);




    /* Size of operators */

    int sizeOfInteger;
    printf("Size of integer: %lu", sizeof(sizeOfInteger));

    return 0;
}