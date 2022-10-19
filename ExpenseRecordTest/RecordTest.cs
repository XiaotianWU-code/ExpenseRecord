using Microsoft.AspNetCore.Mvc.Testing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExpenseRecordTest
{
    public class RecordTest
    {
        [Fact]
        public async Task Should_Return_All_Records_When_Get_All_Record()
        {
            // given
            var application = new WebApplicationFactory<Program>()
                .WithWebHostBuilder(_ => { });
            var client = application.CreateClient();

            // when
            var response = await client.GetAsync("Record");

            // then
            response.EnsureSuccessStatusCode();
            var responseBody = await response.Content.ReadAsStringAsync();
            Assert.Equal("[]", responseBody);
        }
    }
}
