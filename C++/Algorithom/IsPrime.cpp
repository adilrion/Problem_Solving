/*
function name: isPrime
Parameter    : decimal number
Return type  : boolean
              return true if the argument is a prime number, else return false;
Time Complexity: O(log n)
Space Complexity: O(1)
*/
bool isPrime(int n)
{
  // 2 is the smallest prime number. any even number greater then 2 is not prime
  if (n < 2 || (n > 2 && n % 2 == 0))
    return false;

  // checking only the odd numbers upto sqrt(n)
  for (int i = 3; i * i <= n; i+=2)
    {
      if (n % i == 0)
        return false;
    }
  return true;
}
