import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ResourceUrls } from '../utils/resource.urls';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

	constructor(public httpClient: HttpClient) { }

	getAllAccounts() {
		 return this.httpClient.get(ResourceUrls.getAccountsUrl, ResourceUrls.getHttpOptions);
	 }

}