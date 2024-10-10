import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { BindingComponent } from './components/demos/binding/binding.component';
import { PipeComponent } from './components/demos/pipe/pipe.component';
import { DirectiveComponent } from './components/demos/directive/directive.component';
import { ListeProduitsComponent } from './components/exos/liste-produits/liste-produits.component';
import { ParentComponent } from './components/demos/inputOutput/parent/parent.component';
import { ShoppingComponent } from './components/exos/shoppingList/shopping/shopping.component';
import { LivreServiceComponent } from './components/demos/livre-service/livre-service.component';
import { ShoppingListServiceComponent } from './components/exos/shopping-list-service/shopping-list-service.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'demos', children: [
        { path: 'binding', component: BindingComponent},
        { path: 'pipe', component: PipeComponent},
        { path: 'directive', component: DirectiveComponent },
        { path: 'inputOutput', component:  ParentComponent},
        { path: 'service', component:  LivreServiceComponent}
    ]},
    { path: 'exos', children: [
        { path: 'directive', component: ListeProduitsComponent },
        { path: 'inputOutput', component: ShoppingComponent },
        { path: 'service', component: ShoppingListServiceComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
