namespace BA.Common.Models.User;

/// <summary>
/// View model representing user information.
/// </summary>
public class UserVM
{
    /// <summary>
    /// Gets or sets the unique identifier of the user.
    /// </summary>
    public string Id { get; set; } = string.Empty;

    /// <summary>
    /// Gets or sets the first name of the user.
    /// </summary>
    public string FirstName { get; set; } = string.Empty;

    /// <summary>
    /// Gets or sets the last name of the user.
    /// </summary>
    public string LastName { get; set; } = string.Empty;

    /// <summary>
    /// Gets or sets the email address of the user.
    /// </summary>
    public string Email { get; set; } = string.Empty;

    /// <summary>
    /// Gets or sets the phone number of the user.
    /// </summary>
    public string PhoneNumber { get; set; } = string.Empty;
}