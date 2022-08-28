#include <iostream>
using namespace std;

void selection_short(int a[], int n)
{
    int i, j, min_index, temp;
    for (i = 0; i < n; i++)
    {
        min_index = i; // 0
        for (j = i + 1; j < n; j++)
        {
            if (a[j] < a[min_index]) // min_index =1
            {
                min_index = j;
            }
        }
        cout << a[min_index] << " ";
        if (min_index != i)
        {
            temp = a[i];
            a[i] = a[min_index];
            a[min_index] = temp;
        }
        
    }
}
int main()
{
    int a[6] = {42, 1, 5, 10, 5, 8};
    int n = sizeof(a) / sizeof(int);
    selection_short(a, n);
}