var roleSuperHarvester2 = {
    /** @param {Creep} creep **/
    run: function(creep) {
        var source = Game.getObjectById(creep.memory.sourceId);
        
        if(creep.harvest(source) != 0) {
            creep.moveTo(source, {visualizePathStyle: {stroke: '#00ff00'}});
        }
    }
};

module.exports = roleSuperHarvester2;