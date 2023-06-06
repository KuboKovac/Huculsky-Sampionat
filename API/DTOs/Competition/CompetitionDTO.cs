
namespace API.DTOs.Competition;

public class CompetitionDTO
{
    public int? Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Date { get; set; }
    public List<int> RidersIds { get; set; }
    public List<int> ArbitersIds { get; set; }

}