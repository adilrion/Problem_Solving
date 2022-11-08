#include <bits/stdc++.h>
using namespace std;

int main()
{
    int d;
    long long int n;
    while (n != 0)
    {
        cin >> n;
        if (n == 0)
        {
            break;
        }
        d = n % 10;
        n = int(n / 10) - 5 * d;
        if (n % 17 == 0)
        {
            cout << 1 << endl;
        }
        else
            cout << 0 << endl;
    }
    return 0;
}