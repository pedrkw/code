#include <iostream>

using namespace std;

int main(){
    int linha, coluna, valor, soma = 0;
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

    cout << "Diagonal secundária: " ;
    for(int i=0; i < linha; i++){
        cout << matriz[i][linha - 1 - i] << "\t";
        soma = soma + matriz[i][linha - 1 - i];
            
        }

    cout << endl;

    cout << "Soma dos elementos que estão na diagonal secundária: " << soma;
    
    return 0;
}