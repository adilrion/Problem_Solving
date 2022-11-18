#include <bits/stdc++.h>
using namespace std;
int main()
{
    int i, n, loc, e;
    char a[100][100], item[15];
    cout << "\nEnter Number Of Elements : ";
    cin >> n;
    cout << "\nEnter List : \n";
    for (i = 1; i <= n; i++)
    {
        cout << "A [" << i << "] : ";
        cin >> a[i];
    }
    for (;;)
    {
        cout << "\nEnter Inserting Location : ";
        cin >> loc;
        cout << "\nEnter Inserting Item : ";
        cin >> item;
        for (i = n; i >= loc; i--)
        {
            strcpy(a[i + 1], a[i]);
        }
        strcpy(a[loc], item);
        n = n + 1;
        cout << "\nList after Insert :";
        for (i = 1; i <= n; i++)
        {
            cout << "\nA [" << i << "] = " << a[i];
        }
        cout << "\n\nPress any value for exit and 1 for continue: ";
        cin >> e;
        if (e != 1)
            return 0;
    }
    return 0;
}
