import { AuthPageModule } from './auth-page.module';

describe('AuthModule', () => {
  let authModule: AuthPageModule;

  beforeEach(() => {
    authModule = new AuthPageModule();
  });

  it('should create an instance', () => {
    expect(authModule).toBeTruthy();
  });
});
