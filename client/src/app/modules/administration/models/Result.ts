export class Result {

    public static clone(r: Result): Result {
        return new Result(r.competitionID, r.horseID, r.time, r.totalPoints, r.timeLimit, r.l, r.z, r.koliska, r.plachta
            , r.štvorec, r.cuvanie_Medzi_Kavaletami, r.lavička_Vyššia, r.mostík_Najazdova_Rampa, r.slalom, r.stužky, r.nízky_Podjazd, r.skok, r.lano_Bránička
            , r.uzka_Ulička_Zvonec, r.košík_Preniesť_Krčah, r.kavalety_4_ks, r.technický_Prekrok, r.labyrint, r.zastavenie_Cúvanie_Pri_Kužeľke, r.skok_50cm
            , r.sud_Kavaleta, r.ťah_Vreca, r.fit_Lopta, r.paleta_Státie)
    }

    constructor(
        public competitionID: number = 0,
        public horseID: number = 0,
        public time: string = "",
        public totalPoints: number = 0,
        public timeLimit: string = "",
        public l: number = 0,
        public z: number = 0,
        public koliska: number = 0,
        public plachta: number = 0,
        public štvorec: number = 0,
        public cuvanie_Medzi_Kavaletami: number = 0,
        public lavička_Vyššia: number = 0,
        public mostík_Najazdova_Rampa: number = 0,
        public slalom: number = 0,
        public stužky: number = 0,
        public nízky_Podjazd: number = 0,
        public skok: number = 0,
        public lano_Bránička: number = 0,
        public uzka_Ulička_Zvonec: number = 0,
        public košík_Preniesť_Krčah: number = 0,
        public kavalety_4_ks: number = 0,
        public technický_Prekrok: number = 0,
        public labyrint: number = 0,
        public zastavenie_Cúvanie_Pri_Kužeľke: number = 0,
        public skok_50cm: number = 0,
        public sud_Kavaleta: number = 0,
        public ťah_Vreca: number = 0,
        public fit_Lopta: number = 0,
        public paleta_Státie: number = 0
    ) { }
}