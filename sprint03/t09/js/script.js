let validator = {
    set: function(target, prop, value){
        if(prop === "age"){
            if(!Number.isInteger(value)){
                throw new TypeError("The age is not an integer");
            }
            else if (Number(value) > 200 || Number(value) < 0){
                throw new RangeError("The age is invalid");
            }
            console.log("Setting value '" + value + "' to " + prop);
            target[prop] = value;
            return target[prop];
        }
        console.log("Setting value '" + value + "' to " + prop);
        target[prop] = value;
        return target[prop];
    },
    get: function(target, prop, value){
        console.log("Trying to access the property '" + prop + "'...");
        if (!prop){
            return false;
        }
        return target[prop];
    }
}