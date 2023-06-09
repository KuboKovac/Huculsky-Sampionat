export class GResult {
    constructor(
        id: number = 0,
        time: string = '',
        timeLimit: string = '',
        totalPoints: number = 0,
        pointsAtObstacles: PointsAtObstacles = new PointsAtObstacles()  
    ){}
  }
  
  export class PointsAtObstacles {
    constructor(
        l: number = 0,
        z: number = 0,
        koliska: number = 0,
        plachta: number = 0,
        stvorec: number = 0,
        cuvanie_Medzi_Kavaletami: number = 0,
        lavicka_Vyssia: number = 0,
        mostik_Najazdova_Rampa: number = 0,
        slalom: number = 0,
        stuzky: number = 0,
        nizky_Podjazd: number = 0,
        skok: number = 0,
        lano_Branicka: number = 0,
        uzka_Ulicka_Zvonec: number = 0,
        kosik_Preniest_Krcah: number = 0,
        kavalety_4_ks: number = 0,
        technicky_Prekrok: number = 0,
        labyrint: number = 0,
        zastavenie_Cuvanie_Pri_Kuzelke: number = 0,
        skok_50cm: number = 0,
        sud_Kavaleta: number = 0,
        tah_Vreca: number = 0,
        fit_Lopta: number = 0,
        paleta_Statie: number = 0,
    ){}

  }