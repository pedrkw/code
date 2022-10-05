#include <iostream>
#include <queue>

using namespace std;
int main(){

    queue <int> fila;
    queue <int> fila2;

    fila.push(10);
    fila.push(20);
    fila.push(30);
    fila.push(40);
    fila.push(50);

    fila.swap(fila2);

    return 0;
}