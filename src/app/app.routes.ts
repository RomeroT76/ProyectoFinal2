import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { UgestionComponent } from './pages/ugestion/ugestion.component';
import { BuscadorComponent } from './pages/buscador/buscador.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EdituserComponent } from './pages/edituser/edituser.component';
import { EdituseradminComponent } from './pages/edituseradmin/edituseradmin.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';

export const routes: Routes = [
    {path: 'login/register', title: 'Registro', component:RegisterComponent},
    {path: 'ugestion', title: 'Gestion Usuarios', component: UgestionComponent},
    {path: 'buscador', title: 'Agregar Libros', component:BuscadorComponent},
    {path: 'catalogo', title: 'Catalogo', component:CatalogoComponent},
    {path: 'register', title: 'Registro', component:RegisterComponent},
    {path: 'login', title: 'Iniciar Sesion', component:LoginComponent},
    {path: 'edituser', title: 'Editar usuario', component:EdituserComponent},
    {path: 'edituseradmin', title: 'Editar usuario admin', component:EdituseradminComponent},
    {path: 'favorite', title: 'Mis libros', component: FavoriteComponent},
    {path: '' , component:InicioComponent}
];
