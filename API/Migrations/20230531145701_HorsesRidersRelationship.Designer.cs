﻿// <auto-generated />
using System;
using API;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace API.Migrations
{
    [DbContext(typeof(DatabaseDbContext))]
    [Migration("20230531145701_HorsesRidersRelationship")]
    partial class HorsesRidersRelationship
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.5");

            modelBuilder.Entity("API.Database.DbModels.Arbiter", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Arbiter");
                });

            modelBuilder.Entity("API.Database.DbModels.Article", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("CreatedBy")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("Date")
                        .HasColumnType("TEXT");

                    b.Property<bool>("IsApproved")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Articles");
                });

            modelBuilder.Entity("API.Database.DbModels.Coach", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DateOfBirth")
                        .HasColumnType("TEXT");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Points")
                        .HasColumnType("INTEGER");

                    b.Property<int>("RegistrationNumber")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Coaches");
                });

            modelBuilder.Entity("API.Database.DbModels.CoachTask", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int?>("CoachId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Rating")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("CoachId");

                    b.ToTable("CoachTasks");
                });

            modelBuilder.Entity("API.Database.DbModels.Comment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int?>("ArticleId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("TimeStamp")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("ArticleId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("API.Database.DbModels.Competition", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("ArbiterId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("ArbiterId");

                    b.ToTable("Competitions");
                });

            modelBuilder.Entity("API.Database.DbModels.Horse", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("DateOfBirth")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("FatherId")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("Male")
                        .HasColumnType("INTEGER");

                    b.Property<int>("MotherId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Number")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Horses");
                });

            modelBuilder.Entity("API.Database.DbModels.Image", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Url")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Images");
                });

            modelBuilder.Entity("API.Database.DbModels.Result", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int?>("CompetitionId")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("HorseId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("PointsAtObstacles")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int?>("RiderId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Time")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("TotalPoints")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("CompetitionId");

                    b.HasIndex("HorseId");

                    b.HasIndex("RiderId");

                    b.ToTable("Results");
                });

            modelBuilder.Entity("API.Database.DbModels.Rider", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Category")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("DateOfBirth")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("RiderNumber")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Riders");
                });

            modelBuilder.Entity("API.Database.DbModels.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<byte[]>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("PasswordSalt")
                        .IsRequired()
                        .HasColumnType("BLOB");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("ArticleImage", b =>
                {
                    b.Property<int>("ArticlesId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("ImagesId")
                        .HasColumnType("INTEGER");

                    b.HasKey("ArticlesId", "ImagesId");

                    b.HasIndex("ImagesId");

                    b.ToTable("ArticleImage");
                });

            modelBuilder.Entity("CompetitionHorse", b =>
                {
                    b.Property<int>("CompetitionsId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("HorsesId")
                        .HasColumnType("INTEGER");

                    b.HasKey("CompetitionsId", "HorsesId");

                    b.HasIndex("HorsesId");

                    b.ToTable("CompetitionHorse");
                });

            modelBuilder.Entity("CompetitionRider", b =>
                {
                    b.Property<int>("CompetitionsId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("RidersId")
                        .HasColumnType("INTEGER");

                    b.HasKey("CompetitionsId", "RidersId");

                    b.HasIndex("RidersId");

                    b.ToTable("CompetitionRider");
                });

            modelBuilder.Entity("HorseImage", b =>
                {
                    b.Property<int>("HorsesId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("ImagesId")
                        .HasColumnType("INTEGER");

                    b.HasKey("HorsesId", "ImagesId");

                    b.HasIndex("ImagesId");

                    b.ToTable("HorseImage");
                });

            modelBuilder.Entity("HorseRider", b =>
                {
                    b.Property<int>("HorsesId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("RidersId")
                        .HasColumnType("INTEGER");

                    b.HasKey("HorsesId", "RidersId");

                    b.HasIndex("RidersId");

                    b.ToTable("HorseRider");
                });

            modelBuilder.Entity("ImageRider", b =>
                {
                    b.Property<int>("ImagesId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("RidersId")
                        .HasColumnType("INTEGER");

                    b.HasKey("ImagesId", "RidersId");

                    b.HasIndex("RidersId");

                    b.ToTable("ImageRider");
                });

            modelBuilder.Entity("API.Database.DbModels.CoachTask", b =>
                {
                    b.HasOne("API.Database.DbModels.Coach", null)
                        .WithMany("CoachTasks")
                        .HasForeignKey("CoachId");
                });

            modelBuilder.Entity("API.Database.DbModels.Comment", b =>
                {
                    b.HasOne("API.Database.DbModels.Article", null)
                        .WithMany("Comments")
                        .HasForeignKey("ArticleId");
                });

            modelBuilder.Entity("API.Database.DbModels.Competition", b =>
                {
                    b.HasOne("API.Database.DbModels.Arbiter", "Arbiter")
                        .WithMany()
                        .HasForeignKey("ArbiterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Arbiter");
                });

            modelBuilder.Entity("API.Database.DbModels.Result", b =>
                {
                    b.HasOne("API.Database.DbModels.Competition", null)
                        .WithMany("Results")
                        .HasForeignKey("CompetitionId");

                    b.HasOne("API.Database.DbModels.Horse", null)
                        .WithMany("Results")
                        .HasForeignKey("HorseId");

                    b.HasOne("API.Database.DbModels.Rider", null)
                        .WithMany("Results")
                        .HasForeignKey("RiderId");
                });

            modelBuilder.Entity("ArticleImage", b =>
                {
                    b.HasOne("API.Database.DbModels.Article", null)
                        .WithMany()
                        .HasForeignKey("ArticlesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("API.Database.DbModels.Image", null)
                        .WithMany()
                        .HasForeignKey("ImagesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("CompetitionHorse", b =>
                {
                    b.HasOne("API.Database.DbModels.Competition", null)
                        .WithMany()
                        .HasForeignKey("CompetitionsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("API.Database.DbModels.Horse", null)
                        .WithMany()
                        .HasForeignKey("HorsesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("CompetitionRider", b =>
                {
                    b.HasOne("API.Database.DbModels.Competition", null)
                        .WithMany()
                        .HasForeignKey("CompetitionsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("API.Database.DbModels.Rider", null)
                        .WithMany()
                        .HasForeignKey("RidersId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("HorseImage", b =>
                {
                    b.HasOne("API.Database.DbModels.Horse", null)
                        .WithMany()
                        .HasForeignKey("HorsesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("API.Database.DbModels.Image", null)
                        .WithMany()
                        .HasForeignKey("ImagesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("HorseRider", b =>
                {
                    b.HasOne("API.Database.DbModels.Horse", null)
                        .WithMany()
                        .HasForeignKey("HorsesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("API.Database.DbModels.Rider", null)
                        .WithMany()
                        .HasForeignKey("RidersId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ImageRider", b =>
                {
                    b.HasOne("API.Database.DbModels.Image", null)
                        .WithMany()
                        .HasForeignKey("ImagesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("API.Database.DbModels.Rider", null)
                        .WithMany()
                        .HasForeignKey("RidersId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("API.Database.DbModels.Article", b =>
                {
                    b.Navigation("Comments");
                });

            modelBuilder.Entity("API.Database.DbModels.Coach", b =>
                {
                    b.Navigation("CoachTasks");
                });

            modelBuilder.Entity("API.Database.DbModels.Competition", b =>
                {
                    b.Navigation("Results");
                });

            modelBuilder.Entity("API.Database.DbModels.Horse", b =>
                {
                    b.Navigation("Results");
                });

            modelBuilder.Entity("API.Database.DbModels.Rider", b =>
                {
                    b.Navigation("Results");
                });
#pragma warning restore 612, 618
        }
    }
}
