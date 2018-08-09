import { CategoriesPageModule } from './categories-page.module';

describe('CategoriesPageModule', () => {
  let categoriesPageModule: CategoriesPageModule;

  beforeEach(() => {
    categoriesPageModule = new CategoriesPageModule();
  });

  it('should create an instance', () => {
    expect(categoriesPageModule).toBeTruthy();
  });
});
