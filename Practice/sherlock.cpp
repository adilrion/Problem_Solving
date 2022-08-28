#include <map>
#include <iostream>
#include <algorithm>
using namespace std;
int main() {
    int T;
    cin>>T;
    while(T--)
    {
        long n;
        map<long,long> mapCount;
        cin>>n;
        for(int i = 0 ; i < n; i++)
        {
            long k;
            cin>>k;
            long &count = mapCount[k];
            count++;
        }
        long long nTotalPairs = 0;
        map<long,long>::const_iterator itr;
        for(itr = mapCount.begin(); itr != mapCount.end(); itr++)
        {
            long nCount = itr->second;
            if(nCount > 1)
                nTotalPairs += (nCount * (nCount - 1));   
        }
        cout<<nTotalPairs<<endl;
    }
    return 0;
}