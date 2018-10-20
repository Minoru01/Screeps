var roleSuperHarvesterFinal = {
    /** @param {Creep} creep **/
    run: function(creep, source) {
        if(creep.harvest(source) != 0) {
            creep.moveTo(source, {visualizePathStyle: {stroke: '#00ff00'}});
        }
    }
};

module.exports = roleSuperHarvesterFinal;