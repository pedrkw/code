#include <iostream>

using namespace std;

// Questão 1 de Matriz

int main()
{
    int linha, coluna, valor, numero, posi_linha, posi_coluna;
    cout << "Digite a quantidade de linhas: ";
    cin >> linha;
    cout << "Digite a quantidade de colunas: ";
    cin >> coluna;
    int matriz[linha][coluna];
    "\n";
    cout << "Escolha um valor para ser procurado na matriz: ";
    cin >> numero;

    cout << endl;

    for(int i=0; i < linha; i++){
        for(int j=0; j < coluna; j++){
            cout << "Digite o valor da Matriz["<<i<<"]"<<"["<<j<<"]: ";
            cin >> valor;
            matriz[i][j] = valor;

            if (matriz[i][j] == numero){
                posi_linha = i;
                posi_coluna = j;
            }
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

    cout << "Posição do valor escolhido:\nLinha: ["<<posi_linha<<"]"<<" Coluna: ["<<posi_coluna<<"]";
    return 0;
}
