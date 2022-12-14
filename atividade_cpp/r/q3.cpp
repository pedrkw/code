#include <iostream>

using namespace std;

int fatorial(int n){
    
    int fat = 1;
    for(int i = 1; i <= n; i++){
        fat = fat * i;
    }
    return fat;
}

int main(){
    int n = 0, fat = 1;

    cout << "Digite um valor: ";
    cin >> n;
    fat = fatorial(n);
    cout << "Fatorial: " << fat << endl;
    
    return 0;
}
