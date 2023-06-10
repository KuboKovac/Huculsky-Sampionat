using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class ResultRiderFK : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Results_Riders_RiderId",
                table: "Results");

            migrationBuilder.AlterColumn<int>(
                name: "RiderId",
                table: "Results",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Results_Riders_RiderId",
                table: "Results",
                column: "RiderId",
                principalTable: "Riders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Results_Riders_RiderId",
                table: "Results");

            migrationBuilder.AlterColumn<int>(
                name: "RiderId",
                table: "Results",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddForeignKey(
                name: "FK_Results_Riders_RiderId",
                table: "Results",
                column: "RiderId",
                principalTable: "Riders",
                principalColumn: "Id");
        }
    }
}
