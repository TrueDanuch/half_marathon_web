function HouseBlueprint (address, description, owner, size){
	this.address = address;
	this.description = description;
	this.size = size;
	this.date = new Date();
	this.owner = owner;
	this._averageBuildSpeed = 0.5;
	this.getDaysToBuild = function (){
		return this.size / this._averageBuildSpeed;
	}
}

function HouseBuilder(address, description, owner, size, roomCount) {
    this.roomCount = roomCount;

    HouseBlueprint.call(this, address, description, owner, size, new Date(Date.now));
}