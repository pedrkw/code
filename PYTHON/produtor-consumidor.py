import threading
import random
import time
from queue import Queue

# Tamanho do buffer
buffer_size = 5
buffer = Queue(buffer_size)
mutex = threading.Lock()

# Função do produtor
def produtor():
    for _ in range(2):  # Produz apenas 10 itens
        item = random.randint(1, 100)  # Item para ser inserido no buffer
        empty_space.acquire()
        mutex.acquire()
        buffer.put(item)
        print(f'Produzido: {item}, Buffer: {buffer.queue}')
        mutex.release()
        full_space.release()
        time.sleep(random.uniform(0.1, 0.5))  # Simula um tempo de produção

# Função do consumidor
def consumidor():
    for _ in range(2):  # Consome apenas 10 itens
        full_space.acquire()
        mutex.acquire()
        item = buffer.get()
        print(f'Consumido: {item}, Buffer: {buffer.queue}')
        mutex.release()
        empty_space.release()
        time.sleep(random.uniform(0.1, 0.5))  # Simula um tempo de consumo

# Semáforos para controle de espaço vazio e espaço cheio
empty_space = threading.Semaphore(buffer_size)
full_space = threading.Semaphore(0)

# Criar threads de produtores e consumidores
num_produtores = 3
num_consumidores = 2
produtores = [threading.Thread(target=produtor) for _ in range(num_produtores)]
consumidores = [threading.Thread(target=consumidor) for _ in range(num_consumidores)]

# Iniciar as threads
for p in produtores:
    p.start()
for c in consumidores:
    c.start()

# Aguardar todas as threads terminarem
for p in produtores:
    p.join()
for c in consumidores:
    c.join()