#include<stdio.h>


void noReturnFunctions(){
    printf("Hello im the next don of you country\n");
}


void withParameters(char data[]){
    printf("Hello I'm %s \n", data);
}

int main(){
    noReturnFunctions();
    withParameters("Adil Mahmoud Rion");
    withParameters("your bap");
    return 0;
}