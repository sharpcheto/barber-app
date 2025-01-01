using BA.Data.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BA.Data.Data;

/// <summary>
/// Application database context for managing entities and identity.
/// </summary>
public class ApplicationDbContext : IdentityDbContext<User>
{
    /// <summary>
    /// Initializes a new instance of the <see cref="ApplicationDbContext"/> class.
    /// </summary>
    /// <param name="options">The options to be used by the DbContext.</param>
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    /// <summary>
    /// Gets or sets the Reservations DbSet.
    /// </summary>
    public virtual DbSet<Reservation> Reservations { get; set; }
}