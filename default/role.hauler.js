var roleHauler = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.carry.energy < 300) {
            var container = creep.room.find(FIND_STRUCTURES, {
                filter: function(structure) {
                    return (structure.structureType == STRUCTURE_CONTAINER)
                            && (_.sum(structure.store) > 400);
                }
            });
            if(container)
                creep.say('c');
            
            if(container == 0){
                var sources = creep.room.find(FIND_DROPPED_RESOURCES); 
                creep.say('d');
            }
	        
	        if(sources == 0){
	            container = creep.room.find(FIND_STRUCTURES, {
                    filter: function(structure) {
                        return (structure.structureType == STRUCTURE_STORAGE)
                                && (_.sum(structure.store) < structure.storeCapacity);
                    }
                });
                creep.say('s')
	        }
	        if(container){
        	    if(creep.withdraw(container[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(container[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
	        }    
            if(sources){
                if(creep.pickup(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
                }
            }
	    }
	    else{
	        
	        var targets = creep.room.find(FIND_STRUCTURES, {
                filter: function(structure) {
                    return (structure.structureType == STRUCTURE_TOWER)
                            && structure.energy < structure.energyCapacity*0.85;
                }
            });
            if(targets == 0){
                targets = creep.room.find(FIND_STRUCTURES, {
                    filter: function(structure) {
                        return (structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_LINK)
                                && structure.energy < structure.energyCapacity;
                    }
                });
            }
            if(targets == 0){
                targets = creep.room.find(FIND_STRUCTURES, {
                    filter: function(structure) {
                        return (structure.structureType == STRUCTURE_STORAGE)
                                && (_.sum(structure.store) < structure.storeCapacity);
                    }
                });
            }
    	    if(targets) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffa500'}});
                }
    	    }
            else {
                targets = creep.room.find(FIND_FLAGS);
                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffa500'}});
            }
	    }
	}
};

module.exports = roleHauler;
