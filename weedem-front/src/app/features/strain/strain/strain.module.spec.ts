import { StrainModule } from '../strain.module';

describe('StrainModule', () => {
  let strainModule: StrainModule;

  beforeEach(() => {
    strainModule = new StrainModule();
  });

  it('should create an instance', () => {
    expect(strainModule).toBeTruthy();
  });
});
