#include <iostream>
using namespace std;

/*
Problem - 4
-----------
Chef has scored A, B,A,B, and CC marks in 33 different subjects respectively.

Chef will fail if the average score of any two subjects is less than 3535. Determine whether Chef will pass or fail.
*/

void check(int a, int b, int c)
{

    if ((a + b) / 2 >= 35 && (a + c) / 2 >= 35 && (b + c) / 2 >= 35)
    {
        cout << "Pass \n";
    }
    else
    {
        cout << "fail \n";
    }
}

int main()
{
    int n;
    cin >> n;
    while (n--)
    {
        int a, b, c;
        cin >> a >> b >> c;
        check(a, b, c);
    }

    return 0;
}
