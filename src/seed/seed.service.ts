import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from 'src/brands/brands.service';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandsService,
  ) {}
  populateDB() {
    this.carsService.fillCarsSeedData(CARS_SEED);
    this.brandService.fillBrandsSeedData(BRANDS_SEED);
    return 'SEED executed succesful';
  }
}
