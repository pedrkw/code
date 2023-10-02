#include <iostream>

using namespace std;

int main()
{
    int linha, coluna, valor, contador=0;
    cout << "Digite a quantidade de linhas: ";
    cin >> linha;
    cout << "Digite a quantidade de colunas: ";
    cin >> coluna;
    int matriz[linha][coluna];

    for(int i=0; i < linha; i++){
        for(int j=0; j < coluna; j++){
            cout << "Digite o valor da Matriz["<<i<<"]"<<"["<<j<<"]: ";
            cin >> valor;
            matriz[i][j]=valor;
        }
    }

    cout << endl;

     for(int i=0; i < linha; i++){
        for(int j=0; j < coluna; j++){
            cout << "["<<matriz[i][j] <<"]" << "\t";
        }
        cout << endl;
    }

    cout << endl;
    
    for(int i=0; i < linha; i++){
        for(int j=0; j < coluna; j++){
            if(matriz[i][j] > 10){
                contador = contador + 1;
            }
        }
    }
    cout << "Quantidade de valores maiores que 10: " << contador;

    return 0;
}
