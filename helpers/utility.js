exports.Utility = class Utility {

    async delay(time = 1000) { 
        return new Promise(resolve => { setTimeout(resolve, time) }); 
    }

}
