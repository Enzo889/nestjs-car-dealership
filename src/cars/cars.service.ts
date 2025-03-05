import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';
import { UpdateCarDto, CreateCarDto } from './dto';

@Injectable()
export class CarsService {
  private carsList: Car[] = [
    {
      id: uuidv4(),
      brand: 'Ferrari',
      model: 'Gallardo',
    },
    {
      id: uuidv4(),
      brand: 'Fiat',
      model: 'Europe',
    },
    {
      id: uuidv4(),
      brand: 'Alfa Romeo',
      model: 'Energy',
    },
  ];

  public findAll() {
    return this.carsList;
  }

  public findById(id: string) {
    const car = this.carsList.find((car) => car.id === car.id);

    if (!car) {
      throw new NotFoundException(`car with the id ${id} not found`);
    }
    return car;
  }

  public create(CreateCarDto: CreateCarDto) {
    const car: Car = {
      id: uuidv4(),
      ...CreateCarDto,
    };

    this.carsList.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carUpdate = this.findById(id);

    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException('car id is not valid inside body');

    this.carsList = this.carsList.map((car) => {
      if (car.id === id) {
        carUpdate = { ...carUpdate, ...updateCarDto, id };
        return carUpdate;
      }
      return car;
    });

    return carUpdate;
  }

  delete(id: string) {
    const car = this.findById(id);

    this.carsList = this.carsList.filter((car) => car.id !== id);
  }
}
