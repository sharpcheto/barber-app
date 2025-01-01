using System.ComponentModel.DataAnnotations;

namespace BA.Common.Models.User;

/// <summary>
/// Update model for user information.
/// </summary>
public class UserUM
{
    /// <summary>
    /// Gets or sets the first name of the user.
    /// </summary>
    [Required]
    public string FirstName { get; set; } = string.Empty;

    /// <summary>
    /// Gets or sets the last name of the user.
    /// </summary>
    [Required]
    public string LastName { get; set; } = string.Empty;

    /// <summary>
    /// Gets or sets the phone number of the user.
    /// </summary>
    [Required]
    public string PhoneNumber { get; set; } = string.Empty;
}