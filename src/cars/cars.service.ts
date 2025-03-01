import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private carsList = [
    {
      id: 1,
      brand: 'Ferrari',
      model: 'Gallardo',
    },
    {
      id: 2,
      brand: 'Fiat',
      model: 'Europe',
    },
    {
      id: 3,
      brand: 'Alfa Romeo',
      model: 'Energy',
    },
  ];

  public findAll() {
    return this.carsList;
  }

  public findById(id: number) {
    const car = this.carsList.find((car) => car.id === id);

    if (!car) {
      throw new NotFoundException(`car with the id ${id} not found`);
    }
    return car;
  }
}
