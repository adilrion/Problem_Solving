#include <bits/stdc++.h>
#include <string>
using namespace std;

void linear_search(int a[], int n, int x)
{
  int i;
  for (i = 0; i < n; i++)
  {
    if (a[i] == x)
    {
      cout << i << " : "<< a[i];
    }
  }
  i = -1;
  cout << "not found";
}


int main(){
  int myNumbers[6] = {1,4, 8, 10, 20, 50};
  int arrayLength = sizeof(myNumbers) / sizeof(int);
  
linear_search(myNumbers, arrayLength, 23);
  return 0;
}