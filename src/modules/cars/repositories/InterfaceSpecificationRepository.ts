import { Specification } from '../infra/typeorm/entities/Specification'

interface CreateSpecificationProps {
  name: string
  description: string
}

interface SpecificationRepositoryProps {
  create({ name, description }: CreateSpecificationProps): Promise<void>
  list(): Promise<Specification[]>
  findByName(name: string): Promise<Specification>
  findByIds(ids: string[]): Promise<Specification[]>
}

export { SpecificationRepositoryProps, CreateSpecificationProps }
