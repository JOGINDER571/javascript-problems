// Promise is an javascript object which represent eventual completion or failure of an asynchronous operation and its resulting value.

const states = {
  pending: 1,
  fullfill: 2,
  rejected: 3,
};

class MyPromise {
  constructor(callback) {
    this.state = states.pending;
    this.value = undefined;
    this.handlers = [];
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);

    try {
      callback(this.resolve, this.reject);
    } catch (error) {
      callback(this.reject);
    }
  }

  resolve(value) {
    this.handleUpdate(value, states.fullfill);
  }

  reject(err) {
    this.handleUpdate(err, states.rejected);
  }

  handleUpdate(value, state) {
    if (state === states.pending) {
      return;
    }
    setTimeout(() => {
      this.value = value;
      this.state = state;
      this.executeHandlers();
    });
  }

  executeHandlers() {
    if (this.state === states.pending) {
      return;
    }
    this.handlers.forEach((ele) => {
      if (this.state === states.fullfill) {
        return ele.onSuccess(this.value);
      } else {
        return ele.onReject(this.value);
      }
    });
    this.handlers = [];
  }

  addHandler(handlers) {
    this.handlers.push(handlers);
    this.executeHandlers();
  }

  then(onSuccess, onReject) {
    return new MyPromise((res, rej) => {
      this.addHandler({
        onSuccess: (value) => {
          if (!onSuccess) {
            return res(value);
          }
          try {
            return res(onSuccess(value));
          } catch (error) {
            rej(error);
          }
        },
        onReject: (value) => {
          if (!onReject) {
            return rej(value);
          }
          try {
            return rej(onReject(value));
          } catch (error) {
            rej(error);
          }
        },
      });
    });
  }

  catch(onReject) {
    return this.then(null, onReject);
  }
  // finally(callback) {
  //   return new MyPromise((resolve, reject) => {
  //     let wasResolved;
  //     let value;
  //     this.then((val) => {
  //       wasResolved = true;
  //       value = val;
  //       return callback();
  //     }).catch((err) => {
  //       wasResolved = false;
  //       value = err;
  //       return callback();
  //     });
  //     if (wasResolved) {
  //       resolve(value);
  //     } else {
  //       reject(value);
  //     }
  //   });
  // }
  finally(callback) {
    return this.then(
      (value) => {
        return MyPromise.resolve(callback()).then(() => value);
      },
      (reason) => {
        return MyPromise.resolve(callback()).then(() => {
          throw reason;
        });
      }
    );
  }
}

const promise = new MyPromise((res, rej) => {
  setTimeout(() => {
    res("hello bro");
  }, 0);
});

promise
  .then((data) => {
    console.log(data, "su");
  })
  .catch((err) => {
    console.log(err, "err");
  })
  .finally(() => {
    console.log("running");
  });
