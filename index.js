// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)

// have the NPC start walking east immediately
// North for 1400 ms
npc.walkNorth(1400)
// East for 1200 ms
.then(()=> npc.walkEast(1200))
// South for 300 ms
.then(()=>npc.walkSouth(300))
// East for 1500 ms
.then(()=> npc.walkEast(1500))
// South for 1500 ms
.then(()=>npc.walkSouth(1500))
// West for 2700 ms
.then(()=>npc.walkWest(2700))
// North for 400 ms
.then(()=>npc.walkNorth(400))

// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)