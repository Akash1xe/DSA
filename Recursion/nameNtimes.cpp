#include <bits/stdc++.h>
using namespace std;


void printName(int cur, int lim)
{
    if(cur==lim)return;
    cout << "akash" << endl;
    printName(cur+1,lim);




}

int main()
{
    int limit = 5;
    int current = 1;
    printName(current, limit);
    return 0;
}