#include <iostream>
#include <string>
using namespace std;

int binary_search(int a[], int n, int x)
{
  int left, right, mid;

  left = 0;
  right = n-1;
  while (left <= right)
  {
    mid = (left + right) / 2; // 0+3/2 =1 || 2+3/2=2 || 3+3/2=3
    if (a[mid] == x)
    {
      return mid;
    }
    if (a[mid] < x) // 10<40=true || 20<40=true || 30<40=true
    {
      left = mid + 1; // left = 1+1 =2 || 2+1=3 || 3+1=4
    }
    else
    {
      right = mid - 1;
    }
  }
  return -1;
}

int main()
{
  int myNumbers[5] = {10, 20, 30, 40, 50};
  int n = sizeof(myNumbers) / sizeof(int);
 cout << binary_search(myNumbers, n, 50);

  return 0;
}