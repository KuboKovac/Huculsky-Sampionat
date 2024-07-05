using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class ImageMetadata : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ArticleImage");

            migrationBuilder.DropTable(
                name: "HorseImage");

            migrationBuilder.DropTable(
                name: "ImageRider");

            migrationBuilder.AddColumn<int>(
                name: "ArticleId",
                table: "Images",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "Images",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "DateOfCreation",
                table: "Images",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "HorseId",
                table: "Images",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "RiderId",
                table: "Images",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Visible",
                table: "Images",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateIndex(
                name: "IX_Images_ArticleId",
                table: "Images",
                column: "ArticleId");

            migrationBuilder.CreateIndex(
                name: "IX_Images_HorseId",
                table: "Images",
                column: "HorseId");

            migrationBuilder.CreateIndex(
                name: "IX_Images_RiderId",
                table: "Images",
                column: "RiderId");

            migrationBuilder.AddForeignKey(
                name: "FK_Images_Articles_ArticleId",
                table: "Images",
                column: "ArticleId",
                principalTable: "Articles",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Images_Horses_HorseId",
                table: "Images",
                column: "HorseId",
                principalTable: "Horses",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Images_Riders_RiderId",
                table: "Images",
                column: "RiderId",
                principalTable: "Riders",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Images_Articles_ArticleId",
                table: "Images");

            migrationBuilder.DropForeignKey(
                name: "FK_Images_Horses_HorseId",
                table: "Images");

            migrationBuilder.DropForeignKey(
                name: "FK_Images_Riders_RiderId",
                table: "Images");

            migrationBuilder.DropIndex(
                name: "IX_Images_ArticleId",
                table: "Images");

            migrationBuilder.DropIndex(
                name: "IX_Images_HorseId",
                table: "Images");

            migrationBuilder.DropIndex(
                name: "IX_Images_RiderId",
                table: "Images");

            migrationBuilder.DropColumn(
                name: "ArticleId",
                table: "Images");

            migrationBuilder.DropColumn(
                name: "Category",
                table: "Images");

            migrationBuilder.DropColumn(
                name: "DateOfCreation",
                table: "Images");

            migrationBuilder.DropColumn(
                name: "HorseId",
                table: "Images");

            migrationBuilder.DropColumn(
                name: "RiderId",
                table: "Images");

            migrationBuilder.DropColumn(
                name: "Visible",
                table: "Images");

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

            migrationBuilder.CreateIndex(
                name: "IX_ArticleImage_ImagesId",
                table: "ArticleImage",
                column: "ImagesId");

            migrationBuilder.CreateIndex(
                name: "IX_HorseImage_ImagesId",
                table: "HorseImage",
                column: "ImagesId");

            migrationBuilder.CreateIndex(
                name: "IX_ImageRider_RidersId",
                table: "ImageRider",
                column: "RidersId");
        }
    }
}
