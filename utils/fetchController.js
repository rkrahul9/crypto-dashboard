class FetchController {
  constructor() {
    this.controller = new AbortController();
  }

  async request(url) {
    try {
      const response = await fetch(url, { signal: this.controller.signal });
      return await response.json();
    } catch(error) {
      console.log("Error", error);
    }  
  }

  abort() {
    this.controller.abort();
  }

  isAborted() {
    this.controller.signal.aborted;
  }
  
}

const API = new FetchController();

export default API;