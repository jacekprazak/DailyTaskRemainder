using System;
using API.DTOs;
using API.Entities;
using API.Interfaces;

namespace API.Extensions;

public static class UserExtensions
{
    public static async Task<UserDto> ToDto(this User user, ITokenService tokenService)
    {
        return new UserDto
        {
            Id = user.Id,
            Name = user.Name,
            Email = user.Email!,
            ImageUrl = user.ImageUrl,
            Token = await tokenService.CreateToken(user)
        };
    }
}
