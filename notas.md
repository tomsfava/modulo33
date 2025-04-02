# Notas
## Módulo 33 -- React Testing Library
### Aula 01 - Tipos de testes
#### **Sobre a aula**
* conceituar teste unitário;
* definir teste integrado;
* descrever teste E2E.
#### **Anotações**
Vamos aprender a criar testes para nossas aplicações front-end, testes para garantir a integridade das nossas aplicações, não apenas para garantir que a funcionalidade que implementamos funciona corretamente mas também para garantir que ela não afetou nenhuma outra parte da aplicação;  
conforme avançamos na construção de uma aplicação ou de um sistema, fazer um teste das primeiras funcionalidades fica trabalhoso, para resolver isso temos os teste unitários, por exemplo: ano passado foi escrito um teste para o feed de noticias do facebook, enquanto esse estiver funcionando, temos a garantia da integridade daquela parte da aplicação;  
vamos aprender a criar testes com duas tecnologias, o jest e o react-testing-library;  
existem três tipos de teste, o teste unitário, que olha para uma parte isolada do código, um input por exemplo, menor parte que teremos em testes;  
temos também o teste de integração, ou teste integrado, onde pegamos pequenas partes do nosso código, juntamos elas e testamos elas juntas, por exemplo um formulário;  
por fim o teste e2e end to end, ponta a ponta, é o teste mais dificil de executar, já que ele testa integração front e back;  
nesse módulo estaremos focados nos dos primeiros tipos de teste;  
### Aula 02 - Primeiros testes
#### **Sobre a aula**
* conhecer o framework Jest;
* instalar Jest no terminal e no VSCode;
* usar plugins para realizar testes;
* testar variáveis e arrays.
#### **Anotações**
Jest é a ferramenta mais popular no mercado, também foi desenvolvida pelo time do facebook, dentro da pasta do módulo criamos a pasta jest, e nela rodamos npm init, que vai criar o package.json do projeto;  
em seguida instalamos o jest com --save-dev e na propriedade "scripts" alteramos o valor de "test" para "jest";  
agora vamos criar um arquivo de calculadora js, nele criamos as funções soma, subtracao, multiplicacao e divisao e para finalizar realizamos um console.log de soma 2 e 2, rodando no node obtemos 4 no terminal;  
para criar nossos primeiros teste, devemos criar um novo arquivo: calculadora.test.js ou calculadora.spec.js, para realizar os testes vamos precisar exportar nossas funções, então no arquivo calculadora.js digitamos module.exports = {funções} e em calculadora.test.js criamos a *const* calc = require('/calculadora');  
em seguida chamamos a função test() que recebe uma string, no caso um comportamento esperado, seguido (com virgula) de uma função seta, nessa função seta criamos a *const* minhaSoma = calc.soma(2, 2) em seguida vamos usar a palavra chave expect(minhaSoma).toBe(4);  
feito isso, salvamos e rodamos npm run test, isso vai dar um retorno no terminal dizendo que o arquivo calculadora.test.js passou no teste, se alteramos os valores em soma para 2 e 3 mas mantemos o toBe com 4 o resultado é que calculadora.test.js não passou no teste, dizendo que o expected era 4 mas que o received deu 5;  
agora vamos instalar a extensão Jest (não é oficial do facebook), que executa o teste no código mesmo, sem precisar executar nenhum comando, simplesmente salvando o arquivo;  
o toBe é uma asserção, é um dos tipos de teste que pode ser feito, para que o inteliSsense sugira todos os tipos de teste devemos instalar no ambiente de desenvolvimento o '@types/jest';  
na aula o professor programou errado a multiplicação e por isso o teste apontou erro, mas no meu caso isso não aconteceu, mas é para isso que servem os testes;  
podemos agrupar testes dentro de suites, no caso fazemos testes de funcionalidades agrupadas, como por exemplo os 'testes para a calculaldora';  
além do toBe temos o toBeGreatherThan;  
agora criamos um novo arquivo 'saudacao.js' e criamos a nova função dizOla que recebe nome e retorna 'Olá ' + nome, exportamos e importamos no arquivo saudacao.test.js e criamos a suite e dentro da suite o teste com a *const* saudarMaria que roda dizOla com o nome = 'Maria' ou seja, o expect(saudarMaria).toBe('Olá Maria'), dessa forma, em 2 arquivos de teste temos 3 testes, e com o script test rodamos todos os 3;  
também podemos testar booleanos com toBeTruthy ou toBeFalsy, também podemos testar se algo está contido com toContain('Maria'), por exemplo, ou então toHaveLength(5) para arranjos ou strings;  
### Aula 03 - Testes no React
#### **Sobre a aula**
* realacionar o teste jest no react;
* conhecer a Testing Library;
* executar script de testes no terminal
* aplicar funções, métodos e atributos para a realização de testes;
* realizar a cobertura de testes.
#### **Anotações**
atualizei o cra com npm i -g create-react-app e em seguida criei o projeto testes-jest com npx create-react-app testes-jest, entrei na pasta e rodei npm start, nenhum erro até aqui;  
dentro de src temos o arquivo setupTests.js que são 4 linhas de comentário exemplificando coisas que podemos fazer com o jest no react como: expect(element).toHaveTextContent(/react/i), ou seja, permite que o jest realize testes com a sintaxe do react, além disso temos um link para o repositório no github e de código propriamente dito a importação de '@testing-library/jest-dom';  
vamos usar a familia de bibliotecas 'Testing Library' que possui versões para diferentes frameworks além do react;  
para começar o projeto removemos os arquivos css de src e suas importações em index.js e App.js, além do conteúdo da div App nesse último arquivo;  
vamos criar uma aplicação simples de lista de tarefas, teremos um input cujo valor é tarefaTemp e o onChange é setTarefaTemp(evento.target.value), um button cujo onClick roda a função cadastrarTarefa que por sua vez setTarefas(\[...tarefas, tarefaTemp]) e setTarefaTemp(''), o estado tarefas é um array vazio e o estado tarefaTemp é uma string vazia;  
por fim, abaixo desse input e botão criamos uma ul e dentro dela renderizamos tarefas.map(tarefa=>li'tarefa);  
agora vamos aprender a testar isso com o jest, o cra já cria um arquivo App.test.js que importa render e screen da testing library e o proprio App, ele testa a presença de 'learn react' case insensitive, porem apagamos tudo e vamos fazer do 0;  


