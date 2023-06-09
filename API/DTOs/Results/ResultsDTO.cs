namespace API.DTOs.Results;

public class ResultsDTO
{
    public int CompetitionID { get; set; }
    public int HorseID { get; set; }
    public string Time { get; set; }
    public int TotalPoints { get; set; }

    public string TimeLimit { get; set; }
    public int L { get; set; }
    public int Z { get; set; }
    public int Koliska { get; set; }
    public int Plachta { get; set; }
    public int Stvorec { get; set; }
    public int Cuvanie_Medzi_Kavaletami { get; set; }
    public int Lavicka_Vyssia { get; set; }
    public int Mostik_Najazdova_Rampa { get; set; }
    public int Slalom { get; set; }
    public int Stuzky { get; set; }
    public int Nizky_Podjazd { get; set; }
    public int Skok { get; set; }
    public int Lano_Branicka { get; set; }
    public int Uzka_Ulicka_Zvonec { get; set; }
    public int Kosik_Preniest_Krcah { get; set; }
    public int Kavalety_4_ks { get; set; } 
    public int Technicky_Prekrok { get; set; }
    public int Labyrint { get; set; }
    public int Zastavenie_Cuvanie_Pri_Kuzelke { get; set; }
    public int Skok_50cm { get; set; }
    public int Sud_Kavaleta { get; set; }
    public int Tah_Vreca { get; set; }
    public int Fit_Lopta { get; set; }
    public int Paleta_Statie { get; set; }
}