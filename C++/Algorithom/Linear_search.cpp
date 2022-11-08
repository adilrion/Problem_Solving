#include <bits/stdc++.h>
using namespace std;

void linear_search(int a[], int n, int x)
{
  int i;
  for (i = 0; i < n; i++)
  {
    if (a[i] == x)
    {
      cout << a[i] << "is available"
           << " : " << i << "st index";
    }
  }
  i = -1;
}

int main()
{
  int myNumbers[6] = {1, 4, 8, 10, 20, 50};
  int arrayLength = sizeof(myNumbers) / sizeof(int);
  linear_search(myNumbers, arrayLength, 4);
  return 0;
}