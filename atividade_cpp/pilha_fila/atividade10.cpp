#include <iostream>
#include <queue>

using namespace std;
int main(){

    queue <int> fila;
    queue <int> fila_copia;
    int x = 0;

    fila.push(1);
    fila.push(22);
    fila.push(333);
    fila.push(4444);
    fila.push(55555);


    for(int i = 0; i < 5; i++){
        if(fila.front() % 2 == 0){
            cout << fila.front() << endl;
            x = x + 1;
        }
        fila.pop();
    }
    cout << "Numero de elementos da fila par: " << x << endl;


    return 0;
}