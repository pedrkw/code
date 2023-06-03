#include <iostream>
#include <stack>

using namespace std;

int main()
{

  stack <int> numeros;

  numeros.push(1);
  numeros.push(2);
  numeros.push(3);
  numeros.push(4);

  for(int i=0; i < 4; i++){
    numeros.pop();
  }

  numeros.push(1);
  numeros.push(3);
  numeros.push(4);
  numeros.push(2);


  while(!numeros.empty()){
      cout << numeros.top() << " ";
      numeros.pop();
  }

  return 0;
}