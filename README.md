# DesafioDev
<h1>Aplicação CRUD feito com angular/nodejs<h1>

# Frontend

Projeto feito usando Angular, front que envia testa o CRUD do sistema, como proposto pelo Desafio de Desenvolviento.
<h5>Página Inicial<h5/> 
<img src="https://lh3.googleusercontent.com/pw/ACtC-3eCloZxl92IA37ekk3TCD0UAUhCaShKpmPyERF_yVwSllW2fCeAUDzH5MzIabQfPxO-HSIUNs9Ol6P7EMMkMsiKvsLwzj_oPv1UgFPjCvtL4aBw6tz6n4SR_CMkZLoP2-E8iaodaUyajO8BnSMbwERz=w1280-h582-no?authuser=0" width="750">

<h5>Create<h5/>
<img src= https://lh3.googleusercontent.com/pw/ACtC-3eLRQOwq9CH-3EXfpLKe_PmCCpHSuTaKldgObvqFMQkKGDrHgaRAy08fLRNjBRfywgQ_x7KxVyNKWeLtnOPi_CcccDczAOGECEL2BdrfHbMBBe0lI4rNzLf7eZW_6v3OqD4OmTqcncMIS0YVHfgvQ71=w1280-h586-no?authuser=0 width="750">

<h5>Read<h5/>
<img src= https://lh3.googleusercontent.com/pw/ACtC-3frkK_saD0FKPuq8YG_1uWRyfc6DVmpsQH4ClbVHEetTSp0mWztEQ73CEtAcAwSuY_CkXR5BuDFaKx1Pr9Woe49neqLbTCOmv3SYF4bH1yTIW32fHO9MT3ql7ukByO7E1XB2-OJmSJK3S3X-erFjG9-=w1280-h587-no?authuser=0 width="750">

<h5>Update<h5/>
<img src= https://lh3.googleusercontent.com/pw/ACtC-3cPxPQBAEUx1qUiov7VjUYb1pIz0m98cDv5APPCW6iM0o1G1-QF62NyjAK_K6l5d5E14eZhPYVpY5rfitS5XLJAWWNPj87ildiI2RMxQioK6C2_lfsr8axvhF2FJwVTZup5qlAzathlJukhkI6Gvil9=w1280-h587-no?authuser=0  width="750">

<h5>Delete<h5/>
<img src= https://lh3.googleusercontent.com/pw/ACtC-3dxGe_PeCp-XrdTpzIWoNDFqgqxHzKRf6fjb50kIkw1P2jxGqhYV4TVZgQtGiI3Q_ptKX_xxl8foZoW9aLLg5_Kltyr8bEaVa-XYdgG2tGO5DCsCkEKkWVSr6LxQ8W34fSNmvEjsAP5GN6vinpGZEy0=w1280-h582-no?authuser=0 width="750">

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
