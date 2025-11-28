import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserModuleDto } from '../user-module/dto/create-user-module.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserModuleDto) {
    const user = await this.authService.signup(createUserDto);
    return { message: 'User created', user };
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) return { message: 'Invalid credentials' };
    const payload = { sub: user._id, email: user.email };
    const token = this.jwtService.sign(payload);
    return { access_token: token };
  }
}
