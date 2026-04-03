using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using API.Entities;
using API.Interfaces;
using Microsoft.IdentityModel.Tokens;

namespace API.Services;

public class TokenService(IConfiguration config) : ITokenService
{
    public string CreateToken(User user)
    {
        // 1) Get the key from config file 
        var tokenKey = config["TokenKey"] ?? throw new Exception("Token key doesn't exist!");
        if(tokenKey.Length < 64) throw new Exception("Token key is to short");
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenKey));

        // 2) Configure claims
        var claims = new List<Claim>
        {
            new(ClaimTypes.Email, user.Email),
            new(ClaimTypes.NameIdentifier, user.Name)
        };

        // 3) Setup credentials
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

        // 4) Token descriptor
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.UtcNow.AddDays(7),
            SigningCredentials = creds
        };

        // 5) Token handler
        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescriptor);

        return tokenHandler.WriteToken(token);
    }
}
