 class Spaceship {
    constructor(name, crew , phasers, shields) {
     this.name = name
     this.phasers = phasers
     this.cloaked = false
     this.docked = true
     this.shields = shields
     this.warpDrive = "disengaged"
     this.phasersCharge = "uncharged"
     crew.forEach((member) => {
       member.currentShip = this
       this.docked = false
     });
  }
}
