var roleHarvester = {
    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.carry.energy < creep.carryCapacity || creep.transfer(targets, RESOURCE_ENERGY) == ERR_FULL) {
	        
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                creep.say('⛏');
            }
        }
        else {
            var targets = creep.room.find(FIND_MY_STRUCTURES, {
                    filter: function(structure){
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN) && ((structure.energy < structure.energyCapacity) || (_.sum(structure.store) < structure.storeCapacity)) ;
                    }
            });
            if(targets == 0){
	            targets = creep.room.find(FIND_STRUCTURES, {
                    filter: function(structure) {
                        return (structure.structureType == STRUCTURE_CONTAINER)
                                && (_.sum(structure.store) < structure.storeCapacity);
                    }
                });
	        }
            if(targets) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
            else{
                targets = creep.room.find(FIND_FLAGS);
                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
            console.log('hallo');
        }
	}
};

module.exports = roleHarvester;