var roleConquerer = {
    run: function(creep) {
        targets = creep.room.find(FIND_STRUCTURES);
            
        // creep.moveTo(49,38);
            
        // if(creep.claimController(targets[0] == ERR_NOT_IN_RANGE)) {
        //     console.log('errorClaiming');
        //   creep.moveTo(targets[0]);
        // }
        // if(creep.room.controller) {
        //      if(creep.reserveController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        //         creep.moveTo(creep.room.controller);
        //     }
        // }
        if(creep.room.controller) {
             if(creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
    }
};
module.exports = roleConquerer;