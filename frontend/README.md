# Frontend

Projeto feito usando Angular, front que envia testa o CRUD do sistema, como proposto pelo Desafio de Desenvolviento.



## Backend

Utilizei um db.json local para poder testar o CRUD da aplicação.

## Components criados

Componentes criados para auxiliar a distribuição das chamadas, product-create.component.ts , product-delete.ts, product-read.ts, product-update.ts.

## Service.ts

Métodos utilizados para criar, ler, atualizar e deletar.

export class ProductService {

  private baseUrl: string="http://localhost:3001/products"; //localhost da biblioteca de testes

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "Close", {
      duration: 4000,
      horizontalPosition: 'right',
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product> { //metodo p/criar os produtos
    return this.http.post<Product>(this.baseUrl, product) 
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl) 
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}` //interpolando por id, fazendo get do id
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}` //busca no backend dos produtos atualizado
    return this.http.put<Product>(url, product)
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url)
  }
}

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
