#include <iostream>
#include <stack>
#include <queue>

using namespace std;
int main(){

    queue<int> fila;

    int menor, maior = 0;
    int media = 0;

    fila.push(10);
    fila.push(20);
    fila.push(30);
    fila.push(40);
    fila.push(50);

    menor = fila.front();
    for(int i = 0; i < 5; i++){

        if(fila.front() > maior){
            maior = fila.front();
        }
        if(fila.front() < menor){
            menor = fila.front();
        }
        media = media + fila.front();
        fila.pop();
    }

    cout << "Maior elemento da fila: "<< maior << endl;
    cout << "Menor elemento da fila: "<< menor << endl;
    cout << "Média dos elementos da fila: " << media / 5 << endl;
 


    return 0;
}