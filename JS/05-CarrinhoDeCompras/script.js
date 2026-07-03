const produtos = 
[
    {
        id: 1,
        nome: "Mouse",
        preco: 49.90,
        descricao: "Mouse super cheio de grandes e poderosos LEDs",
        imagem: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?q=80&w=1170",
    },

    {
        id: 2,
        nome: "Teclado",
        preco: 159.9,
        descricao: "Teclado mecânico cheio de botões malucos",
        imagem: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=880",
    },

    {
        id: 3,
        nome: "Monitor",
        preco: 959.9,
        descricao: "Monitor mega blaster gigantosférico",
        imagem: "https://plus.unsplash.com/premium_photo-1680721575881-6fad8bf84f51?q=80&w=1136",
    },
];

const produtosSelect = document.getElementyById("produto");

// produtosSelect = <select name="produto" id="produto"></select>

function carregarProdutos()
{
    produtosSelect.innerHTML = "";

    produtos.forEach((produto) =>
    {
        const option = document.createElement("option");
        option.value = produto.id;
        option.textContent = produto.nome;
        // <option value="1">Mouse</option>
        produtosSelect.appendChild(option);
        // <select name="produto" id="produto">
        //      <option value="1">Mouse</option>
        //      <option value="2">Teclado</option>
        //      <option value="3">Monitor</option>
        // </select>
    });
}

carregarProdutos();