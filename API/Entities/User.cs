using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;

namespace API.Entities;

public class User : IdentityUser
{
    public required string Name { get; set; } = "";
    public string? ImageUrl { get; set; }
    public string? RefreshToken { get; set; }
    public DateTime? RefreshTokenExpiry { get; set; }

    // Navigation property

    public Member Member { get; set; } = null!;
}
