
class Model {
    constructor() {
        this.data;
    }

    static create(data) {
        this.data = data;
        return new Promise((resolve, reject) => {
            
            if (!isNaN(data)) {
                return reject(new Error("Enter a string!"));
            }
            
            setTimeout(() => resolve(data) , 5000);
            
        })

    }
}

const catchAsync = fn =>  {
    return (req, res, next) => {
        fn(req, res, next).catch(err => console.error(err));
    }
}

// function catchAsync(fn) {
//     return function(req, res, next) {
//         fn(req, res, next)
//         .catch(function(err) {
//             return next(err);
//         })
//     }
// }


let response = catchAsync(async (req, res, next) => {
    const result = await Model.create("String");
    console.log(result);
})


response();