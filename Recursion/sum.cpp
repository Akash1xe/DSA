#include <bits/stdc++.h>
using namespace std;

void printSum(int sum, int n)
{
    if (n < 1)
    {
        cout << sum << endl;

         return;
    }
   

    printSum(sum+1,n-1);
}

int main()
{

    int N = 5;
    printSum(0, N);
    return 0;
}