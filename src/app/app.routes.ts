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
import { CatalogouserComponent } from './pages/catalogouser/catalogouser.component';
import { EditlibroComponent } from './pages/editlibro/editlibro.component';
import { HistoryComponent } from './pages/history/history.component';

export const routes: Routes = [
    {path: 'login/register', title: 'Registro', component:RegisterComponent},
    {path: 'ugestion', title: 'Gestion Usuarios', component: UgestionComponent},
    {path: 'buscador', title: 'Agregar Libros', component:BuscadorComponent},
    {path: 'catalogo', title: 'Catalogo', component:CatalogoComponent},
    {path: 'catalogouser', title: 'Catalogo', component:CatalogouserComponent},
    {path: 'register', title: 'Registro', component:RegisterComponent},
    {path: 'login', title: 'Iniciar Sesion', component:LoginComponent},
    {path: 'edituser', title: 'Editar usuario', component:EdituserComponent},
    {path: 'edituseradmin', title: 'Editar usuario admin', component:EdituseradminComponent},
    {path: 'favorite', title: 'Mis libros', component: FavoriteComponent},
    {path: 'editlibro', title: 'Editar libro', component: EditlibroComponent},
    {path: 'history', title: 'Historial', component: HistoryComponent},
    {path: '' , component:InicioComponent}
];
