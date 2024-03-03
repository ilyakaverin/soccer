export interface ICompetition {
    "id": number,
    "name": ICompetitionCodeDescription,
    "code": ICompetitionCode,
    "type": "LEAGUE",
    "emblem": URL
}

export enum ICompetitionCodeDescription {
    WC = "FIFA World Cup",
    CL = "UEFA Champions League",
    BL1 = "Bundesliga",
    DED = "Eredivisie",
    BSA = "Campeonato Brasileiro Série A",
    PD = "Primera Division",
    FL1 = "Ligue 1",
    ELC = "Championship",
    PPL = "Primeira Liga",
    EC = "European Championship",
    SA = "Serie A",
    PL = "Premier League",
    CLI = "Copa Libertadores",
}

export enum ICompetitionCode {
    WC = "WC",
    CL = "CL",
    BL1 = "BL1",
    DED = "DED",
    BSA = "BSA",
    PD = "PD",
    FL1 = "FL1",
    ELC = "ELC",
    PPL = "PPL",
    EC = "EC",
    SA = "SA",
    PL = "PL",
    CLI = "CLI",
}





export interface ITodaysFixtures {
    "filters": {
        "season": string
    },
    "resultSet": {
        "count": 7,
        "first": "2024-03-02",
        "last": "2024-03-02",
        "played": 7
    },
    "competition": ICompetition,
    "matches": [
        {
            "area": {
                "id": 2072,
                "name": "England",
                "code": "ENG",
                "flag": "https://crests.football-data.org/770.svg"
            },
            "competition": {
                "id": 2021,
                "name": "Premier League",
                "code": "PL",
                "type": "LEAGUE",
                "emblem": "https://crests.football-data.org/PL.png"
            },
            "season": {
                "id": 1564,
                "startDate": "2023-08-11",
                "endDate": "2024-05-19",
                "currentMatchday": 27,
                "winner": null
            },
            "id": 436203,
            "utcDate": "2024-03-02T15:00:00Z",
            "status": "FINISHED",
            "matchday": 27,
            "stage": "REGULAR_SEASON",
            "group": null,
            "lastUpdated": "2024-03-02T17:54:58Z",
            "homeTeam": {
                "id": 402,
                "name": "Brentford FC",
                "shortName": "Brentford",
                "tla": "BRE",
                "crest": "https://crests.football-data.org/402.png"
            },
            "awayTeam": {
                "id": 61,
                "name": "Chelsea FC",
                "shortName": "Chelsea",
                "tla": "CHE",
                "crest": "https://crests.football-data.org/61.png"
            },
            "score": {
                "winner": "DRAW",
                "duration": "REGULAR",
                "fullTime": {
                    "home": 2,
                    "away": 2
                },
                "halfTime": {
                    "home": 0,
                    "away": 1
                }
            },
            "odds": {
                "msg": "Activate Odds-Package in User-Panel to retrieve odds."
            },
            "referees": [
                {
                    "id": 23568,
                    "name": "Jarred Gillett",
                    "type": "REFEREE",
                    "nationality": "Australia"
                }
            ]
        },
        {
            "area": {
                "id": 2072,
                "name": "England",
                "code": "ENG",
                "flag": "https://crests.football-data.org/770.svg"
            },
            "competition": {
                "id": 2021,
                "name": "Premier League",
                "code": "PL",
                "type": "LEAGUE",
                "emblem": "https://crests.football-data.org/PL.png"
            },
            "season": {
                "id": 1564,
                "startDate": "2023-08-11",
                "endDate": "2024-05-19",
                "currentMatchday": 27,
                "winner": null
            },
            "id": 436205,
            "utcDate": "2024-03-02T15:00:00Z",
            "status": "FINISHED",
            "matchday": 27,
            "stage": "REGULAR_SEASON",
            "group": null,
            "lastUpdated": "2024-03-02T18:00:03Z",
            "homeTeam": {
                "id": 62,
                "name": "Everton FC",
                "shortName": "Everton",
                "tla": "EVE",
                "crest": "https://crests.football-data.org/62.png"
            },
            "awayTeam": {
                "id": 563,
                "name": "West Ham United FC",
                "shortName": "West Ham",
                "tla": "WHU",
                "crest": "https://crests.football-data.org/563.png"
            },
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "home": 1,
                    "away": 3
                },
                "halfTime": {
                    "home": 0,
                    "away": 0
                }
            },
            "odds": {
                "msg": "Activate Odds-Package in User-Panel to retrieve odds."
            },
            "referees": [
                {
                    "id": 11585,
                    "name": "Craig Pawson",
                    "type": "REFEREE",
                    "nationality": "England"
                }
            ]
        },
        {
            "area": {
                "id": 2072,
                "name": "England",
                "code": "ENG",
                "flag": "https://crests.football-data.org/770.svg"
            },
            "competition": {
                "id": 2021,
                "name": "Premier League",
                "code": "PL",
                "type": "LEAGUE",
                "emblem": "https://crests.football-data.org/PL.png"
            },
            "season": {
                "id": 1564,
                "startDate": "2023-08-11",
                "endDate": "2024-05-19",
                "currentMatchday": 27,
                "winner": null
            },
            "id": 436206,
            "utcDate": "2024-03-02T15:00:00Z",
            "status": "FINISHED",
            "matchday": 27,
            "stage": "REGULAR_SEASON",
            "group": null,
            "lastUpdated": "2024-03-02T17:56:21Z",
            "homeTeam": {
                "id": 63,
                "name": "Fulham FC",
                "shortName": "Fulham",
                "tla": "FUL",
                "crest": "https://crests.football-data.org/63.svg"
            },
            "awayTeam": {
                "id": 397,
                "name": "Brighton & Hove Albion FC",
                "shortName": "Brighton Hove",
                "tla": "BHA",
                "crest": "https://crests.football-data.org/397.svg"
            },
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "home": 3,
                    "away": 0
                },
                "halfTime": {
                    "home": 2,
                    "away": 0
                }
            },
            "odds": {
                "msg": "Activate Odds-Package in User-Panel to retrieve odds."
            },
            "referees": [
                {
                    "id": 11430,
                    "name": "Simon Hooper",
                    "type": "REFEREE",
                    "nationality": "England"
                }
            ]
        },
        {
            "area": {
                "id": 2072,
                "name": "England",
                "code": "ENG",
                "flag": "https://crests.football-data.org/770.svg"
            },
            "competition": {
                "id": 2021,
                "name": "Premier League",
                "code": "PL",
                "type": "LEAGUE",
                "emblem": "https://crests.football-data.org/PL.png"
            },
            "season": {
                "id": 1564,
                "startDate": "2023-08-11",
                "endDate": "2024-05-19",
                "currentMatchday": 27,
                "winner": null
            },
            "id": 436209,
            "utcDate": "2024-03-02T15:00:00Z",
            "status": "FINISHED",
            "matchday": 27,
            "stage": "REGULAR_SEASON",
            "group": null,
            "lastUpdated": "2024-03-02T17:57:51Z",
            "homeTeam": {
                "id": 67,
                "name": "Newcastle United FC",
                "shortName": "Newcastle",
                "tla": "NEW",
                "crest": "https://crests.football-data.org/67.png"
            },
            "awayTeam": {
                "id": 76,
                "name": "Wolverhampton Wanderers FC",
                "shortName": "Wolverhampton",
                "tla": "WOL",
                "crest": "https://crests.football-data.org/76.svg"
            },
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "home": 3,
                    "away": 0
                },
                "halfTime": {
                    "home": 2,
                    "away": 0
                }
            },
            "odds": {
                "msg": "Activate Odds-Package in User-Panel to retrieve odds."
            },
            "referees": [
                {
                    "id": 11396,
                    "name": "Tim Robinson",
                    "type": "REFEREE",
                    "nationality": "England"
                }
            ]
        },
        {
            "area": {
                "id": 2072,
                "name": "England",
                "code": "ENG",
                "flag": "https://crests.football-data.org/770.svg"
            },
            "competition": {
                "id": 2021,
                "name": "Premier League",
                "code": "PL",
                "type": "LEAGUE",
                "emblem": "https://crests.football-data.org/PL.png"
            },
            "season": {
                "id": 1564,
                "startDate": "2023-08-11",
                "endDate": "2024-05-19",
                "currentMatchday": 27,
                "winner": null
            },
            "id": 436210,
            "utcDate": "2024-03-02T15:00:00Z",
            "status": "FINISHED",
            "matchday": 27,
            "stage": "REGULAR_SEASON",
            "group": null,
            "lastUpdated": "2024-03-02T17:57:52Z",
            "homeTeam": {
                "id": 351,
                "name": "Nottingham Forest FC",
                "shortName": "Nottingham",
                "tla": "NOT",
                "crest": "https://crests.football-data.org/351.png"
            },
            "awayTeam": {
                "id": 64,
                "name": "Liverpool FC",
                "shortName": "Liverpool",
                "tla": "LIV",
                "crest": "https://crests.football-data.org/64.png"
            },
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "home": 0,
                    "away": 1
                },
                "halfTime": {
                    "home": 0,
                    "away": 0
                }
            },
            "odds": {
                "msg": "Activate Odds-Package in User-Panel to retrieve odds."
            },
            "referees": [
                {
                    "id": 11520,
                    "name": "Paul Tierney",
                    "type": "REFEREE",
                    "nationality": "England"
                }
            ]
        },
        {
            "area": {
                "id": 2072,
                "name": "England",
                "code": "ENG",
                "flag": "https://crests.football-data.org/770.svg"
            },
            "competition": {
                "id": 2021,
                "name": "Premier League",
                "code": "PL",
                "type": "LEAGUE",
                "emblem": "https://crests.football-data.org/PL.png"
            },
            "season": {
                "id": 1564,
                "startDate": "2023-08-11",
                "endDate": "2024-05-19",
                "currentMatchday": 27,
                "winner": null
            },
            "id": 436212,
            "utcDate": "2024-03-02T15:00:00Z",
            "status": "FINISHED",
            "matchday": 27,
            "stage": "REGULAR_SEASON",
            "group": null,
            "lastUpdated": "2024-03-02T17:58:35Z",
            "homeTeam": {
                "id": 73,
                "name": "Tottenham Hotspur FC",
                "shortName": "Tottenham",
                "tla": "TOT",
                "crest": "https://crests.football-data.org/73.svg"
            },
            "awayTeam": {
                "id": 354,
                "name": "Crystal Palace FC",
                "shortName": "Crystal Palace",
                "tla": "CRY",
                "crest": "https://crests.football-data.org/354.png"
            },
            "score": {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "home": 3,
                    "away": 1
                },
                "halfTime": {
                    "home": 0,
                    "away": 0
                }
            },
            "odds": {
                "msg": "Activate Odds-Package in User-Panel to retrieve odds."
            },
            "referees": [
                {
                    "id": 11327,
                    "name": "John Brooks",
                    "type": "REFEREE",
                    "nationality": "England"
                }
            ]
        },
        {
            "area": {
                "id": 2072,
                "name": "England",
                "code": "ENG",
                "flag": "https://crests.football-data.org/770.svg"
            },
            "competition": {
                "id": 2021,
                "name": "Premier League",
                "code": "PL",
                "type": "LEAGUE",
                "emblem": "https://crests.football-data.org/PL.png"
            },
            "season": {
                "id": 1564,
                "startDate": "2023-08-11",
                "endDate": "2024-05-19",
                "currentMatchday": 27,
                "winner": null
            },
            "id": 436207,
            "utcDate": "2024-03-02T17:30:00Z",
            "status": "FINISHED",
            "matchday": 27,
            "stage": "REGULAR_SEASON",
            "group": null,
            "lastUpdated": "2024-03-02T20:34:13Z",
            "homeTeam": {
                "id": 389,
                "name": "Luton Town FC",
                "shortName": "Luton Town",
                "tla": "LUT",
                "crest": "https://crests.football-data.org/389.png"
            },
            "awayTeam": {
                "id": 58,
                "name": "Aston Villa FC",
                "shortName": "Aston Villa",
                "tla": "AVL",
                "crest": "https://crests.football-data.org/58.png"
            },
            "score": {
                "winner": "AWAY_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "home": 2,
                    "away": 3
                },
                "halfTime": {
                    "home": 0,
                    "away": 2
                }
            },
            "odds": {
                "msg": "Activate Odds-Package in User-Panel to retrieve odds."
            },
            "referees": [
                {
                    "id": 11605,
                    "name": "Michael Oliver",
                    "type": "REFEREE",
                    "nationality": "England"
                }
            ]
        }
    ]
}
