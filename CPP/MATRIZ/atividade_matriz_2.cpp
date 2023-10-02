#include <iostream>

using namespace std;

int main()
{
    int linha, coluna;
    cout << "Digite a quantidade de linhas: ";
    cin >> linha;
    cout << "Digite a quantidade de colunas: ";
    cin >> coluna;
    int matriz[linha][coluna];

    cout << endl;

    for(int i=0; i < linha; i++){
        for(int j=0; j < coluna; j++){
            if(i == j){
                matriz[i][j] = 1;
            } else {
                matriz[i][j] = 0;
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

    return 0;
}
