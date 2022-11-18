#include <bits/stdc++.h>
using namespace std;
int main()
{
    int a[50], i, n, item, loc = 0;
    cout << "\nEnter Number Of Elements : ";
    cin >> n;
    cout << "\nEnter List : \n";
    for (i = 1; i <= n; i++)
    {
        cout << "A [" << i << "] : ";
        cin >> a[i];
    }
    cout << "\nEnter Searching Item : ";
    cin >> item;
    for (i = 1; i <= n; i++)
    {
        if (item == a[i])
        {
            loc = i;
            break;
        }
    }
    if (loc == 0)
    {
        cout << "\nAbsent";
    }
    else
    {
        cout << "\nPresent at Location : " << loc;
    }
    return 0;
}
