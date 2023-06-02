using API.DTOs.Horses;

namespace API.DTOs.Riders;

public class RiderHorseDTO
{
    public int? Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string RiderNumber { get; set; }
    public string Category { get; set; }
    public string DateOfbirth { get; set; }
    public List<HorseDTO> Horses { get; set; }
}