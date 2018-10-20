var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.carry.energy) {
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#0000ff'}});
                }
            }
            if(targets == 0) {
                if(true){
                    var closestDamagedStructure = creep.room.find(FIND_STRUCTURES,{
                        filter: function(structure) { 
                            return (structure.structureType == STRUCTURE_RAMPART ||
                                structure.structureType == STRUCTURE_WALL) && (structure.hits < 50000);
                        }
                    });
                    if(creep.repair(closestDamagedStructure[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(closestDamagedStructure[0], {visualizePathStyle: {stroke: '#0000ff'}});
                    }
                }
            }
	    } 
	    else {
	        var targets = creep.room.find(FIND_STRUCTURES, {
                filter: function(structure) {
                    return (structure.structureType == STRUCTURE_STORAGE ||
                            structure.structureType == STRUCTURE_CONTAINER) && (_.sum(structure.store) > 0);
                }
            });
            if(targets.length > 0) {
                    if(creep.withdraw(targets[0],RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#0000ff'}});
                    }
                }
        }
	}
};

module.exports = roleBuilder;
