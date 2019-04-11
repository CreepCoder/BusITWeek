function include(url) {
  
  var sc = document.createElement('script');
  sc.src = url;
  document.head.appendChild(sc);
}

include('Tile.js');

var map = {
    cols: 16,
    rows: 16,
    tsize: 50,
    tiles: [
        4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1,
        4, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1,
        1, 1, 1, 2, 1, 1, 1, 2, 4, 4, 4, 1, 2, 2, 2, 1,
        1, 1, 1, 2, 4, 4, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1,
        1, 2, 2, 2, 1, 4, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2,
        1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 5,
        1, 2, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 3, 5,
        2, 2, 1, 1, 1, 1, 3, 5, 5, 3, 3, 3, 3, 3, 3, 5,
        5, 3, 3, 3, 3, 3, 3, 5, 5, 3, 1, 1, 1, 1, 2, 2,
        5, 3, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 1,
        5, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1,
        2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 4, 1, 2, 2, 2, 1,
        1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 4, 4, 2, 1, 1, 1,
        1, 2, 2, 2, 1, 4, 4, 4, 2, 1, 1, 1, 2, 1, 1, 1,
        1, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 4,
        1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4
    ],
    getTile: function (col, row) {
        return this.tiles[row * map.cols + col];
    },

    setTile: function (type, col, row) {
        this.tiles[row * map.cols + col] = type;
    }
};

Game.load = function () {
    return [
        Loader.loadImage('grass', './assets/tiles/grassTile.png'),
        Loader.loadImage('water', './assets/tiles/waterTile.png'),
        Loader.loadImage('dirt', './assets/tiles/dirtTile.png'),
		Loader.loadImage('bridge', './assets/tiles/bridgeTile.png'),
		Loader.loadImage('tree', './assets/tiles/treeTile.png'),
        Loader.loadImage('strongHold1', './assets/tiles/Stronghold1.png'),
		Loader.loadImage('strongHold2', './assets/tiles/Stronghold2.png'),
		Loader.loadImage('barracks1', './assets/tiles/Barracks1.png'),
		Loader.loadImage('barracks2', './assets/tiles/Barracks2.png'),
		Loader.loadImage('town0', './assets/tiles/Town0.png'),
		Loader.loadImage('town1', './assets/tiles/Town1.png'),
		Loader.loadImage('town2', './assets/tiles/Town2.png'),
		Loader.loadImage('selected', './assets/tiles/selected.png')
    ];
};

Game.init = function () {
    this.grass = Loader.getImage('grass');
    this.dirt = Loader.getImage('dirt');
	this.water = Loader.getImage('water');
	this.bridge = Loader.getImage('bridge');
	this.tree = Loader.getImage('tree');
	this.strongHold1 = Loader.getImage('strongHold1');
	this.strongHold2 = Loader.getImage('strongHold2');
	this.town0 = Loader.getImage('town0');
	this.town1 = Loader.getImage('town1');
	this.town2 = Loader.getImage('town2');
	this.barracks1 = Loader.getImage('barracks1');
	this.barracks2 = Loader.getImage('barracks2');
	this.selected = Loader.getImage('selected');

    for (var c = 0; c < map.cols; c++) {
        for (var r = 0; r < map.rows; r++) {
            var tile = map.getTile(c, r);
            switch(tile) {
                case 1:
                    newtile = new Tile(c, r, 1, false); 
                    map.setTile(newtile, c, r);
                    break;
                case 2:
                    newtile = new Tile(c, r, 2, false); 
                    map.setTile(newtile, c, r);
                    break;
                case 3:
                    newtile = new Tile(c, r, 3, false); 
                    map.setTile(newtile, c, r);
                    break;
                case 4:
                    newtile = new Tile(c, r, 4, false); 
                    map.setTile(newtile, c, r);
                    break;
                case 5:
                    newtile = new Tile(c, r, 5, false); 
                    map.setTile(newtile, c, r);
                    break;
            }
        }
    }
};

Game.update = function (delta) {
};

Game.render = function () {
    for (var c = 0; c < map.cols; c++) {
        for (var r = 0; r < map.rows; r++) {
            var tile = map.getTile(c, r);

            switch(tile.type) {
                case 1:
                    this.ctx.drawImage(this.grass, c * map.tsize, r * map.tsize, map.tsize, map.tsize);
                    break;
                case 2:
                    this.ctx.drawImage(this.dirt, c * map.tsize, r * map.tsize, map.tsize, map.tsize);
                    break;
                case 3:
                    this.ctx.drawImage(this.water, c * map.tsize, r * map.tsize, map.tsize, map.tsize);
                    break;
                case 4:
                    this.ctx.drawImage(this.tree, c * map.tsize, r * map.tsize, map.tsize, map.tsize);
                    break;
                case 5:
                    this.ctx.drawImage(this.bridge, c * map.tsize, r * map.tsize, map.tsize, map.tsize);
                    break;
            }
            
            if(tile.isSelected == true) {
                //console.log(SELECTED); 
                this.ctx.drawImage(this.selected, c * map.tsize, r * map.tsize, map.tsize, map.tsize);
            }
        }
    }
};

var lastTile;

// Functions
const klik = (event) => {
    var canvas = document.getElementById('demo');
    var rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("x: " + Math.floor(x/50) + " y: " + Math.floor(y/50));

    if(lastTile != null) {
        lastTile._selected = false;
        console.log("Deselected lastTile"); 
    }

    currTile = map.getTile(Math.floor(x/50), Math.floor(y/50));
    currTile._selected = true;
    console.log(currTile); 

    lastTile = currTile;
};