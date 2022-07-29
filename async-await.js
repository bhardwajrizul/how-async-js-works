function ReturnPromise(time) {
    return new Promise((resolve, reject) => {

        if(isNaN(time)) {
            reject(new Error('Enter a vald number!'));
        }

        setTimeout(() => resolve("Promise Resolved!!"), time);
    });
}

function delayCallback(time, foo) {
    let fooData = null;
    let err = null;

    if(isNaN(time)) {
        err = new Error('Enter a valid number!');
        foo(fooData, err);
        return;
    }

    setTimeout(() => {
        fooData = "Data returned in callback";
        foo(fooData, err);
    }, time);
    
}

function delayThen(time) {
    return ReturnPromise(time);
}

async function delayAsync(time){
    let resolved_promise = await ReturnPromise(time); 
    /* 
    If resolved_promise was another promise we could await it here like :
    let final_message = await resolved_promise;
    Infact we can await multiple promises with the help of await 
    without await we would have to do something like this
    ReturnPromise(time).then((data) => code).then((new_data) => code).. which would be very messy and unclean!  
    */
     return resolved_promise;
}

// METHOD 1 (CALLBACKS) (OG METHOD)
delayCallback(1000, (data, err) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// METHOD 2 (Promise->Then-catch) 
delayThen(1000)
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.error(err);
})

// METHOD 3 (Promise->async-await) 
delayAsync(1000)
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
});

