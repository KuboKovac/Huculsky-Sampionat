using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class NewDatabaseInit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Arbiter",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FirstName = table.Column<string>(type: "TEXT", nullable: false),
                    LastName = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Arbiter", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Articles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Date = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Content = table.Column<string>(type: "TEXT", nullable: false),
                    CreatedBy = table.Column<string>(type: "TEXT", nullable: false),
                    IsApproved = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Articles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Coaches",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    LastName = table.Column<string>(type: "TEXT", nullable: false),
                    DateOfBirth = table.Column<DateTime>(type: "TEXT", nullable: false),
                    RegistrationNumber = table.Column<int>(type: "INTEGER", nullable: false),
                    Points = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Coaches", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Competitions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Date = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Competitions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Horses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Number = table.Column<string>(type: "TEXT", nullable: false),
                    DateOfBirth = table.Column<string>(type: "TEXT", nullable: false),
                    Male = table.Column<bool>(type: "INTEGER", nullable: false),
                    MotherId = table.Column<int>(type: "INTEGER", nullable: false),
                    FatherId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Horses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Images",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Url = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Images", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Obstacles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    L = table.Column<int>(type: "INTEGER", nullable: false),
                    Z = table.Column<int>(type: "INTEGER", nullable: false),
                    Koliska = table.Column<int>(type: "INTEGER", nullable: false),
                    Plachta = table.Column<int>(type: "INTEGER", nullable: false),
                    Štvorec = table.Column<int>(type: "INTEGER", nullable: false),
                    Cuvanie_Medzi_Kavaletami = table.Column<int>(type: "INTEGER", nullable: false),
                    Lavička_Vyššia = table.Column<int>(type: "INTEGER", nullable: false),
                    Mostík_Najazdova_Rampa = table.Column<int>(type: "INTEGER", nullable: false),
                    Slalom = table.Column<int>(type: "INTEGER", nullable: false),
                    Stužky = table.Column<int>(type: "INTEGER", nullable: false),
                    Nízky_Podjazd = table.Column<int>(type: "INTEGER", nullable: false),
                    Skok = table.Column<int>(type: "INTEGER", nullable: false),
                    Lano_Bránička = table.Column<int>(type: "INTEGER", nullable: false),
                    Uzka_Ulička_Zvonec = table.Column<int>(type: "INTEGER", nullable: false),
                    Košík_Preniesť_Krčah = table.Column<int>(type: "INTEGER", nullable: false),
                    Kavalety_4_ks = table.Column<int>(type: "INTEGER", nullable: false),
                    Technický_Prekrok = table.Column<int>(type: "INTEGER", nullable: false),
                    Labyrint = table.Column<int>(type: "INTEGER", nullable: false),
                    Zastavenie_Cúvanie_Pri_Kužeľke = table.Column<int>(type: "INTEGER", nullable: false),
                    Skok_50cm = table.Column<int>(type: "INTEGER", nullable: false),
                    Sud_Kavaleta = table.Column<int>(type: "INTEGER", nullable: false),
                    Ťah_Vreca = table.Column<int>(type: "INTEGER", nullable: false),
                    Fit_Lopta = table.Column<int>(type: "INTEGER", nullable: false),
                    Paleta_Státie = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Obstacles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Riders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FirstName = table.Column<string>(type: "TEXT", nullable: false),
                    LastName = table.Column<string>(type: "TEXT", nullable: false),
                    RiderNumber = table.Column<string>(type: "TEXT", nullable: false),
                    Category = table.Column<string>(type: "TEXT", nullable: false),
                    DateOfBirth = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Riders", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Username = table.Column<string>(type: "TEXT", nullable: false),
                    PasswordHash = table.Column<byte[]>(type: "BLOB", nullable: false),
                    PasswordSalt = table.Column<byte[]>(type: "BLOB", nullable: false),
                    Role = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Comments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TimeStamp = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Content = table.Column<string>(type: "TEXT", nullable: false),
                    ArticleId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Comments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Comments_Articles_ArticleId",
                        column: x => x.ArticleId,
                        principalTable: "Articles",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "CoachTasks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Rating = table.Column<int>(type: "INTEGER", nullable: false),
                    CoachId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CoachTasks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CoachTasks_Coaches_CoachId",
                        column: x => x.CoachId,
                        principalTable: "Coaches",
                        principalColumn: "Id");
                });

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

            migrationBuilder.CreateTable(
                name: "CompetitionHorse",
                columns: table => new
                {
                    CompetitionsId = table.Column<int>(type: "INTEGER", nullable: false),
                    HorsesId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CompetitionHorse", x => new { x.CompetitionsId, x.HorsesId });
                    table.ForeignKey(
                        name: "FK_CompetitionHorse_Competitions_CompetitionsId",
                        column: x => x.CompetitionsId,
                        principalTable: "Competitions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CompetitionHorse_Horses_HorsesId",
                        column: x => x.HorsesId,
                        principalTable: "Horses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ArticleImage",
                columns: table => new
                {
                    ArticlesId = table.Column<int>(type: "INTEGER", nullable: false),
                    ImagesId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArticleImage", x => new { x.ArticlesId, x.ImagesId });
                    table.ForeignKey(
                        name: "FK_ArticleImage_Articles_ArticlesId",
                        column: x => x.ArticlesId,
                        principalTable: "Articles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ArticleImage_Images_ImagesId",
                        column: x => x.ImagesId,
                        principalTable: "Images",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "HorseImage",
                columns: table => new
                {
                    HorsesId = table.Column<int>(type: "INTEGER", nullable: false),
                    ImagesId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HorseImage", x => new { x.HorsesId, x.ImagesId });
                    table.ForeignKey(
                        name: "FK_HorseImage_Horses_HorsesId",
                        column: x => x.HorsesId,
                        principalTable: "Horses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_HorseImage_Images_ImagesId",
                        column: x => x.ImagesId,
                        principalTable: "Images",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CompetitionRider",
                columns: table => new
                {
                    CompetitionsId = table.Column<int>(type: "INTEGER", nullable: false),
                    RidersId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CompetitionRider", x => new { x.CompetitionsId, x.RidersId });
                    table.ForeignKey(
                        name: "FK_CompetitionRider_Competitions_CompetitionsId",
                        column: x => x.CompetitionsId,
                        principalTable: "Competitions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CompetitionRider_Riders_RidersId",
                        column: x => x.RidersId,
                        principalTable: "Riders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "HorseRider",
                columns: table => new
                {
                    HorsesId = table.Column<int>(type: "INTEGER", nullable: false),
                    RidersId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HorseRider", x => new { x.HorsesId, x.RidersId });
                    table.ForeignKey(
                        name: "FK_HorseRider_Horses_HorsesId",
                        column: x => x.HorsesId,
                        principalTable: "Horses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_HorseRider_Riders_RidersId",
                        column: x => x.RidersId,
                        principalTable: "Riders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ImageRider",
                columns: table => new
                {
                    ImagesId = table.Column<int>(type: "INTEGER", nullable: false),
                    RidersId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ImageRider", x => new { x.ImagesId, x.RidersId });
                    table.ForeignKey(
                        name: "FK_ImageRider_Images_ImagesId",
                        column: x => x.ImagesId,
                        principalTable: "Images",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ImageRider_Riders_RidersId",
                        column: x => x.RidersId,
                        principalTable: "Riders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Results",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Time = table.Column<string>(type: "TEXT", nullable: false),
                    TimeLimit = table.Column<string>(type: "TEXT", nullable: false),
                    PointsAtObstaclesId = table.Column<int>(type: "INTEGER", nullable: false),
                    TotalPoints = table.Column<int>(type: "INTEGER", nullable: false),
                    CompetitionId = table.Column<int>(type: "INTEGER", nullable: true),
                    HorseId = table.Column<int>(type: "INTEGER", nullable: true),
                    RiderId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Results", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Results_Competitions_CompetitionId",
                        column: x => x.CompetitionId,
                        principalTable: "Competitions",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Results_Horses_HorseId",
                        column: x => x.HorseId,
                        principalTable: "Horses",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Results_Obstacles_PointsAtObstaclesId",
                        column: x => x.PointsAtObstaclesId,
                        principalTable: "Obstacles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Results_Riders_RiderId",
                        column: x => x.RiderId,
                        principalTable: "Riders",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ArbiterCompetition_CompetitionsId",
                table: "ArbiterCompetition",
                column: "CompetitionsId");

            migrationBuilder.CreateIndex(
                name: "IX_ArticleImage_ImagesId",
                table: "ArticleImage",
                column: "ImagesId");

            migrationBuilder.CreateIndex(
                name: "IX_CoachTasks_CoachId",
                table: "CoachTasks",
                column: "CoachId");

            migrationBuilder.CreateIndex(
                name: "IX_Comments_ArticleId",
                table: "Comments",
                column: "ArticleId");

            migrationBuilder.CreateIndex(
                name: "IX_CompetitionHorse_HorsesId",
                table: "CompetitionHorse",
                column: "HorsesId");

            migrationBuilder.CreateIndex(
                name: "IX_CompetitionRider_RidersId",
                table: "CompetitionRider",
                column: "RidersId");

            migrationBuilder.CreateIndex(
                name: "IX_HorseImage_ImagesId",
                table: "HorseImage",
                column: "ImagesId");

            migrationBuilder.CreateIndex(
                name: "IX_HorseRider_RidersId",
                table: "HorseRider",
                column: "RidersId");

            migrationBuilder.CreateIndex(
                name: "IX_ImageRider_RidersId",
                table: "ImageRider",
                column: "RidersId");

            migrationBuilder.CreateIndex(
                name: "IX_Results_CompetitionId",
                table: "Results",
                column: "CompetitionId");

            migrationBuilder.CreateIndex(
                name: "IX_Results_HorseId",
                table: "Results",
                column: "HorseId");

            migrationBuilder.CreateIndex(
                name: "IX_Results_PointsAtObstaclesId",
                table: "Results",
                column: "PointsAtObstaclesId");

            migrationBuilder.CreateIndex(
                name: "IX_Results_RiderId",
                table: "Results",
                column: "RiderId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ArbiterCompetition");

            migrationBuilder.DropTable(
                name: "ArticleImage");

            migrationBuilder.DropTable(
                name: "CoachTasks");

            migrationBuilder.DropTable(
                name: "Comments");

            migrationBuilder.DropTable(
                name: "CompetitionHorse");

            migrationBuilder.DropTable(
                name: "CompetitionRider");

            migrationBuilder.DropTable(
                name: "HorseImage");

            migrationBuilder.DropTable(
                name: "HorseRider");

            migrationBuilder.DropTable(
                name: "ImageRider");

            migrationBuilder.DropTable(
                name: "Results");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Arbiter");

            migrationBuilder.DropTable(
                name: "Coaches");

            migrationBuilder.DropTable(
                name: "Articles");

            migrationBuilder.DropTable(
                name: "Images");

            migrationBuilder.DropTable(
                name: "Competitions");

            migrationBuilder.DropTable(
                name: "Horses");

            migrationBuilder.DropTable(
                name: "Obstacles");

            migrationBuilder.DropTable(
                name: "Riders");
        }
    }
}
