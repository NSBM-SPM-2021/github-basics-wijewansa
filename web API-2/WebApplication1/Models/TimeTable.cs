using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
  public class TimeTable
  {
    public int TaskId { get; set; }
    public String Title { get; set; }
    public int Weeek { get; set; }
    public String SelectDate {get; set;}
    public String SelectTime { get; set; }
    public int Colour { get; set; }
    public String Detail { get; set; }

  }
}
