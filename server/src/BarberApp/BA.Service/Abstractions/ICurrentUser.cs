namespace BA.Service.Abstractions;

/// <summary>
/// Represents the interface for accessing information about the current user.
/// </summary>
public interface ICurrentUser
{
    
    /// <summary>
    /// Gets the unique identifier of the current user.
    /// </summary>
    string UserId { get; }
}