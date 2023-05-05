#include <iostream>

using namespace std;

struct Aluno{
    string nome;
    int matricula;
    string curso;

    void inserir_dados(string stnome, int stmatricula, string stcurso){
        nome = stnome;
        matricula = stmatricula;
        curso = stcurso;
    }

    void imprimir_dados(){
    cout << "\nNome...:" << nome << "\n";
    cout << "\nMatricula...:" << matricula << "\n";
    cout << "\nCurso...:" << curso << "\n";
    }

};

int main(){
    Aluno *alunos = new Aluno[5];
    Aluno aluno1, aluno2, aluno3, aluno4, aluno5;
    alunos[0] = aluno1;
    alunos[1] = aluno2;
    alunos[2] = aluno3;
    alunos[3] = aluno4;
    alunos[4] = aluno5;

    alunos[0].inserir_dados("Pedro", 01, "SI");
    alunos[1].inserir_dados("Gabriel", 02, "SI");
    alunos[2].inserir_dados("Fernanda", 03, "SI");
    alunos[3].inserir_dados("Jorge", 04, "SI");
    alunos[4].inserir_dados("Fernando", 05, "SI");

    for(int i=0; i < 5; i++){
        alunos[i].imprimir_dados();
    }

    return 0;
}
