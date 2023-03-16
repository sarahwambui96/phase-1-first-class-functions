//receivesAFunction(callback)
function receivesAFunction(callback){
     return callback();
}
receivesAFunction(function(){return "Hello"})

//returnsANamedFunction()
function returnsANamedFunction(){
    return function doCheck(){
        return "Bye!";
    }
}
returnsANamedFunction()

//returnsAnAnonymousFunction()
function returnsAnAnonymousFunction(){
    return function(){return "Welcome!"};
}
returnsAnAnonymousFunction()
