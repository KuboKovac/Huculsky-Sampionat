using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class ResultRename : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Results_Competitions_CompetitionId",
                table: "Results");

            migrationBuilder.RenameColumn(
                name: "CompetitionId",
                table: "Results",
                newName: "CompetitionID");

            migrationBuilder.RenameIndex(
                name: "IX_Results_CompetitionId",
                table: "Results",
                newName: "IX_Results_CompetitionID");

            migrationBuilder.RenameColumn(
                name: "Ťah_Vreca",
                table: "Obstacles",
                newName: "Zastavenie_Cuvanie_Pri_Kuzelke");

            migrationBuilder.RenameColumn(
                name: "Štvorec",
                table: "Obstacles",
                newName: "Uzka_Ulicka_Zvonec");

            migrationBuilder.RenameColumn(
                name: "Zastavenie_Cúvanie_Pri_Kužeľke",
                table: "Obstacles",
                newName: "Technicky_Prekrok");

            migrationBuilder.RenameColumn(
                name: "Uzka_Ulička_Zvonec",
                table: "Obstacles",
                newName: "Tah_Vreca");

            migrationBuilder.RenameColumn(
                name: "Technický_Prekrok",
                table: "Obstacles",
                newName: "Stvorec");

            migrationBuilder.RenameColumn(
                name: "Stužky",
                table: "Obstacles",
                newName: "Stuzky");

            migrationBuilder.RenameColumn(
                name: "Paleta_Státie",
                table: "Obstacles",
                newName: "Paleta_Statie");

            migrationBuilder.RenameColumn(
                name: "Nízky_Podjazd",
                table: "Obstacles",
                newName: "Nizky_Podjazd");

            migrationBuilder.RenameColumn(
                name: "Mostík_Najazdova_Rampa",
                table: "Obstacles",
                newName: "Mostik_Najazdova_Rampa");

            migrationBuilder.RenameColumn(
                name: "Lavička_Vyššia",
                table: "Obstacles",
                newName: "Lavicka_Vyssia");

            migrationBuilder.RenameColumn(
                name: "Lano_Bránička",
                table: "Obstacles",
                newName: "Lano_Branicka");

            migrationBuilder.RenameColumn(
                name: "Košík_Preniesť_Krčah",
                table: "Obstacles",
                newName: "Kosik_Preniest_Krcah");

            migrationBuilder.AlterColumn<int>(
                name: "CompetitionID",
                table: "Results",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Results_Competitions_CompetitionID",
                table: "Results",
                column: "CompetitionID",
                principalTable: "Competitions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Results_Competitions_CompetitionID",
                table: "Results");

            migrationBuilder.RenameColumn(
                name: "CompetitionID",
                table: "Results",
                newName: "CompetitionId");

            migrationBuilder.RenameIndex(
                name: "IX_Results_CompetitionID",
                table: "Results",
                newName: "IX_Results_CompetitionId");

            migrationBuilder.RenameColumn(
                name: "Zastavenie_Cuvanie_Pri_Kuzelke",
                table: "Obstacles",
                newName: "Ťah_Vreca");

            migrationBuilder.RenameColumn(
                name: "Uzka_Ulicka_Zvonec",
                table: "Obstacles",
                newName: "Štvorec");

            migrationBuilder.RenameColumn(
                name: "Technicky_Prekrok",
                table: "Obstacles",
                newName: "Zastavenie_Cúvanie_Pri_Kužeľke");

            migrationBuilder.RenameColumn(
                name: "Tah_Vreca",
                table: "Obstacles",
                newName: "Uzka_Ulička_Zvonec");

            migrationBuilder.RenameColumn(
                name: "Stvorec",
                table: "Obstacles",
                newName: "Technický_Prekrok");

            migrationBuilder.RenameColumn(
                name: "Stuzky",
                table: "Obstacles",
                newName: "Stužky");

            migrationBuilder.RenameColumn(
                name: "Paleta_Statie",
                table: "Obstacles",
                newName: "Paleta_Státie");

            migrationBuilder.RenameColumn(
                name: "Nizky_Podjazd",
                table: "Obstacles",
                newName: "Nízky_Podjazd");

            migrationBuilder.RenameColumn(
                name: "Mostik_Najazdova_Rampa",
                table: "Obstacles",
                newName: "Mostík_Najazdova_Rampa");

            migrationBuilder.RenameColumn(
                name: "Lavicka_Vyssia",
                table: "Obstacles",
                newName: "Lavička_Vyššia");

            migrationBuilder.RenameColumn(
                name: "Lano_Branicka",
                table: "Obstacles",
                newName: "Lano_Bránička");

            migrationBuilder.RenameColumn(
                name: "Kosik_Preniest_Krcah",
                table: "Obstacles",
                newName: "Košík_Preniesť_Krčah");

            migrationBuilder.AlterColumn<int>(
                name: "CompetitionId",
                table: "Results",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddForeignKey(
                name: "FK_Results_Competitions_CompetitionId",
                table: "Results",
                column: "CompetitionId",
                principalTable: "Competitions",
                principalColumn: "Id");
        }
    }
}
