class Tile{
    constructor(x, y, type, occupied){
        this._x = x;
        this._y = y;
        this._type = type;
        this._occupied = occupied;
    }
    
    get x (){
    	return this._x;
    }

    get y () {
    	return this._y;
    }

    get type () {
    	return this._type;
    }
};


