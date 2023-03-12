## Problema atual

Quero um sistema para gerenciar meus clientes, filmes e a locação desses filmes.
Atualmente, para alugar um filme, o cliente precisa realizar seu cadastro conosco, informando: nome completo, data de nascimento (pois apenas maiores de 18 anos podem locar filmes), endereço, cpf, telefone e email. Cada filmes possui um preço por dia alugado e, no dia que o aluguel expira, enviamos um e-mail para o cliente informando isso. Caso o cliente não devolver na data final, será adicionado uma multa de R$2,00 por dia ao cliente. Com isso, o pagamento do aluguel é feito no dia em que realiza a locação e, caso necessite pagar multa, paga no dia em que devolver.

## Entidades

Clientes
Filmes
Locação


## Requisitos para entidades

### Clientes

#### RF

[ ] O usuário pode criar um novo cliente 
[ ] O usuário pode alterar um cliente já existente
[ ] O usuário pode desabilitar um cliente
[ ] O usuário pode listar todos os clientes salvos, filtrando por ativado e desativado
[ ] O usuário pode listar um cliente específico

#### RN

[ ] Quando salvar o cliente, o cpf deste precisa ser criptografado
[ ] Quando alterar um cliente, o seu cpf não pode ser alterado
[ ] Quando listar todos os clientes, retornar informações gerais dos clientes
[ ] Quando listar apenas um cliente, listar todas as informações dele
