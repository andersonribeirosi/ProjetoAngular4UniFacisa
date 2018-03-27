import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoute } from './route';
import { ContatoComponent } from './contato/contato.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { InformaticaComponent } from './produtos/informatica/informatica.component';
import { AdicionarPortfolioComponent } from './adicionar/adicionar-portfolio/adicionar-portfolio.component';
import { LoginComponent } from './login/login.component';
import { AdicionarProdutoComponent } from './adicionar/adicionar-produto/adicionar-produto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContatoComponent,
    PortfolioComponent,
    ProdutosComponent,
    InformaticaComponent,
    AdicionarPortfolioComponent,
    AdicionarProdutoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
