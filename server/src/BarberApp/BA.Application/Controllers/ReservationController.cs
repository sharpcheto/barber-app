using System.Collections.Generic;
using System.Threading.Tasks;
using BA.Common.Models.Reservation;
using BA.Data.Models;
using BA.Service.Abstractions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace BA.Application.Controllers;

/// <summary>
/// API Controller for managing reservations.
/// </summary>
[ApiController]
[Route("[controller]")]
[Authorize]
public class ReservationController : ControllerBase
{
    private readonly IReservationService reservationService;
    private readonly ICurrentUser currentUser;

    /// <summary>
    /// Initializes a new instance of the <see cref="ReservationController"/> class.
    /// </summary>
    /// <param name="reservationService">The service handling reservation operations.</param>
    /// <param name="currentUser">The current user context.</param>
    public ReservationController(IReservationService reservationService, ICurrentUser currentUser)
    {
        this.reservationService = reservationService;
        this.currentUser = currentUser;
    }

    /// <summary>
    /// Retrieves all reservations for the current user.
    /// </summary>
    /// <returns>A list of reservations belonging to the current user.</returns>
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ReservationVM>>> GetAllReservationsAsync()
    {
        var allReservations = await this.reservationService.GetAllReservationsAsync(this.currentUser.UserId);
        return Ok(allReservations);
    }

    /// <summary>
    /// Creates a new reservation for the current user.
    /// </summary>
    /// <param name="reservationIm">The reservation input model.</param>
    /// <returns>The created reservation view model or null if creation fails.</returns>
    [HttpPost]
    public async Task<ActionResult<ReservationVM?>> CreateReservationAsync(ReservationIM reservationIm)
    {
        return await this.reservationService.CreateReservationAsync(reservationIm, this.currentUser.UserId);
    }
}