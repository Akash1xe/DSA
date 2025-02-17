#include <bits/stdc++.h>
using namespace std;

void printNtoOne(int i,int n){
if(i<1)return;
cout<< i << endl;
printNtoOne(i-1,n);
}

int main(){
    int N = 5;
    printNtoOne(N,N);
    return 0;
}