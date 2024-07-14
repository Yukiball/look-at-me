const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
const FUNC = "function";

export class MyPromise {
  private state: string = PENDING;
  private result: any = undefined;
  #handler: Array<any> = [];
  #resolve: (data: any) => any;
  #reject: (reason: any) => any;
  constructor(func: (res: any, rej: any) => void) {
    this.#resolve = (data: any) => {
      this.changeState(FULFILLED, data);
    };
    this.#reject = (reason: any) => {
      this.changeState(REJECTED, reason);
    };
    try {
      func(this.#resolve, this.#reject);
    } catch (error) {
      this.#reject(error);
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
    queueMicrotask(() => {
      if (typeof cb === FUNC) {
        try {
          const value = cb(this.result);
          if (this.isPromiseLike(value)) {
            value.then(resolve, reject);
          } else {
            resolve(value);
          }
        } catch (error) {
          reject(error);
        }
      } else {
        // 对应的回调不是函数的时候
        this.state === FULFILLED ? resolve(this.result) : reject(this.result);
      }
    });
  }
  private isPromiseLike(fn: any) {
    return !!(
      fn !== null &&
      (typeof fn === "function" || typeof fn === "object") &&
      typeof fn.then === "function"
    );
  }
  private doSomeThing() {
    if (this.state === PENDING) return;
    while (this.#handler.length) {
      const { onResolved, onRejected, resolve, reject } = this.#handler.shift();
      if (this.state === PENDING) return;
      if (this.state === FULFILLED) {
        this.isFunc(onResolved, resolve, reject);
      } else {
        this.isFunc(onRejected, resolve, reject);
      }
    }
  }
  then(onResolved: any, onRejected?: any) {
    return new MyPromise((resolve: any, reject: any) => {
      this.#handler.push({ onResolved, onRejected, resolve, reject });
      // 同步情况直接这里
      this.doSomeThing();
    });
  }
  catch(onRejected: any) {
    return this.then(null, onRejected);
  }
  finally(callback: any) {
    return this.then(
      (data: any) => {
        callback();
        return data;
      },
      (reason: any) => {
        callback();
        throw reason;
      }
    );
  }
  // 返回一个已完成的promise
  // 1、传递的data本来就是promise对象
  // 2、传递的data是promiseLike,返回新的Promise，状态和其保持一致
  // 3、传递的data是其他
  static resolve(data: any) {
    if (data instanceof MyPromise) {
      return data;
    }
    return new MyPromise((resolve, reject) => {
      if (
        data !== null &&
        (typeof data === "function" || typeof data === "object") &&
        typeof data.then === "function"
      ) {
        data.then(resolve, reject);
      } else {
        resolve(data);
      }
    });
  }
  // 得到一个被拒绝的Promise
  static reject(reason: any) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }

  static all(proms: any) {
    return new MyPromise((res, rej) => {
      try {
        const saveArr: any[] = [];
        let count = 0;
        let fulfilledCount = 0;
        for (const p of proms) {
          const i = count;
          count++;
          MyPromise.resolve(p).then((data: any) => {
            fulfilledCount++;
            saveArr[i] = data;
            if (count === fulfilledCount) {
              res(saveArr);
            }
          }, rej);
        }
        if (count === 0) {
          res(saveArr);
        }
      } catch (error) {
        rej(error);
        console.error(error);
      }
    });
  }
}

Promise.all([1, 2, 3, 4]);

// const p = new MyPromise((res, rej) => {
//   throw Error("123");
//   setTimeout(() => {
//     rej(333);
//     console.log(p);
//   });
// });

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
// setTimeout(() => {
//   console.log("time");
// }, 0);
// p.then(
//   (val: any) => {
//     console.log(111);
//     return new MyPromise((res, rej) => {
//       res(444);
//     });
//   },
//   (error: any) => {
//     console.log("失败!!", error);
//   }
// ).then(
//   (val: any) => {
//     console.log("", val);
//   },
//   (error: any) => {
//     console.log("失败!!3", error);
//   }
// );
// p.then(
//   (val: any) => {
//     console.log("成功2", val);
//     return 123123;
//   },
//   (error: any) => {
//     console.log("失败2", error);
//   }
// )
//   .then(
//     (val: any) => {
//       console.log("成功3", val);
//     },
//     (error: any) => {
//       console.log("失败3", error);
//     }
//   )
//   .then(
//     (val: any) => {
//       console.log("成功4", val);
//     },
//     (error: any) => {
//       console.log("失败4", error);
//     }
//   )
//   .then(
//     (val: any) => {
//       console.log("成功5", val);
//     },
//     (error: any) => {
//       console.log("失败5", error);
//     }
//   )

// p.then((res: any) => {
//   console.log(1);
// }).catch((rej: any) => {
//   console.log(rej);
// });
