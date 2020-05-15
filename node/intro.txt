# Node.js com Express

- Não é uma linguagem de programação, pois já usa JS.
- Guiado à eventos.
- Junção do V8 (máquina virtual de execução do JS) e libuv (comunicação entre servidor e OS). 

# Características
- Ambiente de servidor de código aberto
- Executado em várias plataformas
- JavaScript executando no servidor
- Event Loops
- Assincronicidade
- Processos de I/O não bloqueante 
- Alta performance 

# Event Loops 
- Escuta eventos 
- Registra um callback 
- Joga o processo no stack (fila de tarefas) de execução 
(Evento loop já fica disponível para nova requisição)
- Resposta à requisição no final do processamento

Requisição -> Processamento -> Devolução de dados pro servidor
sem trancar as requesições subsequentes ao servidor


