import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { AnimationsLevel2Component } from './animations-level-2/animations-level-2.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MarkdownModule.forRoot(), ],
  declarations: [ AppComponent, HelloComponent, OpenCloseComponent, AnimationsLevel2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
