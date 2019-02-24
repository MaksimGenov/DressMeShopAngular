import { AdminModule } from './admin.module';

describe('AdminPageModule', () => {
  let adminModule: AdminModule;

  beforeEach(() => {
    adminModule = new AdminModule();
  });

  it('should create an instance', () => {
    expect(adminModule).toBeTruthy();
  });
});
