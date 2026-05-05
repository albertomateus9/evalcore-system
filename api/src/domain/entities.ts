export class ProjectEntry {
  constructor(
    public readonly id: string,
    public name: string,
    public description: string,
    public eloScore: number = 1200 // Default initial ELO score
  ) {}
}

export class Judge {
  constructor(
    public readonly id: string,
    public name: string,
    public email: string
  ) {}
}
