using Microsoft.EntityFrameworkCore;
using MyWebApi.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//builds for Controllers

builder.Services.AddDbContext<PlaylistContext>(opt => opt.UseInMemoryDatabase("Playlist"));
builder.Services.AddDbContext<UserContext>(opt => opt.UseInMemoryDatabase("User"));
builder.Services.AddDbContext<SongContext>(opt => opt.UseInMemoryDatabase("Song"));

//


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
