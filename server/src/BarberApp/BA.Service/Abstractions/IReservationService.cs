using System.Collections.Generic;
using System.Threading.Tasks;
using BA.Common.Models.Reservation;

namespace BA.Service.Abstractions;

/// <summary>
/// Represents the service interface for managing reservations.
/// </summary>
public interface IReservationService
{
    
    /// <summary>
    /// Retrieves all reservations for a specific user.
    /// </summary>
    /// <param name="userId">The unique identifier of the user.</param>
    /// <returns>A task that represents the asynchronous operation. The task result contains a collection of reservation view models.</returns>
    Task<IEnumerable<ReservationVM>> GetAllReservationsAsync(string userId);
    
    /// <summary>
    /// Creates a new reservation for a specific user.
    /// </summary>
    /// <param name="reservationIm">The input model containing reservation details.</param>
    /// <param name="userId">The unique identifier of the user.</param>
    /// <returns>A task that represents the asynchronous operation. The task result contains the created reservation view model.</returns>
    Task<ReservationVM> CreateReservationAsync(ReservationIM reservationIm, string userId);
}