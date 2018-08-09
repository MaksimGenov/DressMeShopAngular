import { AllProductsPageModule } from './all-products-page.module';

describe('AllProductsPageModule', () => {
  let allProductsPageModule: AllProductsPageModule;

  beforeEach(() => {
    allProductsPageModule = new AllProductsPageModule();
  });

  it('should create an instance', () => {
    expect(allProductsPageModule).toBeTruthy();
  });
});
