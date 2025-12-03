/*const container = document.getElementById("catalogo");

var itens = [];

function CriaCards()
{
  fetch("catalogo.json")
    .then(response => response.json())
    .then(data => {
      //const container = document.getElementById("catalogo");
  
      data.velas.forEach(vela => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <img src="${vela.imagem}" alt="${vela.nome}">
          <h3>${vela.nome}</h3>
          <p>${vela.descricao}</p>
          <p><strong>R$ ${vela.preco.toFixed(2)}</strong></p>
          <button>Comprar</button>
        `;
        container.appendChild(card);

        itens.push(vela);
        console.log(itens);
      });
    });
}
CriaCards();
  //tentativa de barra de pesquisa




document.getElementById("searchBar").addEventListener("blur", pesquisar);

function pesquisar()
{
  var input = document.getElementById("searchBar").value;
  console.log("input= ", input);
  container.innerHTML = "";

  var itens_pesquisa = itens.filter(function(itens) {
    return 
  });
  itens_pesquisa.forEach((itens_pesquisa) => CriaCards);
}*/


fetch("catalogo.json")
  .then(response => response.json())
  .then(data => {
    const velas = data.velas;
    const container = document.getElementById("catalogo");
    const searchBar = document.getElementById("searchBar");

    // Função para mostrar as velas na tela
    function exibirVelas(lista) {
      container.innerHTML = "";
      lista.forEach(vela => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <img src="${vela.imagem}" alt="${vela.nome}">
          <h3>${vela.nome}</h3>
          <p>${vela.descricao}</p>
          <p><strong>R$ ${vela.preco.toFixed(2)}</strong></p>
          <a  href="https://wa.me/988302496" ><button>Comprar</button></a>
        `;
        container.appendChild(card);
        });
    }

    // Mostra todas no início
    exibirVelas(velas);

    // Filtra conforme o usuário digita
    searchBar.addEventListener("input", e => {
      const termo = e.target.value.toLowerCase();
      const resultado = velas.filter(vela =>
        vela.nome.toLowerCase().includes(termo) ||
        vela.descricao.toLowerCase().includes(termo)
      );
      exibirVelas(resultado);
    });
  })
  .catch(error => console.error("Erro ao carregar JSON:", error));
