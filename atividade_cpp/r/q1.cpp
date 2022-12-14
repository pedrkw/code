#include <iostream>

using namespace std;

float peso_ideal(float altura, char sexo){
    float peso;

    if(sexo == 'F' || sexo == 'f'){
        peso = 62.1 * altura - 44.7;
    } else if(sexo == 'M' || sexo == 'm'){
        peso = 72.7 * altura - 58;
    } else{
        cout << "Letra inválida";
    }
    return peso;
}

int main(){
    float altura, peso;
    char sexo;

    cout << "Digite sua altura: ";
    cin >> altura;
    cout << "Digite M ou F: ";
    cin >> sexo;

    peso = peso_ideal(altura, sexo);
    cout << "Peso ideal: " << peso;
    
    return 0;
}