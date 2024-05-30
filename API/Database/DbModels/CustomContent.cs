using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace API.Database.DbModels;

public class CustomContent
{
    [Key]
    public string Id { get; set; }

    public string CustomHTML { get; set; } = string.Empty;

}