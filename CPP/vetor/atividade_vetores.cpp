#include <iostream>

using namespace std;

int main()
{
    int soma = 0, tamanho_vetor = 0, media = 0, referencia = 0, soma2 = 0, par =0, x, y, xy, maior, posi, negativo, positivo_soma = 0;
    
    cout << "Digite o tamanho do vetor: ";
        cin >> tamanho_vetor;
   while(tamanho_vetor < 4){
        cout << "É necessário que o tamanho do vetor seja igual ou maior que 4: ";
        cin >> tamanho_vetor;
   }

    int vetor[tamanho_vetor];

    for(int i=0; i < tamanho_vetor; i++){
        cout << "Digite o valor do Vetor["<<i<<"]: ";
        cin >> vetor[i];
    }
cout << endl;
    for(int i=0; i < tamanho_vetor; i++){
         cout << "Valor do Vetor na posição ["<<i<<"]: " << vetor[i] << endl;
        soma = soma + vetor[i];
    }

    media = soma / tamanho_vetor;
    cout << "\nSoma: " << soma ;
    cout << "\nMédia: " << media;

cout << "\n";

    for(int i=0; i < tamanho_vetor; i++){
        if(vetor[i] < media){
            cout << endl << vetor[i] << " é MENOR que a média";
        }
    }

    for(int i=0; i < tamanho_vetor; i++){
        if(vetor[i] > media){
            cout << endl << vetor[i] << " é MAIOR que a média";
        }
    }

cout << endl << "\n";

    cout << "Valores inseridos na ordem INVERSA: ";
    for(int i=(tamanho_vetor-1); i >= 0; i--){
        cout << vetor[i] << "  ";
    }

cout << endl << "\n";
    cout << "Digite um número para referência: ";
    cin >> referencia;

    cout << "MENOR que a referência: ";
    for(int i=0; i < tamanho_vetor; i++){
        if(vetor[i] < referencia){
            cout << vetor[i] << " ";
        }
    }
cout << "\n";
    cout << "MAIOR que a referência: ";
    for(int i=0; i < tamanho_vetor; i++){
        if(vetor[i] > referencia){
            cout << vetor[i] << " ";
        }
    }

    for(int i=0; i < tamanho_vetor; i++){
        if (i == 0 || i == 1 || i == 5){
            soma2 = soma2 + vetor[i];
        }
    }

cout << endl << "\n";

    cout << "Soma das posições 0, 1 e 5: " << soma2;
    vetor[4] = 100;

cout << "\n";

    for(int i=0; i < tamanho_vetor; i++){
         cout << "Valor do Vetor na posição ["<<i<<"]: " << vetor[i] << endl;
        soma = soma + vetor[i];
    }
cout << endl << "\n";
    cout << "Escolha uma posição X para o vetor: ";
    cin >> x;

cout << "\n";

    cout << "Escolha uma posição Y para o vetor: ";
    cin >> y;

cout << "\n";

    xy = vetor[x] + vetor[y];
    //xy = xy + vetor[y];
    cout << "Soma das posições X e Y: " << xy << "\n";

cout << endl;

    for(int i=0; i<tamanho_vetor; i++){
        if(vetor[i]%2==0){
            par = par + 1;
            cout << endl << "O valor: " << vetor[i] << " é par";
        }
    }
    
    cout << endl << "Quantidade de pares: " << par;
    
cout << "\n";
    
    for(int i=0; i < tamanho_vetor; i++){
        if(vetor[i] > vetor[i - 1]){
            maior = vetor[i];
            posi = i;
        }
    }
    
    cout << "O MAIOR valor do vetor é "<<maior<<" e está na posição "<<posi<<" ";

cout << endl;

    for(int i=0; i < tamanho_vetor; i++){
        if(vetor[i] < 0){
            negativo = vetor[i];
            cout << "O valor "<<negativo<<" é NEGATIVO" << endl;
        }
    }

     for(int i=0; i < tamanho_vetor; i++){
        if(vetor[i] > 0){
            positivo_soma = positivo_soma + vetor[i];
        }
    }
    cout << "SOMA dos valores POSITIVOS no vetor: " <<positivo_soma<< endl;
    return 0;
}