// var structure = creep.pos.findClosestByRange(FIND_SOURCES);
// creep.withdraw(creep.room.storage, _.findKey(creep.room.storage.store));
// && _.sortBy(structure, s => creep.pos.getRangeTo(s))
// //Game.creeps['Harvester1'].suicide()
// FIND_DROPPED_RESOURCES

// else {
//     if(targets.length > 0) {
//         if(creep.withdraw(targets[0],RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
//             creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffaa00'}});
//         }
//     }
// }
	    
// 	    if(superharvesters.length < 2) {
//             if(superharvesters.length == 0) 
//                 var sourceId = '5bbcadfc9099fc012e6383f2'
//             else var sourceId = '5bbcadfc9099fc012e6383f3'
//             var newName = 'Superharvester' + Game.time;
//             console.log('Spawning new superharvester: ' + newName);
//             Game.spawns['Schneiderr1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,MOVE], newName, 
//                 {memory: {role: 'superharvester', sourceId: sourceId}});
//         }
       
        
//         else{
//                     var closestDamagedStructure = creep.room.find(FIND_STRUCTURES,{
//                         filter: (structure) => { 
//                             return (structure.structureType != STRUCTURE_WALL &&
//                                 structure.structureType != STRUCTURE_RAMPART) && structure.hits < structure.hitsMax;
//                         }
//                     });
//                     if(creep.repair(closestDamagedStructure[0]) == ERR_NOT_IN_RANGE) {
//                         creep.moveTo(closestDamagedStructure[0], {visualizePathStyle: {stroke: '#0000ff'}});
//                         creep.say('repair');
//                     }
//                 }
                
//     if (creep.ticksToLive < 200){
//             creep.moveTo(creep.room.find(FIND_MY_SPAWNS)[0])
//         }