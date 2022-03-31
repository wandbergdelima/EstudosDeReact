import React, { Component } from "react";

class App extends Component {
    render() {
        const clienteJoao = {
            nome: 'João',
            idade: 37,
            compras: [
                { nome: 'Notebook', preco: '2500' },
                { nome: 'Motocicleta"', preco: '10000' },
                { nome: 'Smartphone', preco: '1500' },
                { nome: "Conjunto de panelas", preco: '2000' },
            ],
            cidade: "Belém",
        };
        const clienteMaria = {
            nome: 'Maria',
            idade: 18,
            compras: [
                { nome: 'Computador', preco: '2500' },
                { nome: 'Coletânia de livros', preco: '1000' },
                { nome: 'Smartphone', preco: '1500' },
            ],
            cidade: "Rio de Janeiro",
        };

        const nomes = [];
        nomes.push(clienteJoao.nome)
        const nomes2 = [];
        nomes2.push(clienteMaria.nome)
        return <div className=''>
            <div className='estilo'>
                <ul>
                    <li>Nome: {clienteJoao.nome}</li>
                    <li>Idade: {clienteJoao.idade}</li>
                    <li>Cidade: {clienteJoao.cidade}</li>
                </ul>

            </div>
        </div>;
    }
}

export default App;