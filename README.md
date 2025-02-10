# AWS Rekognition Image Analysis

Este projeto é uma aplicação serverless que utiliza AWS Rekognition para análise de imagens, retornando descrições detalhadas dos elementos identificados na imagem em português. A aplicação é construída usando o framework Serverless e Node.js.

## 🚀 Funcionalidades

- Análise de imagens usando AWS Rekognition
- Tradução automática das descrições de inglês para português usando AWS Translate
- Filtro de resultados com confiança superior a 80%
- Retorno formatado das descrições com percentual de confiança

## 🛠️ Tecnologias Utilizadas

- Node.js
- Serverless Framework
- AWS Lambda
- AWS Rekognition
- AWS Translate
- Jest para testes

## 📋 Pré-requisitos

- Node.js instalado
- Conta AWS configurada
- Serverless Framework instalado globalmente
- Configuração das credenciais AWS

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone [[seu-repositorio](https://github.com/joaogbrieldev/aws-image-analysis.git)]
cd image-analysis
```

2. Instale as dependências:

```bash
npm install
```

## ⚙️ Estrutura do Projeto

```
.
├── handler.js          # Classe principal com a lógica de negócios
├── factory.js          # Factory para instanciação dos serviços AWS
├── index.js           # Ponto de entrada da aplicação
└── package.json       # Dependências e scripts do projeto
```

## 🏃 Scripts Disponíveis

- `npm run invoke`: Invoca a função Lambda no ambiente AWS
- `npm run invoke:local`: Invoca a função Lambda localmente
- `npm test`: Executa os testes unitários
- `npm run test:watch`: Executa os testes em modo watch

## 📦 Dependências Principais

- aws-sdk: v2.1128
- axios: ^0.17.1
- serverless: 3.16
- jest: ^28.1.3

## 🔍 Como Usar

A API espera receber uma URL de imagem como query parameter. Exemplo de requisição:

```
GET /analyze?imageUrl=https://exemplo.com/imagem.jpg
```

### Resposta de Exemplo

```json
{
  "statusCode": 200,
  "body": "A imagem tem\n95.23% de ser do tipo cachorro\n90.15% de ser do tipo animal de estimação"
}
```

## ✅ Testes

O projeto enfatiza a importância de testes, utilizando Jest como framework de teste. Os testes cobrem:

- Integração com AWS Rekognition
- Integração com AWS Translate
- Formatação de resultados
- Tratamento de erros
- Validação de parâmetros

Para executar os testes:

```bash
npm test
```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Por favor, leia as diretrizes de contribuição antes de submeter pull requests.

## 📄 Licença

Este projeto está sob a licença ISC.
s
