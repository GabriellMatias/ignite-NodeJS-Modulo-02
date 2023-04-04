import { CategoriesRepository } from '../../repositories/categoriesRepository'
import { ImportCategoryController } from './importCategoryController'
import { ImportCategoryUseCase } from './importCategoryUseCase'

const categoriesRepositoy = CategoriesRepository.getInstance()
const importCategoryUseCase = new ImportCategoryUseCase()
export const importCategoryController = new ImportCategoryController(
  importCategoryUseCase,
)
