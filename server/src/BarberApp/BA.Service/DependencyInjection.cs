using BA.Service.Abstractions;
using BA.Service.Realizations;
using Microsoft.Extensions.DependencyInjection;

namespace BA.Service;

/// <summary>
/// Provides methods to configure dependency injection for services.
/// </summary>
public static class DependencyInjection
{
    /// <summary>
    /// Adds service dependencies to the dependency injection container.
    /// </summary>
    /// <param name="service">The service collection to which dependencies will be added.</param>
    public static void AddServices(this IServiceCollection service)
    {
        service
            .AddScoped<ICurrentUser, CurrentUser>()
            .AddScoped<IUserService, UserService>()
            .AddScoped<IReservationService, ReservationService>();
    }
}