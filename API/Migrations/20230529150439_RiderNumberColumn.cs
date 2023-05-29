using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class RiderNumberColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "StartingNumber",
                table: "Results");

            migrationBuilder.AddColumn<string>(
                name: "RiderNumber",
                table: "Riders",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RiderNumber",
                table: "Riders");

            migrationBuilder.AddColumn<int>(
                name: "StartingNumber",
                table: "Results",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }
    }
}
