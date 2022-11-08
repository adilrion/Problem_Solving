#include <iostream>
using namespace std;

/* Problem - 1
Chef rented a car for a day.

Usually, the cost of the car is Rs 10 per km. However, since Chef has booked the car for the whole day, he needs to pay for at least 300 kms even if the car runs less than 300 kms.

If the car ran XX kms, determine the cost Chef needs to pay. */

int trip_km(int x)
{
    int y = 3000, per_km = 10;
    if (x <= 300)
    {
        return y;
    }
    else
    {
        return x * per_km;
    }
}

int main()
{

    int t;
    cin >> t;
    while (t--)
    {
        int n;
        cin >> n;
        cout << trip_km(n) << "\n";
    }

    return 0;
}
