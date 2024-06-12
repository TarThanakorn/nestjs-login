import { Request, Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() body) {
        const { username, password } = body;
        const USER = await this.authService.validateUser(username, password);
        if (USER) {
            return { message: 'Login successful', USER };
        } else {
            return { message: 'Invalid credentials' };
        }
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
