using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
  public class TimeTableController : ApiController
  {
    public HttpResponseMessage Get()
    {
      string query = @"
                select TaskId,Title,Weeek,Convert(varchar(10),SelectDate,120) as SelectDate,SelectTime,Colour,Convert(varchar(300),Detail,400),Detail from
                dbo.TimeTable
                ";
      DataTable table = new DataTable();
      using (var con = new SqlConnection(ConfigurationManager.
        ConnectionStrings["TimeDB"].ConnectionString))
      using (var cmd = new SqlCommand(query, con))
      using (var da = new SqlDataAdapter(cmd))

      {
        cmd.CommandType = CommandType.Text;
        da.Fill(table);
      }

      return Request.CreateResponse(HttpStatusCode.OK, table);
    }

    public string Post(TimeTable time)
    {
      try
      {
        string query = @"
          insert into dbo.TimeTable values
          (
            '" + time.Title + @"'
            ,'" + time.Weeek + @"'
            ,'" + time.SelectDate + @"'
            ,'" + time.SelectTime + @"'
            ,'" + time.Colour + @"'
            ,'" + time.Detail + @"'
          )";
        DataTable table = new DataTable();
        using (var con = new SqlConnection(ConfigurationManager.
          ConnectionStrings["TimeDB"].ConnectionString))
        using (var cmd = new SqlCommand(query, con))
        using (var da = new SqlDataAdapter(cmd))

        {
          cmd.CommandType = CommandType.Text;
          da.Fill(table);
        }
        return "Added Successfully!";

      }
      catch (Exception)
      {
        return "Failed to add!!!";
      }
    }


    public string Put(TimeTable time)
    {
      try
      {
        string query = @"
          update dbo.TimeTable set
            Title ='" + time.Title + @"'
            ,Weeek ='" + time.Weeek + @"'
            ,SelectDate ='" + time.SelectDate + @"'
            ,SelectTime ='" + time.SelectTime + @"'
            ,Colour ='" + time.Colour + @"'
            ,Detail ='" + time.Detail + @"'
            where TaskId = '" + time.TaskId + @"'
          ";
        DataTable table = new DataTable();
        using (var con = new SqlConnection(ConfigurationManager.
          ConnectionStrings["TimeDB"].ConnectionString))
        using (var cmd = new SqlCommand(query, con))
        using (var da = new SqlDataAdapter(cmd))

        {
          cmd.CommandType = CommandType.Text;
          da.Fill(table);
        }
        return "Updated Successfully!";

      }
      catch (Exception)
      {
        return "Failed to update!!!";
      }
    }


    public string Delete(int id)
    {
      try
      {
        string query = @"
          delete from dbo.TimeTable 
            where TaskId = '" + id + @"'
          ";
        DataTable table = new DataTable();
        using (var con = new SqlConnection(ConfigurationManager.
          ConnectionStrings["TimeDB"].ConnectionString))
        using (var cmd = new SqlCommand(query, con))
        using (var da = new SqlDataAdapter(cmd))

        {
          cmd.CommandType = CommandType.Text;
          da.Fill(table);
        }
        return "Deleted Successfully!";

      }
      catch (Exception)
      {
        return "Failed to delete!!!";
      }
    }

    [Route("api/TimeTable/GetAllTasks")]
    [HttpGet]
    public HttpResponseMessage GetAllTasks()
    {
      string query = @"select SelectDate,SelectTime from dbo.TimeTable";

      DataTable table = new DataTable();
      using (var con = new SqlConnection(ConfigurationManager.
        ConnectionStrings["TimeDB"].ConnectionString))
      using (var cmd = new SqlCommand(query, con))
      using (var da = new SqlDataAdapter(cmd))

      {
        cmd.CommandType = CommandType.Text;
        da.Fill(table);
      }

      return Request.CreateResponse(HttpStatusCode.OK, table);
    }
  }
}
