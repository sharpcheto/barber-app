# Build Stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
# Install clang/zlib1g-dev dependencies for publishing to native
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    clang zlib1g-dev

ARG BUILD_CONFIGURATION=Release

# Set the working directory
WORKDIR /src

# Copy the project file and restore dependencies
COPY ["server/src/BarberApp/BA.Application/BA.Application.csproj", "BA.Application/"]
RUN dotnet restore "./BA.Application/BA.Application.csproj"

# Copy the rest of the application code
COPY server/src/BarberApp . 

WORKDIR "/src/BA.Application"

# Build the application
RUN dotnet build "./BA.Application.csproj" -c $BUILD_CONFIGURATION -o /app/build

# Publish the application
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./BA.Application.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=true

# Final Runtime Image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
EXPOSE 8080
COPY --from=publish /app/publish .
ENTRYPOINT ["./BA.Application"]
