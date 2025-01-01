using System.ComponentModel.DataAnnotations;

namespace BA.Common.Models.Reservation;

/// <summary>
/// View model representing a reservation with detailed information.
/// </summary>
public class ReservationVM
{
    /// <summary>
    /// Gets or sets the first name of the person making the reservation.
    /// </summary>
    [Required]
    public string FirstName { get; set; } = string.Empty;

    /// <summary>
    /// Gets or sets the last name of the person making the reservation.
    /// </summary>
    public string LastName { get; set; } = string.Empty;

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
    /// Gets or sets the email of the person making the reservation.
    /// </summary>
    [Required]
    public string Email { get; set; } = string.Empty;

    /// <summary>
    /// Gets or sets the phone number of the person making the reservation.
    /// </summary>
    [Required]
    public string Phone { get; set; } = string.Empty;

    /// <summary>
    /// Gets or sets the service associated with the reservation.
    /// </summary>
    [Required]
    public string Service { get; set; } = string.Empty;
}