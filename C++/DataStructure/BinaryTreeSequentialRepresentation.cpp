#include <bits/stdc++.h>
using namespace std;
int main()
{
    int tree[100], left, right, root, g, i, child, n;
    cout << "No. of generation : ";
    cin >> g;
    n = pow(2, g) - 1;
    cout << "\nEnter Tree Elements:\n";
    for (i = 1; i <= n; i++)
    {
        scanf("%d", &tree[i]);
    }
    cout << "\nEnter Address of child : ";
    cin >> child;
    root = child / 2;
    cout << "\nRoot of " << tree[child] << " is " << tree[root];
    cout << "\nEnter Address of root : ";
    cin >> root;
    left = 2 * root;
    right = (2 * root) + 1;
    if (tree[left] == 0)
        cout << "There is no Left Child\n";
    else
        cout << "\nLeft child of " << tree[root] << " is " << tree[left];
    if (tree[right] == 0)
        cout << "There is no right Child\n";
    else
        cout << "\nRight child of " << tree[root] << " is " << tree[right];
    return 0;
}
