import { ProjectEntry, Judge } from '../domain/entities';

/**
 * Caso de uso responsável por calcular o ranqueamento global
 * utilizando matemática Bayesiana ou sistema ELO baseado
 * nos resultados dos confrontos binários (pairwise).
 */
export class CalculateGlobalRankUseCase {
  constructor(
    private readonly projectRepository: any // Type to be defined in infrastructure
  ) {}

  async execute(): Promise<ProjectEntry[]> {
    // 1. Buscar todos os projetos e seus confrontos
    // 2. Aplicar o algoritmo de rankeamento
    // 3. Atualizar e retornar a lista ranqueada
    throw new Error('Not implemented yet. Challenge for the Hackathon!');
  }
}

/**
 * Caso de uso responsável por determinar qual deve ser o próximo
 * par de projetos a ser avaliado por um determinado juiz,
 * maximizando a utilidade da avaliação (active learning).
 */
export class DispatchNextPairUseCase {
  constructor(
    private readonly projectRepository: any, // Type to be defined in infrastructure
    private readonly matchRepository: any // Type to be defined in infrastructure
  ) {}

  async execute(judgeId: string): Promise<[ProjectEntry, ProjectEntry]> {
    // 1. Identificar quais projetos precisam de mais avaliações
    // 2. Selecionar dois projetos com scores próximos para o juiz avaliar
    throw new Error('Not implemented yet. Challenge for the Hackathon!');
  }
}
