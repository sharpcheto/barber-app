using System;
using Npgsql;
using Microsoft.Extensions.Configuration;

namespace BA.Application.Utility;

/// <summary>
/// Helper class to manage database connection strings.
/// </summary>
public static class ConnectionHelper
{
    /// <summary>
    /// Retrieves the connection string from the configuration or environment variables.
    /// </summary>
    /// <param name="configuration">The application configuration object.</param>
    /// <returns>The resolved connection string.</returns>
    /// <exception cref="InvalidOperationException">Thrown if the connection string cannot be found.</exception>
    public static string GetConnectionString(IConfiguration configuration)
    {
        // Attempt to get the connection string directly from configuration
        var connectionString = configuration.GetConnectionString("DefaultConnection");

        // If not found, try to get the connection string from the environment variable
        if (string.IsNullOrEmpty(connectionString))
        {
            var databaseUrl = Environment.GetEnvironmentVariable("DATABASE_URL");
            if (!string.IsNullOrEmpty(databaseUrl))
            {
                connectionString = BuildConnectionString(databaseUrl);
            }
        }

        // If still not found, throw an exception
        if (string.IsNullOrEmpty(connectionString))
        {
            throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
        }

        return connectionString;
    }

    /// <summary>
    /// Builds a connection string from a database URL.
    /// </summary>
    /// <param name="databaseUrl">The database URL (e.g., from environment variables).</param>
    /// <returns>The constructed connection string.</returns>
    private static string BuildConnectionString(string databaseUrl)
    {
        var databaseUri = new Uri(databaseUrl);
        var userInfo = databaseUri.UserInfo.Split(':');

        var builder = new NpgsqlConnectionStringBuilder
        {
            Host = databaseUri.Host,
            Port = databaseUri.Port,
            Password = userInfo[1],
            Username = userInfo[0],
            Database = databaseUri.LocalPath.TrimStart('/'),
            SslMode = SslMode.Prefer, // Use SSL by default.
            // TrustServerCertificate = true // Uncomment if you need to trust the server certificate.
        };

        return builder.ToString();
    }
}
