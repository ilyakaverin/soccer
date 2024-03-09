export interface ICompetition {
  id: number
  name: ICompetitionCodeDescription
  code: ICompetitionCode
  type: 'LEAGUE'
  emblem: URL
}

export enum ICompetitionCodeDescription {
  // WC = "FIFA World Cup",
  CL = 'UEFA Champions League',
  BL1 = 'Bundesliga',
  // DED = "Eredivisie",
  // BSA = "Campeonato Brasileiro Série A",
  PD = 'Primera Division',
  FL1 = 'Ligue 1',
  // ELC = "Championship",
  // PPL = "Primeira Liga",
  // EC = "European Championship",
  SA = 'Serie A',
  PL = 'Premier League',
  // CLI = "Copa Libertadores",
}

export enum ICompetitionCode {
  WC = 'WC',
  CL = 'CL',
  BL1 = 'BL1',
  DED = 'DED',
  BSA = 'BSA',
  PD = 'PD',
  FL1 = 'FL1',
  ELC = 'ELC',
  PPL = 'PPL',
  EC = 'EC',
  SA = 'SA',
  PL = 'PL',
  CLI = 'CLI',
}

export enum IDateOption {
  yesterday = 'yesterday',
  today = 'today',
  tomorrow = 'tomorrow',
}
