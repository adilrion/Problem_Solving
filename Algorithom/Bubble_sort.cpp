#include <iostream>
using namespace std;

void bubble_sort(int a[], int n)
{
    int i, j, temp;
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n - i - 1; j++)
        {
            if (a[j] < a[j + 1])
            {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
           
        }
         cout << a[j] << " ";
    }
}

int main()
{
    int a[5] = {10, 2, 1, 4, 0};
    int n = sizeof(a) / sizeof(int);
    bubble_sort(a, n);
    return 0;
}
