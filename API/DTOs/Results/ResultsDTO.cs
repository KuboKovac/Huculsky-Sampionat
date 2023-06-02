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
    public int Štvorec { get; set; }
    public int Cuvanie_Medzi_Kavaletami { get; set; }
    public int Lavička_Vyššia { get; set; }
    public int Mostík_Najazdova_Rampa { get; set; }
    public int Slalom { get; set; }
    public int Stužky { get; set; }
    public int Nízky_Podjazd { get; set; }
    public int Skok { get; set; }
    public int Lano_Bránička { get; set; }
    public int Uzka_Ulička_Zvonec { get; set; }
    public int Košík_Preniesť_Krčah { get; set; }
    public int Kavalety_4_ks { get; set; } 
    public int Technický_Prekrok { get; set; }
    public int Labyrint { get; set; }
    public int Zastavenie_Cúvanie_Pri_Kužeľke { get; set; }
    public int Skok_50cm { get; set; }
    public int Sud_Kavaleta { get; set; }
    public int Ťah_Vreca { get; set; }
    public int Fit_Lopta { get; set; }
    public int Paleta_Státie { get; set; }
}