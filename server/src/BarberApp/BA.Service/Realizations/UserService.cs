using System.Threading.Tasks;
using BA.Common.Models.User;
using AutoMapper;
using BA.Data.Models;
using BA.Service.Abstractions;
using Microsoft.AspNetCore.Identity;

namespace BA.Service.Realizations;

/// <summary>
/// Represents the service for managing users, implementing <see cref="IUserService"/>.
/// </summary>
public class UserService : IUserService
{
    private readonly UserManager<User> userManager;
    private readonly IMapper mapper;

    /// <summary>
    /// Initializes a new instance of the <see cref="UserService"/> class.
    /// </summary>
    /// <param name="userManager">The user manager for handling user operations.</param>
    /// <param name="mapper">The AutoMapper instance for mapping objects.</param>
    public UserService(
        UserManager<User> userManager, IMapper mapper)
    {
        this.userManager = userManager;
        this.mapper = mapper;
    }

    /// <inheritdoc/>
    public async Task<bool> UpdateUserAsync(string userEmail, UserUM newUserInfo)
    {
        var user = await this.userManager.FindByEmailAsync(userEmail);

        if (user is null)
        {
            return false;
        }

        user.FirstName = newUserInfo.FirstName;
        user.LastName = newUserInfo.LastName;
        user.PhoneNumber = newUserInfo.PhoneNumber; 

        await this.userManager.UpdateAsync(user);
        return true;
    }
    
    /// <inheritdoc/>
    public async Task<UserVM> GetUserByIdAsync(string userId)
    {
        var user = await this.userManager.FindByIdAsync(userId);

        if (user is null)
        {
            return null;
        }

        return this.mapper.Map<UserVM>(user);
    }
}