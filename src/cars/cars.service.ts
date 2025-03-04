import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';

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
}
