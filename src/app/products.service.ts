import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   private SERVER_URL = "https://jd-helloworldazure-windows.azurewebsites.net/api/get-persons";

  constructor(private httpClient: HttpClient) { }

  public get(){  
		return this.httpClient.get(this.SERVER_URL);
}
}
