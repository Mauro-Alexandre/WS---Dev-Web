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
const preview = document.getElementById("preview");
const quantidadeInput = document.getElementById("quantidade");
const carrinhoElemento = document.getElementById("carrinho");
const totalCarrinho = document.getElementById("total-valor");
const modal = document.getElementById("modalProduto");

function abrirModal()
{
    modal.showModal();
}

function fecharModal()
{
    modal.Close();
}

//Coloca o nome dos produtos na listbox

function carregarProdutos()
{
    produtosSelect.innerHTML = "";

    produtos.forEach((produto) =>
    {
        const option = document.createElement("option");

        option.value = produto.id;
        option.textContent = produto.nome;
        produtosSelect.appendChild(option);
    });

    mostrarPreview
}

//Busca o item, seleciona e compara com o item do vetor

function pegarProduto()
{
    const id = Number(produtoSelect.value);
    return produtos.find((produto) => produto.id === id);
}

//Apresenta um preview do produto na seleção do listbox

function mostrarPreview()
{
    const produtos = pagarProduto();

    if (!produto)
    {
        preview.innerHTML = "<p>Nenhum produto selecionado</p>"
        return;
    }
    else
    {
        preview.innerHTML = 
        `
            <div class="info-imagem">
                <img src="${produtos.imagem}" alt="${produtos.nome}" />
            </div>

            <div class="info-dados">
                <h3>${produtos.nome}</h3>

                <p>${produtos.descricao}</p>
                <p class="dados-price">${produtos.preco}</p>
            </div>';
        `;
    }
}

//Formata o valor para moeda real

function formatarMoeda(valor)
{
    return valor.toLocalString("py-BR", 
    {
        style: "currency",
        currency: "BRL",
    });
}

//Adiciona o id e quantidade no produto a um vetor

function adicionarProduto()
{
    const produto = pegarProduto();
    const quantidade = Number(quantidadeImput.value);
    const itemExistente = carrinho.find(item => item.id == produto.id);

    if (!produto || quantidade < 1)
    {
        alert("Selecione um produto e uma quantidade válida");
        return;
    }

    if (itemExistente)
    {
        itemExistente.quantidae += quantidade;
    }
    else
    {
        carrinho.push
        ({
            id: produtos.id,
            quantidade: quantidade
        });
    }

    quantidadeInput.value = 1

    renderizarCarrinho()
}

//Apresentar produtos inseridos no carrinho no HTML

function renderizarCarrinho()
{
    carrinhoElemento.innerHTML = "";

    if (carrinho.length === 0)
    {
        carrinhoElemento.innerHTML = "<p>Seu carrinho está vazio</p>";
        totalCarrinho.textContent = formatarMoeda(0);
        return;
    }

    let total = 0;

    carrinho.forEach(item =>
        {
            const produto = produtos.find(produto => produto.id === item.id);

            if(!produto) return;

            const subtotal = produto.preco * item.quantidade;
            total += subtotal;
    

        //Criar div para o HTML div carrinho

        const div = document.createElement("div");
        div.className = "carrinho-item";

        div.innerHTML =
        `
            <div class="item-imagem">
             <img src="${produto.imagem}" alt="${produto.nome}" />
            </div>
            <div class="item-dados">
             <h3>${produto.nome}</h3>
            <p>${formatarMoeda(produto.preco)}</p>

            <div class="item-quantidade">
                <button class="quantidade-remover" onclick="alterarQuantidade(${produto.id})">-</button>
                <p>${item.quantidade}</p>
             <button class="quantidade-adicionar" onclick="alterarQuantidade(${produto.id})">+</button>
            </div>
            </div>

            <div class="item-subtotal">
                <p>${formatarMoeda(subtotal)}</p>
                <br /><br />
                <button onclick="removerItem(${produto.id})">Remover</button>
         </div>
        `;
        
        carrinho.appendChild(div);
    });

    totalCarrinho.textContent= formatarMoeda(total);
}

function alterarQuantidade(id)
{
    const item = carrinho.find(item => item.id === id);

    if (!item) return;

    item.quantidade += valor
    
    if(item.quantidade <= 0)
    {
        carrinho = carrinho.filter(item => item.id !== id);
    }

    renderizarCarrinho();
}

function removerItem(id)
{
    carrinho = carrinho.filter(item => item.id !== id);

    renderizarCarrinho();
}


function limparCarrinho()
{
    carrinho = [];
    renderizarCarrinho();
}

function salvarProduto() 
{
    const nome = document.getElementById("novoNome").value.trim();
    const preco = Number(document.getElementById("novoPreco").value);
    const descricao = document.getElementById("novaDescricao").value.trim();
    const imagem = document.getElementById("novaImagem").value.trim();
   
    if (!nome || !preco || !descricao || !imagem) 
    {
      alert("Preencha todos os campos.");
      return;
    }
   
    const novoProduto =
    {
      id: Date.now(),
      nome: nome,
      preco: preco,
      descricao: descricao,
      imagem: imagem
    };
   
    produtos.push(novoProduto);
   
    document.getElementById("novoNome").value = "";
    document.getElementById("novoPreco").value = "";
    document.getElementById("novaDescricao").value = "";
    document.getElementById("novaImagem").value = "";
   
    carregarProdutos();
    fecharModal();
}

carregarProdutos();
renderizarCarrinho();
produtosSelect.addEventListener("change", mostrarPreview);