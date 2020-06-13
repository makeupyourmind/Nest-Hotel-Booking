import {
  Controller,
  Post,
  Get,
  Delete,
  Body,
  UseGuards,
  Param,
} from '@nestjs/common';
import { CreateHallDto } from './dto/create-hall.dto';
import { HallService } from './hall.service';
import { Hall } from './interfaces/hall.interface';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../../shared/decorators/roles.decorator';
import { RolesGuard } from '../../shared/guards/roles.guard';
import { UserRole } from '../user/roles/user-role.enum';

@Controller('halls')
export class HallController {
  constructor(private readonly hallService: HallService) { }

  @Post()
  @Roles(UserRole.admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  public async create(@Body() createHallDto: CreateHallDto): Promise<Hall> {
    return this.hallService.create(createHallDto);
  }

  @Delete(':id')
  @Roles(UserRole.admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async deleteById(@Param('id') id): Promise<Hall> {
    return this.hallService.deleteById(id);
  }

  @Delete()
  @Roles(UserRole.admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  async delete(): Promise<Hall> {
    return this.hallService.delete();
  }

  @Get()
  async findAll(): Promise<Hall[]> {
    return this.hallService.findAll();
  }
}
