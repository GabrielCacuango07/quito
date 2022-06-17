import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//routes 

import { APP_ROUTING } from './app.routes';


//componets 
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HorarioComponent } from './components/horario/horario.component';


// servicios 
import { horarioService } from './components/service/horario.service';
import { DiaComponent } from './components/dia/dia.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HorarioComponent,
    DiaComponent,
    BuscadorComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [horarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
