#include <bits/stdc++.h>
using namespace std;

void backtrackNtoOne(int i,int n){
    if(i>n)return;
    backtrackNtoOne(i+1,n);
    cout << i <<endl;

}

int main(){
    int N=5;
    backtrackNtoOne(1,N);

    return 0;
}