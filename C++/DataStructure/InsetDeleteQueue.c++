#include <iostream>
using namespace std;
int queue[5];
int front = -1, rear = -1, n = 5;
void insertCQ(int val)
{
    if ((front == 0 && rear == n - 1) || (front == rear + 1))
    {
        cout << "Queue Overflow";
        return;
    }
    if (front == -1)
    {
        front = 0;
        rear = 0;
    }
    else
    {
        if (rear == n - 1)
            rear = 0;
        else
            rear = rear + 1;
    }
    queue[rear] = val;
}
void deleteCQ()
{
    if (front == -1)
    {
        cout << "Queue Underflow";
        return;
    }
    cout << "Element deleted from queue is : " << queue[front] << endl;
    if (front == rear)
    {
        front = -1;
        rear = -1;
    }
    else
    {
        if (front == n - 1)
            front = 0;
        else
            front = front + 1;
    }
}
void displayCQ()
{
    int f = front, r = rear;
    if (front == -1)
    {
        cout << "\n Queue is empty";
        return;
    }
    cout << "Queue elements are : ";
    if (f <= r)
    {
        while (f <= r)
        {
            cout << queue[f] << " ";
            f++;
        }
    }
    else
    {
        while (f <= n - 1)
        {
            cout << queue[f] << " ";
            f++;
        }
        f = 0;
        while (f <= r)
        {
            cout << queue[f] << " ";
            f++;
        }
    }
    cout << endl;
}
int main()
{
    int ch, val;
    cout << "\n1)Insert";
    cout << "\n2)Delete";
    cout << "\n3)Display";
    cout << "4)Exit \n";
    do
    {
        cout << "Enter choice :";
        cin >> ch;
        switch (ch)
        {
        case 1:
            cout << "Input for insertion: ";
            cin >> val;
            insertCQ(val);
            break;
        case 2:
            deleteCQ();
            break;
        case 3:
            displayCQ();
            break;
        case 4:
            cout << "Exit";
            break;
        default:
            cout << "Incorrect!";
        }
    } while (ch != 4);
    return 0;
}