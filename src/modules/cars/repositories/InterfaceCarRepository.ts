import { CreateCarsRepositoryProps } from '../dtos/CarsInterfaceDTO'
import { Car } from '../infra/typeorm/entities/Car'

export interface CarRepositoryProps {
  create(data: CreateCarsRepositoryProps): Promise<Car>
  listByLicensePlate(license_plate: string): Promise<Car | null>
}