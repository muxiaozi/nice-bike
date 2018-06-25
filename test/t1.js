function MyPromise(fn) {
    let that = this;
    this.thenResult = null;
    this.catchResult = null;
    fn((resolve) => {
        setTimeout(() => {
            if (this.resolve) {
                let result = this.resolve(resolve);

                if (this.thenResult) {
                    console.log('1111');

                    if (result instanceof MyPromise) {
                        console.log('2222');
                        result.then((res) => {
                            console.log('3333');
                            that.thenResult(res);
                        })
                    } else {
                        this.thenResult(result);
                    }
                }
            }
        }, 0);
    }, (reject) => {
        setTimeout(() => {
            if (this.reject) {
                let result = this.reject(reject);
                if (this.catchResult) {
                    if (result instanceof MyPromise) {
                        result.then((res) => {
                            that.catchResult(res);
                        })
                    } else {
                        this.catchResult(result);
                    }
                }
            }
        }, 0);
    });
}

MyPromise.prototype.then = function (resolve, reject) {
    let that = this;
    if (resolve) this.resolve = resolve;
    if (reject) this.reject = reject;
    return new MyPromise((resolve, reject) => {
        that.thenResult = (res) => {
            resolve(res);
        }
        that.catchResult = (res) => {
            reject(res);
        }
    });
}

MyPromise.prototype.catch = function (reject) {
    let that = this;
    if (reject) this.reject = reject;
    return new MyPromise((resolve, reject) => {
        that.thenResult = (res) => {
            resolve(res);
        }
        that.catchResult = (res) => {
            reject(res);
        }
    });
}

module.exports = MyPromise;