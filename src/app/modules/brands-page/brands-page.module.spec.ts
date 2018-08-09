import { BrandsPageModule } from './brands-page.module';

describe('BrandsPageModule', () => {
  let brandsPageModule: BrandsPageModule;

  beforeEach(() => {
    brandsPageModule = new BrandsPageModule();
  });

  it('should create an instance', () => {
    expect(brandsPageModule).toBeTruthy();
  });
});
