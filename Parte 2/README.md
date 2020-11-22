# Parte 2
Nessa pasta temos uma base de projeto para escrita e leitura de dados.

O projeto usa o terminal como interface de entrada e saída, e arquivos _json_ como base de dados.

A estrutura do projeto está separada em três pastas.
- _view_: nessa pasta se encontram os arquivos referentes à apresentação e interação com o usuário, e cada arquivo deve ser referente a um domínio.
- _business_: nessa pasta se encontram os arquivos referentes à lógica de negócio, esses devem estar separados em pastas por domínio.
- _data_: nessa pasta se encontram os arquivos referentes à persistência de dados, neste projeto feita em arquivos no formato json. Arquivos nessa pasta também devem estar separados em pastas por domínio.

Além dessas pastas, temos a pasta _database_ onde ficam salvos os arquivos _json_, e dentro de cada delas temos uma pasta util com funções de uso genérico entre seus arquivos.

O ponto de entrada da aplicação é o arquivo _main.js_. Para executar a aplicação, rode:
```
node main
```   

Toda entidade salva na persistência deve obrigatoriamente possuir um campo _id_ único, para tal utilizaremos a biblioteca [_nanoid_](https://github.com/ai/nanoid). Para instalá-la, basta executar:
```
npm install
```

## Ex1
Na camada de apresentação, crie um domínio: _birthday_.

## Ex2
Crie a opção _write_ para o domínio _birthday_, o objeto salvo deve estar no formato:
```
{
    "id": string,
    "name": string,
    "date": Date 
}
```

Obs.: o campo date deve guardar apenas a data, no formato YYYY-MM-dd.

## Ex3
Crie a opção _list_ para o domínio _birthday_.

## Ex4
Crie a opção _update_ para o domínio _birthday_, use o campo _id_ para saber qual registro atualizar.

## Ex5
Crie a opção _delete_ para o domínio _birthday_, use o campo _id_ para saber qual registro deletar.

## Ex6
Crie a opção _find_ para o domínio _birthday_, use o campo _id_ para encontrar o registro.

## Ex7
Atualize a opção _list_ para aceitar filtros. Deve ser possível filtrar por nome, data e por ambos juntos.
