#include<bits/stdc++.h>
using namespace std;

void printOnetoN(int i,int n){
if(i<1)return;
printOnetoN(i-1,n);
cout<<i<<endl;
}

int main(){
    int N=5;
    printOnetoN(N,N);
    return 0;
}
