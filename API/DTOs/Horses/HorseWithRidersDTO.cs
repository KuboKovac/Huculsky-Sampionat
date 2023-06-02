using API.DTOs.Riders;

namespace API.DTOs.Horses;

public class HorseWithRidersDTO
{
    public int? Id { get; set; }
    public string Name { get; set; }
    public string Number { get; set; }
    public string DateOfBirth { get; set; }
    public bool Male { get; set; }
    public int MotherId { get; set; }
    public int FatherId { get; set; }
    public List<RiderDTO> Riders { get; set; }
}