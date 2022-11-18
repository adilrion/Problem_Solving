#include <bits/stdc++.h>
using namespace std;
int main()
{
    int num[100], i, j, k, n, temp, a[100];
    cout << endl
         << "Enter No. Of Elements: ";
    cin >> n;
    fstream file;
    file.open("rion.txt", ios::out | ios::in);
    cout << "Write on your file : ";
    for (i = 1; i <= n; i++)
    {
        cin >> num[i];
    }
    file << num[i] << endl;
    cout << endl
         << "Read on your file using bubble sort: ";
    for (i = 1; i <= n; i++)
    {
        file >> num[i];
    }
    for (j = 1; j <= n - 1; j++)
    {
        cout << endl
             << "Pass : " << j << endl;
        for (i = 1; i <= n - j; i++)
        {
            if (num[i] > num[i + 1])
            {
                temp = num[i];
                num[i] = num[i + 1];
                num[i + 1] = temp;
            }
            for (k = 1; k <= n; k++)
            {
                cout << num[k] << "	";
            }
            cout << endl;
        }
    }
    cout << endl
         << "Sorted List:" << endl;
    for (i = 1; i <= n; i++)
    {
        cout << num[i] << " ";
    }
    file.close();
    return 0;
}
