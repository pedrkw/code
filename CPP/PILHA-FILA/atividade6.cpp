#include <iostream>
#include <queue>

using namespace std;

int main(){

    queue <string> fila1;
    queue <string> fila2;

    fila1.push("um");
    fila1.push("dois");
    fila1.push("tres");
    fila1.push("quatro");

    fila2.push("cinco");
    fila2.push("seis");
    fila2.push("sete");

    if(fila2.size() == fila1.size()){
        cout << "Filas Iguals!" << endl;

    }else if(fila1.size() > fila2.size()){
        cout << "Fila fila1 é maior que fila fila2!";
    }else{
        cout << "Fila fila2 é maior que fila fila1!";
    }
    return 0;
}