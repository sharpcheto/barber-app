using System.ComponentModel.DataAnnotations;

namespace BA.Common.Models.Reservation;

/// <summary>
/// Input model for creating or updating a reservation.
/// </summary>
public class ReservationIM
{
    /// <summary>
    /// Gets or sets the date of the reservation.
    /// </summary>
    [Required]
    public string Date { get; set; }

    /// <summary>
    /// Gets or sets the time of the reservation.
    /// </summary>
    [Required]
    public int Time { get; set; }

    /// <summary>
    /// Gets or sets the service associated with the reservation.
    /// </summary>
    [Required]
    public string? Service { get; set; }
}