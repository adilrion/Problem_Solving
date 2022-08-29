#include <iostream>
using namespace std;

void insertion_sort(int a[], int n)
{

    int i, j, item;
    for (i = 1; i < n; i++)
    {
        item = a[i];
        j = i - 1;
        while (j >= 0 && a[j] > item)
        {
            a[j + 1] = a[j];
            j = j - 1;
        }
        cout << a[j];
        a[j + 1] = item;
    }
}

int main()
{
    int a[5] = {10, 2, 1, 4, 0};
    int n = sizeof(a) / sizeof(int);
    insertion_sort(a, n);
    return 0;
}
