# Projeto Elevador 🛗 ⬆️⬇️
### Este projeto simula o funcionamento básico de um elevador com três andares. Ao clicar em um botão numérico, o elevador se desloca visualmente para o andar correspondente.

![image](https://github.com/user-attachments/assets/0566fdc3-a18d-489e-936f-a4e15ff54a80)

![image](https://github.com/user-attachments/assets/b1ad1616-a749-4351-9712-8609ebb3633b)

![image](https://github.com/user-attachments/assets/d0f3d6ea-888c-4c69-965e-29053eb867c9)





## Tecnologias Utilizadas
- HTML5: Estrutura da página web.
- CSS3: Estilos visuais do elevador e dos botões.
- JavaScript: Manipulação de eventos e lógica de controle do elevador.
  
## Funcionalidades
- Simulação de Movimento do Elevador:
- Ao clicar em um dos botões (1, 2 ou 3), o elevador se move para o respectivo andar.
  
## Interface de Controle:
- Três botões que representam os três andares.
- Um elevador que aparece visualmente no andar correto quando um botão é clicado.
  
## Estrutura de Arquivos
- index.html: Contém a estrutura da página, incluindo os botões e a representação visual do elevador.
- style.css: Define o layout e o estilo visual dos elementos do elevador e dos botões.
- script.js: Lida com a lógica de controle do elevador, alterando sua posição com base nas interações do usuário.
  
## Como Funciona
> O arquivo HTML define a estrutura do elevador e seus controles:
> A div com a classe box-buttons contém três botões que acionam a função chooseFloor(floor) ao serem clicados.
> A div com a classe box-elevator contém três andares, cada um com uma div representando o elevador (id="elevator1", id="elevator2", id="elevator3").

## Lógica em JavaScript
> No arquivo script.js, a função chooseFloor(floor) recebe como parâmetro o número do andar e altera a exibição dos elevadores com display: block para o andar correto e display: none para os demais.

## Fluxo de Controle
> Quando o usuário clica em um botão, o evento de clique chama a função que exibe o elevador no andar correspondente e oculta nos outros.
