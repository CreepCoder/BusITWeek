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
        1, 2, 2, 2, 1, 1, 2, 1, 1, 2, 2, 2, 1, 1, 2, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 1,
        1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 2, 2, 1, 1, 2, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 1,
        1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 1,
        1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 1,
        1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 1,
        1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 1,
        1, 2, 2, 2, 1, 1, 2, 1, 1, 2, 2, 2, 1, 1, 2, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 1,
        1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 2, 2, 1, 1, 2, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 1,
        1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 1,
        1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 1,
        1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 1,
        1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 1
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
        Loader.loadImage('tiles', './assets/tiles.png'),
        Loader.loadImage('grass', './assets/grass.png'),
        Loader.loadImage('dirt', './assets/dirt.png'),
        Loader.loadImage('selected', './assets/selected.png')
    ];
};

Game.init = function () {
    this.tileAtlas = Loader.getImage('tiles');
    this.grass = Loader.getImage('grass');
    this.dirt = Loader.getImage('dirt');
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