import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
  imports: [ ... ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        MyService
      ]
    };
  }
}
