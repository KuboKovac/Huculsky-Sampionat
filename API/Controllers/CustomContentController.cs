using API.Database.DbModels;
using API.DTOs.CustomContent;
using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;


[ApiController]
[Route("[controller]")]
public class CustomContentController: ControllerBase
{

    private readonly CustomContentService _contentService;
    
    public CustomContentController(CustomContentService contentService)
    {
        _contentService = contentService;
    }


    [HttpGet("GetContentById/{id}")]
    public async Task<ActionResult> GetContentById(string id)
    {

        try
        {
            var content = await _contentService.GetContentById(id);
            if (content == null)
            {
                return NotFound("Objekt nebol nájdeny!");
            }

            return Ok(content);
        }
        catch (Exception e)
        {
            return StatusCode(500, "Interna chyba serveru!");
        }
    }

    [HttpPost("CreateNewCustomContent")]
    public async Task<ActionResult> CreateNewCustomContent(CustomContent content)
    {
        try
        {
            await _contentService.CreateCustomContent(content);
            return Ok("nový obsah bol úspešne vytvorený!");
        }
        catch (Exception e)
        {
            return StatusCode(500, "Interna chyba serveru!");
        }
    }

    [HttpPut("UpdateCustomContent/{id}")]
    public async Task<ActionResult> UpdateCustomContent(string id, CustomContentUpdateDTO updateDto)
    {
        var result = await _contentService.UpdateCustomContent(id, updateDto);

        if (result)
        {
            return Ok("Obsah bol úspešne upravený!");
        }

        return StatusCode(500, "Interna chyba serveru!");
    }
    
}