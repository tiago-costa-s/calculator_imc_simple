# Calculadora de IMC Simples

link: https://calculator-imc-simple-c48e2b.netlify.app/


### Atenção!

Abaixo teremos dois layouts e da calculadora a versão de baixo será a primeira versão do código. E a parte de cima será
a versão refatora do código. Resolvi deixar dessa forma pois posso verificar e ver como o código evoluiu da sua primeira
versão para a versão atual, então todos os comentários e imagens da versão inicial continuaram no aqui no readme. 



### Codigo Refatorado

Realizei o refatoramento do projeto, aplicando melhorias e correções no código anterior. É interessante observar como nós evoluímos, os nossos conhecimentos e a nossa lógica, consequentemente conseguimos refletir tudo isso em nossos projetos criando códigos mais otimizados e "eficientes". Com essa nova versão fui capaz de "desacoplar" o código, criando funções independentes, e eventos separados assim facilitando o entendimento do o código e a adição de novas funções.

### Sobre as Atualizações
- Adicionado o botão "Resetar”.
- Agora é possível resetar os dados dos inputs e o resultado clicando no botão "Resetar".
- É possível acionar o cálculo do IMC pressionando a tecla "Enter" quando os inputs de altura e peso estiverem selecionados.
- O resultado da classificação/ IMC, são criados de forma dinâmica através do Javascript.
- Adicionado cores de acordo com o nível de classificação/ IMC.
- Agora é possível resetar o resultado quando os dados dos  input’s de  altura e peso forem apagados.
- Realizado ajustes de estilo. 
- Melhorias de responsividade foram aplicadas.
- Realizado melhorias no HTML retirado deixando o código mais limpo e legível.
- Removido alertas sobre dados inválidos e ausentes.

  

![](https://i.postimg.cc/HsV7s99h/calc1.png)

![](https://i.postimg.cc/nhBTRJgZ/calc2.jpg)




### Versão Antiga

Criei uma calculadora de IMC (índice de massa corporal) usando HTML, CSS e JavaScript puro. Este projeto permite que os usuários insiram seus dados de peso e altura, e então calcula e exibe o seu IMC. Além disso, a calculadora também fornece uma classificação geral da condição de peso do usuário e uma breve explicação sobre o que o IMC significa. A interface é simples e intuitiva, o que torna fácil para qualquer pessoa usar. Eu me diverti muito criando este projeto e estou ansioso para continuar aprimorando-o no futuro. Este projeto é feito com HTML, CSS e JavaScript puro, e não precisa de nenhuma biblioteca externa.

## Tecnologias
- HTML 5
- CSS 3
- Java Script


### Desktop
![](https://i.postimg.cc/Y0rMtmg3/Screenshot-400000000000000000.png)

### Mobile
![](https://i.postimg.cc/nVkGn3Px/Screenshot-4.png)


## Desafios
### Valores do tipo NaN:
  - Sobre o resultado do IMC do tipo NaN, criei uma função que verifica se calculo do IMC "isNaN()" e igual a true, caso sim a impressão do resultado atravez do innerHTML será vazio. Caso não ele retornara o valor do IMC. 
  
### Valores do tipo Infinity
- O retorno Infinity ocorre quando o campo altura não e preenchido pelo usuario e o campo peso recebe um valor qualquer. 

![](https://i.postimg.cc/Jz9jhjxM/infinity.png)

#### Solução: Realizei o tratamento do resultado do tipo Infinity utilizando uma função que verifica se o resultado atraves do "isFinite()". Agora, quando o usuário insere dados faltantes, nesse cenário o programa irá retornar a mensagem “Preencha os campos corretamente”. 

![](https://i.postimg.cc/9MktDHMK/isFinite.png)
