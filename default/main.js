var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleSuperHarvester = require('role.superharvester');
var roleSuperHarvester2 = require('role.superharvester2');
var roleHauler = require('role.hauler');
var roleHealer = require('role.healer');
var roleConquerer = require('role.conquerer');
var roleTester = require('role.tester');
var roleSuperHarvesterFinal = require('role.superharvesterfinal');



module.exports.loop = function () {
    var spawn = Game.getObjectById('5bc0c92b556d327dc52703b7');
    spawn.renewCreep(spawn.pos.findClosestByRange(FIND_MY_CREEPS));
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    console.log('Upgraders: ' + upgraders.length);
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    console.log('Builders: ' + builders.length);
    var superharvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'superharvester');
    console.log('superharvesters: ' + superharvesters.length);
    var superharvesters2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'superharvester2');
    console.log('superharvesters2: ' + superharvesters2.length);
    var superharvesterfinals = _.filter(Game.creeps, (creep) => creep.memory.role == 'superharvesterfinal');
    console.log('superharvesterfinals: ' + superharvesterfinals.length);
    var haulers = _.filter(Game.creeps, (creep) => creep.memory.role == 'hauler');
    console.log('haulers: ' + haulers.length);
    var healers = _.filter(Game.creeps, (creep) => creep.memory.role == 'healer');
    console.log('healers: ' + healers.length);
    var conquerers = _.filter(Game.creeps, (creep) => creep.memory.role == 'conquerer');
    console.log('conquerers: ' + conquerers.length);
    var testers = _.filter(Game.creeps, (creep) => creep.memory.role == 'tester');
    console.log('testers: ' + testers.length);

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'superharvester') {
           roleSuperHarvester.run(creep);
        }
        if(creep.memory.role == 'superharvester2') {
           roleSuperHarvester2.run(creep);
        }
        if(creep.memory.role == 'hauler') {
           roleHauler.run(creep);
        }
        if(creep.memory.role == 'healer') {
           roleHealer.run(creep);
        }
        if(creep.memory.role == 'conquerer') {
           roleConquerer.run(creep);
        }
        if(creep.memory.role == 'tester') {
           roleTester.run(creep);
        }
        if(creep.memory.role == 'superharvesterfinal') {
           roleSuperHarvesterFinal.run(creep, source);
        }
    }
    var source = Game.getObjectById('5bbcadfc9099fc012e6383f3');
    if(superharvesterfinals.length < 0) {    //         
            var newName = 'Superharvesterfinal' + Game.time;
            console.log('Spawning new superharvesterfinal: ' + newName);
            Game.spawns['Schneiderr1'].spawnCreep([WORK,MOVE], newName, 
                {memory: {role: 'superharvesterfinal', source: source}});
    }
    if(conquerers.length < 0) {
        var newName = 'Conquerer' + Game.time;
        console.log('Spawning new conquerer: ' + newName);
        Game.spawns['Schneiderr1'].spawnCreep([CLAIM,MOVE], newName, 
            {memory: {role: 'conquerer'}});
    }
    if(testers.length < 1) {
        var newName = 'Tester' + Game.time;
        console.log('Spawning new tester: ' + newName);
        Game.spawns['Schneiderr1'].spawnCreep([MOVE], newName, 
            {memory: {role: 'tester'}});
    }
    if(harvesters.length < 1) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['Schneiderr1'].spawnCreep([WORK,CARRY,MOVE], newName, 
            {memory: {role: 'harvester'}});
    }
    if(harvesters.length >= 1 || superharvesters.length >=1 || superharvesters2.length) {
        if(superharvesters.length < 1) {
            var sourceId = '5bbcadfc9099fc012e6383f3';
            var newName = 'Superharvester' + Game.time;
            console.log('Spawning new superharvester: ' + newName);
            Game.spawns['Schneiderr1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,MOVE], newName, 
                {memory: {role: 'superharvester', sourceId: sourceId}});
        }
        if(superharvesters2.length < 1) {
            var sourceId = '5bbcadfc9099fc012e6383f2';
            var newName = 'Superharvester2' + Game.time;
            console.log('Spawning new superharvester2: ' + newName);
            Game.spawns['Schneiderr1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,MOVE], newName, 
                {memory: {role: 'superharvester2', sourceId: sourceId}});
        }
        if(haulers.length < 3) {
            var newName = 'Hauler' + Game.time;
            console.log('Spawning new Hauler: ' + newName);
            Game.spawns['Schneiderr1'].spawnCreep([CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE,MOVE], newName, 
                {memory: {role: 'hauler'}});
        }
        if(upgraders.length < 2) {
            var newName = 'Upgrader' + Game.time;
            console.log('Spawning new upgrader: ' + newName);
            Game.spawns['Schneiderr1'].spawnCreep([WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,MOVE], newName, 
                {memory: {role: 'upgrader'}});
        }
        
        if(builders.length < 1) {
            if(creep.room.find(FIND_CONSTRUCTION_SITES).length != 0){
                var newName = 'Builder' + Game.time;
                console.log('Spawning new builder: ' + newName);
                Game.spawns['Schneiderr1'].spawnCreep([WORK,CARRY,CARRY,MOVE], newName, 
                    {memory: {role: 'builder'}});
            }
        }
        if(healers.length < 0) {
            var newName = 'Healer' + Game.time;
            console.log('Spawning new healer: ' + newName);
            Game.spawns['Schneiderr1'].spawnCreep([HEAL,CARRY,MOVE], newName, 
                {memory: {role: 'healer'}});
        }
    }
    
    if(Game.spawns['Schneiderr1'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['Schneiderr1'].spawning.name];
        Game.spawns['Schneiderr1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Schneiderr1'].pos.x + 1, 
            Game.spawns['Schneiderr1'].pos.y, 
            {align: 'left', opacity: 0.8});
    }
    
    var tower = Game.getObjectById('5bc24a0dc5a94a327f68fff2');
    if(tower) {
        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
            console.log('attackiere:' + closestHostile);
        }
        if(!closestHostile){
            var closestDamaged = tower.pos.findClosestByRange(FIND_STRUCTURES,{
                filter: (structure) => { 
                    return (structure.structureType != STRUCTURE_WALL &&
                        structure.structureType != STRUCTURE_RAMPART) && structure.hits < structure.hitsMax;
                }
            });
            // if(!closestDamaged){
            //     closestDamaged = tower.pos.findClosestByRange(FIND_MY_CREEPS,{
            //         filter: (structure) => { 
            //             return (creep) && structure.hits < structure.hitsMax;
            //         }
            //     });
            // }
            if(!closestDamaged){
                closestDamaged = tower.pos.findClosestByRange(FIND_STRUCTURES,{
                    filter: (structure) => { 
                        return (structure.structureType == STRUCTURE_WALL ||
                        structure.structureType == STRUCTURE_RAMPART) && structure.hits < 50000;
                    }
                });
            }
            if(closestDamaged) {
                tower.repair(closestDamaged);
            }
        }
    }
    var tower = Game.getObjectById('5bc79fcaebfc404a852b1c16');
    if(tower) {
        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
            console.log('attackiere:' + closestHostile);
        }
        if(!closestHostile){
            var closestDamaged = tower.pos.findClosestByRange(FIND_STRUCTURES,{
                filter: (structure) => { 
                    return (structure.structureType != STRUCTURE_WALL &&
                        structure.structureType != STRUCTURE_RAMPART) && structure.hits < structure.hitsMax;
                }
            });
            // if(!closestDamaged){
            //     closestDamaged = tower.pos.findClosestByRange(FIND_MY_CREEPS,{
            //         filter: (structure) => { 
            //             return (creep) && structure.hits < structure.hitsMax;
            //         }
            //     });
            // }
            if(!closestDamaged){
                closestDamaged = tower.pos.findClosestByRange(FIND_STRUCTURES,{
                    filter: (structure) => { 
                        return (structure.structureType == STRUCTURE_WALL ||
                        structure.structureType == STRUCTURE_RAMPART) && structure.hits < 50000;
                    }
                });
            }
            if(closestDamaged) {
                tower.repair(closestDamaged);
            }
        }
    }
    var sourceLink = Game.getObjectById('5bc7c2e58726d724f88b9f9b');
    var targetLink = Game.getObjectById('5bc7d1244c01f724d36cd04a');
    sourceLink.transferEnergy(targetLink);
    
     for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
}