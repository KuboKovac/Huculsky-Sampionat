export class Result {

    public static clone(r: Result): Result {
        return new Result(r.id,r.competitionId, r.horseId, r.time, r.totalPoints, r.timeLimit, r.l, r.z, r.koliska, r.plachta
            , r.stvorec, r.cuvanie_Medzi_Kavaletami, r.lavicka_Vyssia, r.mostik_Najazdova_Rampa, r.slalom, r.stuzky, r.nizky_Podjazd, r.skok, r.lano_Branicka
            , r.uzka_Ulicka_Zvonec, r.kosik_Preniest_Krcah, r.kavalety_4_ks, r.technicky_Prekrok, r.labyrint, r.zastavenie_Cuvanie_Pri_Kuzelke, r.skok_50cm
            , r.sud_Kavaleta, r.tah_Vreca, r.fit_Lopta, r.paleta_Statie)
    }

    constructor(
        public id: number = 0,
        public competitionId: number = 0,
        public horseId: number = 0,
        public time: string = "",
        public totalPoints: number = 0,
        public timeLimit: string = "",
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
        public paleta_Statie: number = 0
    ) { }

    public countTotalPoints(): void{
        this.totalPoints = this.l + this.z + this.koliska + this.plachta + this.stvorec + this.cuvanie_Medzi_Kavaletami + this.lavicka_Vyssia
                            + this.mostik_Najazdova_Rampa + this.slalom + this.stuzky + this.nizky_Podjazd + this.skok + this.lano_Branicka
                            + this.uzka_Ulicka_Zvonec + this.kosik_Preniest_Krcah +this.kavalety_4_ks + this.technicky_Prekrok + this.labyrint
                            + this.zastavenie_Cuvanie_Pri_Kuzelke + this.skok_50cm + this.sud_Kavaleta + this.tah_Vreca + this.fit_Lopta
                            + this.paleta_Statie
}



}