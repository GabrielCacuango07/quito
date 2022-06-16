import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { DiaComponent } from "./components/dia/dia.component";
import { HomeComponent } from "./components/home/home.component";
import { HorarioComponent } from "./components/horario/horario.component";

const APP_ROUTES : Routes = [
{path:'home',component: HomeComponent},
{path:'about',component: AboutComponent},
{path:'horario',component: HorarioComponent},
{path:'dia/:id',component: DiaComponent},
{path: '**',pathMatch:'full', redirectTo:'home'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);