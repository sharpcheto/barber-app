using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace BA.Data.Models;

/// <summary>
/// Represents a user entity, inheriting from IdentityUser.
/// </summary>
public class User : IdentityUser
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
}