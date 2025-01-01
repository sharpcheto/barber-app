using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BA.Data.Models;

/// <summary>
/// Represents a reservation entity.
/// </summary>
public class Reservation
{
    /// <summary>
    /// Gets or sets the unique identifier for the reservation.
    /// </summary>
    [Required]
    public Guid Id { get; set; } = Guid.NewGuid();
    
    /// <summary>
    /// Gets or sets the first name of the person making the reservation.
    /// </summary>
    [Required]
    public string FirstName { get; set; } = String.Empty;
    
    /// <summary>
    /// Gets or sets the last name of the person making the reservation.
    /// </summary>
    public string LastName { get; set; } = String.Empty;
    
    /// <summary>
    /// Gets or sets the date of the reservation.
    /// </summary>
    [Required]
    public string Date { get; set; } = String.Empty;

    /// <summary>
    /// Gets or sets the time of the reservation.
    /// </summary>
    [Required]
    public int Time { get; set; }
    
    /// <summary>
    /// Gets or sets the email of the person making the reservation.
    /// </summary>
    public string Email { get; set; } = String.Empty;
    
    /// <summary>
    /// Gets or sets the phone number of the person making the reservation.
    /// </summary>
    [Required]
    public string Phone { get; set; } = String.Empty;
    
    /// <summary>
    /// Gets or sets the service for which the reservation is made.
    /// </summary>
    [Required]
    public string Service { get; set; } = String.Empty;
    
    /// <summary>
    /// Gets or sets the user ID of the person making the reservation.
    /// </summary>
    
    [Required]
    public string UserId { get; set; } = String.Empty;

    [ForeignKey(nameof(UserId))] 
    public User? User { get; set; } = new();
}
