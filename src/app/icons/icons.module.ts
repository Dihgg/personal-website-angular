import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {
  Facebook,
  Twitter,
  Linkedin,
  Github
} from 'angular-feather/icons';

@NgModule({
  declarations: [],
  imports: [
    FeatherModule.pick({
      Facebook,
      Twitter,
      Linkedin,
      Github
    })
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
