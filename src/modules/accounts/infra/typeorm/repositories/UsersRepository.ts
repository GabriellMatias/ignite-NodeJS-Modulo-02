import { UserRepositoryProps } from '@modules/accounts/repositories/UsersRepositoryProps'
import { User } from '../entities/User'
import { Repository, getRepository } from 'typeorm'
import { UserProps } from '@modules/accounts/@UserProps/UserProps'

class UsersRepository implements UserRepositoryProps {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  async create({
    name,
    // eslint-disable-next-line camelcase
    driver_license,
    password,
    email,
  }: UserProps): Promise<void> {
    const user = this.repository.create({
      name,
      // eslint-disable-next-line camelcase
      driver_license,
      password,
      email,
    })

    await this.repository.save(user)
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email })

    return user
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id)

    return user
  }
}

export { UsersRepository }
