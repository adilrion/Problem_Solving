#include <bits/stdc++.h>
using namespace std;
int main()
{
    int array[100], position, c, n, value;
    cout << "How many value Store in array: ";
    cin >> n;
    cout << "Enter Integer Value:" << endl;
    for (c = 0; c < n; c++)
    {
        cin >> array[c];
    }
    cout << "Where you wish to insert an element:";
    cin >> position;
    cout << "Enter the value to insert: ";
    cin >> value;
    for (c = n - 1; c >= position - 1; c--)
    {
        array[c + 1] = array[c];
    }
    array[position - 1] = value;
    cout << "Resultant array is\n"
         << endl;
    for (c = 0; c <= n; c++)
    {
        cout << array[c] << endl;
    }
    return 0;
}
