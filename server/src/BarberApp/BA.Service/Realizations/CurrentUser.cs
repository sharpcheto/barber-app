// <copyright file="CurrentUser.cs" company="ORB">
// Copyright (c) ORB. All rights reserved.
// </copyright>

using System.Linq;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using BA.Service.Abstractions;

namespace BA.Service.Realizations;

/// <summary>
/// Class that implements <see cref="ICurrentUser"/>.
/// </summary>
internal class CurrentUser : ICurrentUser
{
    /// <summary>
    /// Initializes a new instance of the <see cref="CurrentUser"/> class.
    /// </summary>
    /// <param name="httpContextAccessor">HTTP Context Accessors.</param>
    public CurrentUser(IHttpContextAccessor httpContextAccessor)
    {
        this.UserId = httpContextAccessor?
            .HttpContext?
            .User
            .Claims
            .FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?
            .Value!;
    }

    /// <inheritdoc/>
    public string UserId { get; }
}