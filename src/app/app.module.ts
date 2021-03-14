import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopComponent } from './components/top/top.component';
import { PanelComponent } from './components/panel/panel.component';
import { BarsComponent } from './components/bars/bars.component';
import { ProgressComponent } from './components/progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    PanelComponent,
    BarsComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
