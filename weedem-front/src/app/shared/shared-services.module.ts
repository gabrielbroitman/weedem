import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
imports: [
  CommonModule,
  ReactiveFormsModule

 ],
declarations: [], // componentes vao aqui e no exports
exports: [CommonModule, ReactiveFormsModule, DatePipe]
})
export class SharedServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedServicesModule,
      providers: [
        // MyService SINGLETON
      ]

    };
  }
}
