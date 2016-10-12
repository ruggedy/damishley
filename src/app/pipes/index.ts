import { NgModule } from '@angular/core';

import { ArrayPipe } from './array.pipe';
import { WordPipe } from './word.pipe';


export const PIPES = [
  ArrayPipe,
  WordPipe,
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class PipesModule { }