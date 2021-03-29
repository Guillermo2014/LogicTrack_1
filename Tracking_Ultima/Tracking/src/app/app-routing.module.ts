import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './clientes/agregar/agregar.component';
import { ListarComponent } from './clientes/listar/listar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { InventarioComponent } from './inventario/inventario.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch: 'full',
  },
  {path: 'login', component:LoginComponent},
  {path: 'home', component:HomeComponent},
  {path: 'listar', component:ListarComponent},
  {path: 'agregar', component:AgregarComponent},
  {path: 'inventario', component:InventarioComponent},
  //{path: 'formulario', component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
