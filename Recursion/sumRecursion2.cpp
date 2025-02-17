#include <bits/stdc++.h>
using namespace std;

int printSum(int n)
{
    if (n == 0)
        return 0;

    return n + printSum(n - 1);
}

int main()
{
    int N = 10;
    int sum = printSum(N);

    cout << sum << endl;
    return 0;
}