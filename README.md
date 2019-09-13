<p align="center">
  <img alt="Ícone Condicionais" src="https://user-images.githubusercontent.com/29297788/64584380-dd0b2500-d36a-11e9-9bb6-e551e0d796a0.png" />
</p>

<h1 align="center">
  Exercícios do eBook "4 Dicas Práticas para Escrever Condicionais Eficientes em JavaScript"
</h1>

## Passo-a-passo para Baixar e Entregar os Exercícios

<!-- LINKAR ÂNCORAS AQUI -->
- [Como Configurar o Ambiente](#-)

## 💻 Como Configurar o Ambiente

1. **Baixe e instale o [Git](https://git-scm.com/)**

- Verifique se ele foi instalado corretamente, executando este comando no terminal:

```shell
git --version
```

- Verifique se o retorno foi o número da versão, como na imagem:

![git-version](https://user-images.githubusercontent.com/29297788/64746071-a0613a00-d4e0-11e9-9da0-40c15fd927a4.jpg)

2. **Baixe e instale o [Node](https://nodejs.org/en/)**

- Verifique se ele foi instalado corretamente, executando este comando no terminal:

Execute este comando no terminal:

```shell
node -v
```

- Verifique se o retorno foi o número da versão, como na imagem:

![console-node](https://user-images.githubusercontent.com/29297788/64584587-bc8f9a80-d36b-11e9-9687-7f1ccd9fc660.jpg)

## ⬇️ Como Baixar os Exercícios

#### 1. **No canto superior direito da página, clique no botão "watch" e selecione a opção "watching"**

Isso fará com que você seja notificado por email, caso algum exercício passe por alguma modificação:

![botao-watch](https://user-images.githubusercontent.com/55263552/64829838-58a3e680-d5a4-11e9-99e7-d88507bdda93.jpg)

#### 2. **Dê um Fork no Repositório**

O que é um "Fork"?

É uma cópia do repositório em questão para a sua conta do GitHub =)

No canto superior direito da página, clique no botão "Fork":

![botao-fork](https://user-images.githubusercontent.com/55263552/64829904-9e60af00-d5a4-11e9-9ebc-bcd5f1c1d102.jpg)

Ao clicar no botão, uma tela como essa será exibida por poucos segundos:

![forking](https://user-images.githubusercontent.com/55263552/64829957-d10aa780-d5a4-11e9-97f4-799262153327.jpg)

E em seguida, você será redirecionado para a página da sua cópia do repositório.

Note que abaixo do nome do repositório é mostrado o repositório original, ou seja, de onde ele foi forkado:

![forked-from](https://user-images.githubusercontent.com/55263552/64830045-1038f880-d5a5-11e9-8621-5d356d4cfa80.jpg)

A ideia aqui é resolver todos os exercícios e enviar o pull request para o repositório original.

Você não tem permissão para comitar diretamente no repositório original, então você precisa forkar e alterar no seu repo local, pra então enviar os exercícios feitos.

#### 3. **Clone o Repositório**

Agora você precisa baixar os arquivos do repositório para que você possa alterar.

A primeira coisa a fazer é copiar a URL do repositório daqui:

![cloning](https://user-images.githubusercontent.com/55263552/64830100-5726ee00-d5a5-11e9-8e28-97ad09dcb0c7.jpg)

Agora, abra seu terminal, vá para a pasta em que o projeto deve ser baixado e execute o seguinte comando: 

```shell
git clone [URL que você copiou (sem os colchetes)]
```

#### 4. **Crie uma nova branch para fazer os exercícios**

Entre no repositório que você acabou de clonar e execute o seguinte comando:

```shell
git checkout -b [nome-que-voce-dara-para-a-branch(sem os colchetes)]
```

## 💌 Como Enviar os Exercícios

Após fazer todos os exercícios, abra o terminal, vá para dentro do seu repositório local, e faça o seguinte:

1. **Adicione as modificações à staging area do Git:**

```shell
git add .
```

2. **Commite as modificações:**

```shell
git commit -m "Sua mensagem de commit aqui"
```

3. **Suba as modificações para o seu fork:**

```shell
git push origin [nome-da-sua-branch]
```

Após isso, ao abrir a página do seu fork, um aviso como esse será exibido:

![git-pr](https://user-images.githubusercontent.com/29297788/64829193-cd295600-d5a1-11e9-8a4f-351e86e8894f.jpg)

4. **Faça o Pull Request**

É só clicar no botão verde "Compare & pull request".

Você será direcionado para a página onde criará o pull request.

Apenas confira se as modificações que aparecem realmente correspondem ao código que você escreveu.

Exemplo:

![pr-dif](https://user-images.githubusercontent.com/29297788/64830769-a6bae900-d5a8-11e9-9fbc-8e728374593a.jpg)

Se estiver tudo certo, é só clicar no botão "Create pull request".

Esse que vos fala irá receber o código e, em breve, te dará um feedback =D