#include <stdio.h>
int main(){

    for (int i = 0; i < 10; i++){
        if(i==4)break;
        if(i==2)continue;
        printf("%d \n", i);
    }

        return 0;
}