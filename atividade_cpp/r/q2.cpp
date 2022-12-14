#include <iostream>

using namespace std;

float somatorio(float v[5]){
    float soma = 0;

    for(int i=0; i < 5; i++){
        soma = soma + v[i];
    }
    return soma;
}

int main(){
    float v[5];
    float n = 0, soma = 0;

    for(int i=0; i < 5 ; i++){
        cout << "Digite um valor: ";
        cin >> n;
        v[i] = n; 
    }

    soma = somatorio(v);
    cout << "Somatório do vetor: " << soma << endl;

    return 0;
}
