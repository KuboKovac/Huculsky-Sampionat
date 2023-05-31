using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class ArbiterRemoveRole : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Arbiter");

            migrationBuilder.RenameColumn(
                name: "Role",
                table: "Arbiter",
                newName: "FirstName");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "FirstName",
                table: "Arbiter",
                newName: "Role");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Arbiter",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }
    }
}
