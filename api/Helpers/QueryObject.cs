namespace api.Helpers
{
    public class QueryObject
    {
<<<<<<< HEAD
        public string? Symbol { get; set; } = null;
        public string? CompanyName { get; set; } = null;
        public string? SortBy { get; set; } = null;
        public bool IsDecsending { get; set; } = false;
=======
        public string? CompanyName { get; set; }

        public string? Symbol { get; set; }

        public string? SortBy { get; set; }

        public bool IsDescending { get; set; } = false;

        public int PageNumber { get; set; } = 1;

        public int PageSize { get; set; } = 20;
>>>>>>> 6cf7e1dab4ef3904a904e35367941b8b05490776
    }
}