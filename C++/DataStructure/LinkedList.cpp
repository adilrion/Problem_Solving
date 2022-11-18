#include <bits/stdc++.h>
using namespace std;
int main()
{
    struct node
    {
        int num;
        struct node *ptr;
    };
    typedef struct node NODE;
    NODE *head, *first, *temp = 0;
    int count = 0;
    int choice = 1;
    first = 0;
    while (choice)
    {
        head = (NODE *)malloc(sizeof(NODE));
        cout << "Enter the data item : ";
        cin >> head->num;
        if (first != 0)
        {
            temp->ptr = head;
            temp = head;
        }
        else
        {
            first = temp = head;
        }
        cout << "Do you want to continue(Type 0 or 1)?\n";
        cin >> choice;
    }
    temp->ptr = 0;
    temp = first;
    cout << "\nstatus of the linked list is\n";
    while (temp != 0)
    {
        cout << temp->num << " => ";
        count++;
        temp = temp->ptr;
    }
    cout << "NULL\n";
    cout << "No. of nodes in the list : " << count;
}
