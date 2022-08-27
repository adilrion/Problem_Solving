#include <bits/stdc++.h>
using namespace std;
// Greatest common divisor
int GCD(int n1, int n2)
{
    while (n1 != n2)
    {
        if (n1 > n2)
        {
            n1 -= n2;
        }
        else
        {
            n2 -= n1;
        }
    }
    return n1;
}
// another way to find Greatest common divisor
/* int GCD(int n1, int n2)
{
   return n2 ? gcd(n2, n1 % n2) : n1;
} */

int main()
{

    int n, q, a[100];
    cin >> n >> q;
    long long temp;
    for (int i = 0; i < n; ++i)
    {
        cin >> temp;
        a[i] = temp;
    }
    long long d = 0;
    for (int i = 0; i < n; ++i)
    {
        d = GCD(d, a[i] - a[1]);
    }
    while (q--)
    {
        int k;
        cin >> k;
        cout << GCD(d, a[0] + k) << '\n';
    }

    return 0;
}
