import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { InformaticaComponent } from './produtos/informatica/informatica.component';
import { AdicionarProdutoComponent } from './adicionar/adicionar-produto/adicionar-produto.component';
import { AdicionarPortfolioComponent } from './adicionar/adicionar-portfolio/adicionar-portfolio.component';
import { LoginComponent } from './login/login.component';


export const appRoute = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'destaques', component: ProdutosComponent },
  { path: 'informatica', component: InformaticaComponent },
  { path: 'adicionar-produto', component: AdicionarProdutoComponent },
  { path: 'adicionar-portfolio', component: AdicionarPortfolioComponent },
  { path: 'login', component: LoginComponent }
]

