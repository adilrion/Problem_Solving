#include <bits/stdc++.h>
using namespace std;
int main()
{
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    int odd = 0, even = 0;
    for (int i = 0; i < n; i++)
    {
        if (arr[i] % 2 == 1)
            odd++;
        else
            even++;
    }
    cout << "Odd: " << odd;
    cout << "\nEven: " << even;
    return 0;
}
