namespace ExpenseRecord;

public class Record
{
    public string Id { get; set; }
    public string? Description { get; set; }

    public string? Type { get; set; }

    public double Money { get; set; }

    public DateTime Date { get; set; }
}