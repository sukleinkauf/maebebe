
import { HttpErrorResponse } from '@angular/common/http';

export class RequestException {

  constructor(private response: HttpErrorResponse) { }

  getStatus()
  {
    return this.response.status;
  }

  getMessage()
  {
    switch(this.response.status) {
      case 404:
        return this.response.error;
      case 400:
        return this.response.error;
      case 405:
        return this.response.error;
      case 422:
        return this.getValidationErrors();
      default:
        return "Ocorreu um erro";
    }
  }

  private getValidationErrors()
  {
    let error = this.response.error;

    let errorMessages = [];

    for (let field in error) {
        for (let message of error[field]) {
            errorMessages.push(message);
        }
    }

    return errorMessages.join(" <br/> ");
  }
}
