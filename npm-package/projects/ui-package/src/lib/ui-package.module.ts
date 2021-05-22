import { NgModule } from '@angular/core';
import { UiPackageComponent } from './ui-package.component';
import { TestComponentComponent } from './components/test-component/test-component.component';



@NgModule({
  declarations: [
    UiPackageComponent,
    TestComponentComponent
  ],
  imports: [
  ],
  exports: [
    UiPackageComponent
  ]
})
export class UiPackageModule { }
