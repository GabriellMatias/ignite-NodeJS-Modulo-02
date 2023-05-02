import { Response } from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

class CreateCategoryController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description }: any = request.body
    await this.createCategoryUseCase.execute({ name, description })
    return response
      .status(201)
      .send({ message: 'Category create successfully' })
  }
}

export { CreateCategoryController }
