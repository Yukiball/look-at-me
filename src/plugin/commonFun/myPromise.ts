const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
const FUNC = "function";

export class myPromise {
  private state: string = PENDING;
  private result: any = undefined;
  private handler: Array<any> = [];
  private resolve: (data: any) => any;
  private reject: (reson: any) => any;
  constructor(func: (res: any, rej: any) => void) {
    this.resolve = (data: any) => {
      this.changeState(FULFILLED, data);
    };
    this.reject = (reson: any) => {
      this.changeState(REJECTED, reson);
    };
    try {
      func(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }
  private changeState(state: string, result: any) {
    if (this.state !== PENDING) return;
    this.state = state;
    this.result = result;
    // 异步情况走这里
    this.doSomeThing();
  }
  private isFunc(cb: any, resolve: any, reject: any) {
    if (typeof cb === FUNC) {
      try {
        const value = cb(this.result);
        resolve(value);
      } catch (error) {
        reject(error);
      }
    } else {
      // 对应的回调不是函数的时候
      this.state === FULFILLED ? resolve(this.result) : reject(this.result);
    }
  }
  private doSomeThing() {
    if (this.state === PENDING) return;
    while (this.handler.length) {
      const { onResolved, onRejected, resolve, reject } = this.handler.shift();
      if (this.state === FULFILLED) {
        this.isFunc(onResolved, resolve, reject);
      } else {
        this.isFunc(onRejected, resolve, reject);
      }
    }
  }
  then(onResolved: any, onRejected: any) {
    return new myPromise((resolve: any, reject: any) => {
      this.handler.push({ onResolved, onRejected, resolve, reject });
      // 同步情况直接这里
      this.doSomeThing();
    });
  }
}
const p = new myPromise((res, rej) => {
  setTimeout(() => {
    rej(333);
  }, 1000);
});

// p.then(1233, (error: any) => {
//   console.log("失败", error);
//   return 456;
// }).then(
//   (res: any) => {
//     console.log(res);
//   },
//   (error: any) => {
//     console.log("失败", error);
//   }
// );

// p.then(
//   (val: any) => {
//     console.log("成功1", val);
//   },
//   (error: any) => {
//     console.log("失败1", error);
//   }
// );
// p.then(
//   (val: any) => {
//     console.log("成功2", val);
//     return 123123
//   },
//   (error: any) => {
//     console.log("失败2", error);
//   }
// ).then(
//   (val: any) => {
//     console.log("成功3", val);
//   },
//   (error: any) => {
//     console.log("失败3", error);
//   }
// );
