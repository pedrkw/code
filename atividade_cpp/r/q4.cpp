#include <iostream>
#include <list>
#include <algorithm>

using namespace std;

int main(){
    list<int> valores, valores2;
    list<int>::iterator elemento;

    valores.push_front(1);
    valores.push_front(2);
    valores.push_front(3);
    valores.push_front(4);
    valores.push_front(5);

    valores2.push_front(6);
    valores2.push_front(7);
    valores2.push_front(8);
    valores2.push_front(9);
    valores2.push_front(10);
    
        // procurar elemento na lista
    elemento = find(valores.begin(), valores.end(), 4);
    if(*elemento == 4) {
        cout << "Elemento encontrado!" << endl;
    } else {
        cout << "Elemento não encontrado!" << endl;
    }

    cout << "Quantidade de elementos antes do merge (segunda lista): " << valores2.size() << endl;

    // merge entre duas listas
    valores2.merge(valores);
    cout << "Quantidade de elementos depois do merge (segunda lista): " << valores2.size() << endl;

    // ordenar uma lista em ordem crescente
    valores2.sort();
    int tamanho = valores2.size();
    for(int i=0 ; i < tamanho; i++){
        cout << valores2.front() << endl;
        valores2.pop_front();
    }

    return 0;
}
