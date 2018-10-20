var roleHealer = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if( creep.carry.energy == creep.carryCapacity) {
            const target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: function(structure) {
                return structure.hits < structure.hitsMax;
                }
            });
            if(target) {
                if(creep.heal(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            }
        }
        else{
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: function(structure) {
                    return (structure.structureType == STRUCTURE_CONTAINER) && (_.sum(structure.store) > 0);
                }
            });
            if(targets.length > 0) {
                if(creep.withdraw(targets[0],RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#00ff00'}});
                }
            }
        }
    }
};


module.exports = roleHealer;
