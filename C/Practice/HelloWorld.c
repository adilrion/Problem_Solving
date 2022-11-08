#include <stdio.h>
int main(){
    char string[] = "string characters";
    printf("%c \n", string[3]);
    string[0] = 'r'; // here you couldn't use Double "" quotations.
    printf("%s \n", string);

    char greetings[] = {'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!', '\0'};
    printf("\n With null terminating Characters: %s and size of %lu", greetings, sizeof(greetings));

    /* Without \0 = null terminating Characters */
    char greetings2[] = {'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!'};
    printf("\n Without Null terminating Characters:%s and size of %lu", greetings2, sizeof(greetings2));



    return 0;
}