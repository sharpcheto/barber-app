using System.Threading.Tasks;
using BA.Common.Models.User;

namespace BA.Service.Abstractions;

/// <summary>
/// Represents the service interface for managing user information.
/// </summary>
public interface IUserService
{
    
    /// <summary>
    /// Updates the information of a user identified by their email.
    /// </summary>
    /// <param name="userEmail">The email of the user to update.</param>
    /// <param name="newUserInfo">The updated user information.</param>
    /// <returns>A task that represents the asynchronous operation. The task result indicates whether the update was successful.</returns>
    Task<bool> UpdateUserAsync(string userEmail, UserUM newUserInfo);

    /// <summary>
    /// Retrieves user information by their unique identifier.
    /// </summary>
    /// <param name="userId">The unique identifier of the user.</param>
    /// <returns>A task that represents the asynchronous operation. The task result contains the user view model.</returns>
    Task<UserVM> GetUserByIdAsync(string userId);
}