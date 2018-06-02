import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {Adres} from './model/adres';

import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {catchError, tap} from 'rxjs/operators';
import {AdresData} from './model/adresdata';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'true'
    })
};

@Injectable({
  providedIn: 'root'
})
export class AdresService {

  private adresUrl = 'http://localhost:8080/adresses/';  // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  public getAdresses(): Observable<AdresData> {
    this.messageService.add('AdresService: fetched adresses');
    /* return of(Adresses); */
    return this.http.get<AdresData>(this.adresUrl, httpOptions)
      .pipe(
        tap(adres => this.log(`fetched adressen`)),
        catchError(this.handleError('getAdresses', null))
      );
  }

  /** GET adres by id. Will 404 if id not found */
  getAdres(id: number): Observable<Adres> {
    const url = `${this.adresUrl}${id}`;
    return this.http.get<Adres>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`fetched adres id=${id}`)),
        catchError(this.handleError<Adres>(`getAdres id=${id}`))
      );
  }


  /** PUT: update the adres on the server */
  updateAdres(adres: Adres): Observable<any> {
    return this.http.put(this.adresUrl, adres, httpOptions)
      .pipe(
        tap(_ => this.log(`updated adres id=${adres.adresId}`)),
        catchError(this.handleError<any>('updateAdres'))
      );
  }

  /** POST: add a new adres to the server
   addAdres(adres: Adres): Observable<Adres> {
    this.log("Saving adres: " + adres);
    return this.http.post(this.adresUrl, adres, httpOptions).pipe(
      tap(_ => this.log(`added adres id=${adres.adresId}`)),
      catchError(this.handleError<Adres>('addAdres'))
    );
  }
   */

  /** POST: add a new adres to the server */
  addAdres(adres: Adres): Observable<Adres> {
    this.log('Saving adres: ' + adres);
    return this.http.post<Adres>(this.adresUrl, adres, httpOptions).pipe(
      tap((adres: Adres) => this.log(`added adres w/ id=${adres.adresId}`)),
      catchError(this.handleError<Adres>('addAdres'))
    );
  }


  /** DELETE: delete the adres from the server */
  deleteAdres(adres: Adres | number): Observable<Adres> {
    const id = typeof adres === 'number' ? adres : adres.adresId;
    const url = `${this.adresUrl}/${id}`;

    return this.http.delete<Adres>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted adres id=${id}`)),
      catchError(this.handleError<Adres>('deleteAdres'))
    );
  }

  /** Log a AdresService message with the MessageService */
  private log(message: string) {
    this.messageService.add('AdresService: ' + message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
