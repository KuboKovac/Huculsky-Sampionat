export class GResult {

  public static clone(g: GResult): GResult {
    return new GResult(g.id, g.time, g.timeLimit, g.totalPoints, PointsAtObstacles.clone(g.pointsAtObstacles))
  }

  constructor(
    public id: number = 0,
    public time: string = '',
    public timeLimit: string = '',
    public totalPoints: number = 0,
    public pointsAtObstacles: PointsAtObstacles = new PointsAtObstacles()
  ) { }
}

export class PointsAtObstacles {
  public static clone(p: PointsAtObstacles): PointsAtObstacles {
    return new PointsAtObstacles(p.l, p.z, p.koliska, p.plachta, p.stvorec,
      p.cuvanie_Medzi_Kavaletami, p.lavicka_Vyssia, p.mostik_Najazdova_Rampa,
      p.slalom, p.stuzky, p.nizky_Podjazd, p.skok, p.lano_Branicka, p.uzka_Ulicka_Zvonec,
      p.kosik_Preniest_Krcah, p.kavalety_4_ks, p.technicky_Prekrok, p.labyrint,
      p.zastavenie_Cuvanie_Pri_Kuzelke, p.skok_50cm, p.sud_Kavaleta, p.tah_Vreca,
      p.fit_Lopta, p.paleta_Statie)
  }

  constructor(
    public l: number = 0,
    public z: number = 0,
    public koliska: number = 0,
    public plachta: number = 0,
    public stvorec: number = 0,
    public cuvanie_Medzi_Kavaletami: number = 0,
    public lavicka_Vyssia: number = 0,
    public mostik_Najazdova_Rampa: number = 0,
    public slalom: number = 0,
    public stuzky: number = 0,
    public nizky_Podjazd: number = 0,
    public skok: number = 0,
    public lano_Branicka: number = 0,
    public uzka_Ulicka_Zvonec: number = 0,
    public kosik_Preniest_Krcah: number = 0,
    public kavalety_4_ks: number = 0,
    public technicky_Prekrok: number = 0,
    public labyrint: number = 0,
    public zastavenie_Cuvanie_Pri_Kuzelke: number = 0,
    public skok_50cm: number = 0,
    public sud_Kavaleta: number = 0,
    public tah_Vreca: number = 0,
    public fit_Lopta: number = 0,
    public paleta_Statie: number = 0,
  ) { }

}