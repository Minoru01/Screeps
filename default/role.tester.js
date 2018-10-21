var djikstraAlgorithm = require('djikstra')

var roleTester = {
    run: function(creep) {
        targets = creep.room.find();
        console.log(targets);
    console.log(djikstraAlgorithm.run());
        
    }
};
module.exports = roleTester;