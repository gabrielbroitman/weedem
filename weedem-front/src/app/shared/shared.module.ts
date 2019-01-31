import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
imports: [ CommonModule ],
declarations: [], // componentes vao aqui e no exports
exports: [CommonModule, FormsModule, DatePipe]
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
