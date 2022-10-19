using Microsoft.AspNetCore.Mvc;
using System.Collections;

namespace ExpenseRecord.Controllers;

[ApiController]
[Route("[controller]")]
public class RecordController : ControllerBase
{

    private static List<Record> Records = new List<Record>();

    [HttpGet]
    public IEnumerable<Record> getAllRecord()
    {
        Console.Out.WriteLine("get All Record");
       return Records;
    }

    [HttpPost]
    [ProducesResponseType(StatusCodes.Status201Created)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public string CreateItemAsync(Record item)
    {
        try
        {
            var id = Guid.NewGuid().ToString();
            var newItem = new Record
            {
                Id = id,
                Description = item.Description,
                Type = item.Type,
                Money = item.Money,
                Date = item.Date,
            };
            Records.Insert(0, newItem);

            return id;
        }
        catch (Exception e)
        {
            return e.Message;
        }
    }

    [HttpDelete]
    [Route("{Id}")]
    public string DeleteItemAsync([FromRoute] string id)
    {
        try
        {
            Records.RemoveAll(r => r.Id == id);
            return "delete " + id;
        }
        catch (Exception e)
        {
            return e.Message;
        }
    }
}
