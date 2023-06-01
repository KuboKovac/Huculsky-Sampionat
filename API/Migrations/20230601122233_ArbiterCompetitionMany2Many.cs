using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class ArbiterCompetitionMany2Many : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Competitions_Arbiter_ArbiterId",
                table: "Competitions");

            migrationBuilder.DropIndex(
                name: "IX_Competitions_ArbiterId",
                table: "Competitions");

            migrationBuilder.DropColumn(
                name: "ArbiterId",
                table: "Competitions");

            migrationBuilder.CreateTable(
                name: "ArbiterCompetition",
                columns: table => new
                {
                    ArbitersId = table.Column<int>(type: "INTEGER", nullable: false),
                    CompetitionsId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArbiterCompetition", x => new { x.ArbitersId, x.CompetitionsId });
                    table.ForeignKey(
                        name: "FK_ArbiterCompetition_Arbiter_ArbitersId",
                        column: x => x.ArbitersId,
                        principalTable: "Arbiter",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ArbiterCompetition_Competitions_CompetitionsId",
                        column: x => x.CompetitionsId,
                        principalTable: "Competitions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ArbiterCompetition_CompetitionsId",
                table: "ArbiterCompetition",
                column: "CompetitionsId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ArbiterCompetition");

            migrationBuilder.AddColumn<int>(
                name: "ArbiterId",
                table: "Competitions",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Competitions_ArbiterId",
                table: "Competitions",
                column: "ArbiterId");

            migrationBuilder.AddForeignKey(
                name: "FK_Competitions_Arbiter_ArbiterId",
                table: "Competitions",
                column: "ArbiterId",
                principalTable: "Arbiter",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
