#include <stdio.h>
#include <stdlib.h>


int main(){
    //use of malloc
    int* ptr;
    int n;
printf("enter the size of atrray you want to create");
 scanf("%d",&n);
    ptr= (int*) malloc(10*sizeof(int));

    for(int i=0;i<n;i++){

        printf("enter  the value at %d of the array is \n",i,ptr[i]);

        scanf("%d",&ptr[i]);
    }

       for(int i=0;i<n;i++){

        printf("the value at %d of the array is %d\n",i,ptr[i]);
        
       
    }

    return 0;
}