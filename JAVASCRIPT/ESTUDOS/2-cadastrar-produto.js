const produtos = [];
let continuar = true;

for (let i = 1; continuar; i++) {
  const nome = prompt(`Digite o nome do produto #${i} (ou 'fim' para encerrar): `);
  if (nome.toLowerCase() === 'fim') {
    continuar = false;
  } else {
    const preco = parseFloat(prompt(`Digite o preço do produto #${i}: `));
    produtos.push({ nome, preco });
  }
}

produtos.sort((a, b) => b.preco - a.preco);

console.log("Produtos ordenados por preço (do maior ao menor):");
produtos.forEach((produto, index) => {
  console.log(`${index + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
});