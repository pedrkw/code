from queue import PriorityQueue
import pygame
import random

# Inicialização do Pygame
pygame.init()

# Definir cores
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
RED = (255, 0, 0)
GREEN = (0, 255, 0)

# Definir tamanho da tela
WIDTH, HEIGHT = 1280, 720
win = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Simulação de Robô")

# Definir tamanho das células da grade
CELL_SIZE = 40
GRID_WIDTH = WIDTH // CELL_SIZE
GRID_HEIGHT = HEIGHT // CELL_SIZE

# Função para desenhar a grade


def draw_grid():
    for x in range(0, WIDTH, CELL_SIZE):
        for y in range(0, HEIGHT, CELL_SIZE):
            rect = pygame.Rect(x, y, CELL_SIZE, CELL_SIZE)
            pygame.draw.rect(win, WHITE, rect, 1)

# Função para desenhar obstáculos


def draw_obstacles(obstacles):
    for obstacle in obstacles:
        x, y = obstacle
        rect = pygame.Rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE)
        pygame.draw.rect(win, RED, rect)

# Função para desenhar o robô


def draw_robot(position):
    x, y = position
    rect = pygame.Rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE)
    pygame.draw.rect(win, GREEN, rect)

# Implementar o Algoritmo A*


def heuristic(a, b):
    return abs(a[0] - b[0]) + abs(a[1] - b[1])


def a_star(grid, start, goal):
    queue = PriorityQueue()
    queue.put((0, start))
    came_from = {}
    cost_so_far = {}
    came_from[start] = None
    cost_so_far[start] = 0

    while not queue.empty():
        current = queue.get()[1]

        if current == goal:
            break

        for next in get_neighbors(current, grid):
            new_cost = cost_so_far[current] + 1
            if next not in cost_so_far or new_cost < cost_so_far[next]:
                cost_so_far[next] = new_cost
                priority = new_cost + heuristic(goal, next)
                queue.put((priority, next))
                came_from[next] = current

    return reconstruct_path(came_from, start, goal)


def get_neighbors(pos, grid):
    x, y = pos
    neighbors = [(x+1, y), (x-1, y), (x, y+1), (x, y-1)]
    results = [n for n in neighbors if 0 <= n[0]
               < GRID_WIDTH and 0 <= n[1] < GRID_HEIGHT]
    # Filtra vizinhos que não sejam obstáculos
    results = [n for n in results if grid[n[0]][n[1]] != 1]
    return results


def reconstruct_path(came_from, start, goal):
    current = goal
    path = []
    while current != start:
        path.append(current)
        current = came_from[current]
    path.append(start)
    path.reverse()
    return path

# Função principal


def main():
    run = True
    clock = pygame.time.Clock()

    # Definir obstáculos
    obstacles = [(random.randint(0, GRID_WIDTH-1),
                  random.randint(0, GRID_HEIGHT-1)) for _ in range(150)]

    # Posição inicial do robô
    robot_position = (0, 0)
    # Objetivo é a célula inferior direita
    goal_position = (GRID_WIDTH - 1, GRID_HEIGHT - 1)

    grid = [[0 for _ in range(GRID_HEIGHT)] for _ in range(GRID_WIDTH)]
    for obs in obstacles:
        grid[obs[0]][obs[1]] = 1

    path = a_star(grid, robot_position, goal_position)
    path_index = 0

    while run:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False

        win.fill(BLACK)
        draw_grid()
        draw_obstacles(obstacles)

        if path_index < len(path):
            robot_position = path[path_index]
            path_index += 1

        draw_robot(robot_position)
        pygame.display.update()
        # Reduza a velocidade para visualizar melhor o movimento
        clock.tick(10)

    pygame.quit()


if __name__ == "__main__":
    main()
