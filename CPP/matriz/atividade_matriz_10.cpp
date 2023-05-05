#include <iostream>

using namespace std;

int main(){
    int valor = 0;

    int matriz[3][3];
    int matriz2[3][3];

    for(int i=0; i < 3; i++){
        for(int j=0; j < 3; j++){
            cout << "Digite o valor da Matriz["<<i<<"]"<<"["<<j<<"]: ";
            cin >> valor;
            matriz[i][j]=valor;
        }
    }

    cout << endl;

    cout << "Matriz 1: \n";
    for(int i=0; i < 3; i++){
        for(int j=0; j < 3; j++){
            cout << "["<<matriz[i][j] <<"]" << "  ";
        }
        cout << endl;
    }

    cout << endl;

    for(int i=0; i < 3; i++){
        for(int j=0; j < 3; j++){
            matriz2[i][j] = matriz[i][j];
        }
    }

     cout << endl;

     cout << "Matriz 2: \n";
    for(int i=0; i < 3; i++){
        for(int j=0; j < 3; j++){
            cout << "["<<matriz[i][j] <<"]" << "  ";
        }
        cout << endl;
    }
    
    return 0;
}