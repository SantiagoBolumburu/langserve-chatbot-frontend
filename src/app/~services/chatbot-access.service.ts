import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatbotAccessService {
  private httpService

  private URL = "http://langse-publi-zypqg3ybyucf-1111488589.us-east-1.elb.amazonaws.com"
  private endpoint_agent_invoke = "/agent/invoke"

  constructor() { }
}
