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
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        // MyService SINGLETON
      ]

    };
  }
}
