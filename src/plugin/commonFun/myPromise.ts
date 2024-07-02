class myPromise {
  resolve: any;
  reject: any;
  all: any;
  race: any;
  allSettled: any; // es2020
  any: any; // es2021
  constructor() {
    this.resolve = null;
    this.reject = null;
    this.all = null;
    this.race = null;
    this.allSettled = null;
    this.any = null;
  }
  then() {
    console.log("then");
  }
  catch() {
    console.log("catch");
  }
  finally() {
    console.log("finally");
  }
}
