#include <iostream>
#include <stack>

using namespace std;

int main(void)
{

  string text;
  bool palindromo = true;
  stack <string> word;

  cout << "Digite uma palavra : ";
  cin >> text;

  word.push(text);

  int length = text.length();

  for (int i = length / 2; i > 0; i--)
  {
    if (text[i] != text[length - i - 1])
    {
      palindromo = false;
      break;
    }
  }
  cout << endl
       << (palindromo ? "É palíndromo" : "não é palíndromo");

  cout << endl;
}