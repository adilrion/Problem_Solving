#include <iostream>
#include <string>
using namespace std;

void test(float  a, float  b, float  c)
{
    float  d = (a + b) / 2;
    if (d>c)
    {
        cout << "YES\n";
    }else{
        cout << "NO\n";
    }
    
}

int main()

{
    int t;
    cin >> t;
    while (t--)
    {
        float  a, b, c;
        cin >> a >> b>> c;
        test(a, b, c);
    }
    
    return 0;
}
