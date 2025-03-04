import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly CarsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.CarsService.findAll();
  }

  @Get(':id')
  getCarsByID(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.CarsService.findById(id);
  }

  @Post()
  createCar(@Body() body: string) {
    return body;
  }

  @Patch(':id')
  updateCar(@Param('id', ParseUUIDPipe) id: number, @Body() body: string) {
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: number) {
    return {
      method: 'delete',
      id,
    };
  }
}
