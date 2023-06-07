
export interface ICompetition{
    id: number,
    name: string,
    description: string,
    date: string,
    isLocked: boolean,
    arbiters: IArbiter[],
    riders: IRider[]
}

export interface IArbiter{
    id: number,
    firstName: string,
    lastName: string
}

export interface IRider{
    id: number,
    firstName: string,
    lastName: string,
    riderNumber: string,
    category: string,
    dateOfBirth: string
    horses: IHorse[],
    results: IResults[]
}

export interface IHorse{
    id: number,
    name: string,
    number: string,
    male: boolean,
    dateOfBirth: string
}

export interface IResults{
    id: number,
    time: string,
    timeLimit: string,
    totalPoints: number,
    pointsAtObstacles: IPointsAtObstacles
}
export interface IPointsAtObstacles{
    l: number,
    z: number,
    koliska: number,
    plachta: number,
    štvorec: number,
    cuvanie_Medzi_Kavaletami: number,
    lavička_Vyššia: number,
    mostík_Najazdova_Rampa: number,
    slalom: number,
    stužky: number,
    nízky_Podjazd: number,
    skok: number,
    lano_Bránička: number,
    uzka_Ulička_Zvonec: number,
    košík_Preniesť_Krčah: number,
    kavalety_4_ks: number,
    technický_Prekrok: number,
    labyrint: number,
    zastavenie_Cúvanie_Pri_Kužeľke: number,
    skok_50cm: number,
    sud_Kavaleta: number,
    ťah_Vreca: number,
    fit_Lopta: number,
    paleta_Státie: number
}