function include(url) {
  
  var sc = document.createElement('script');
  sc.src = url;
  document.head.appendChild(sc);
}

include('Tile.js');

function defTile(type) {
    let tile = new Tile(c, r, type, false); 
}

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
        Loader.loadImage('dirt', './assets/dirt.png')
    ];
};

Game.init = function () {
    this.tileAtlas = Loader.getImage('tiles');
    this.grass = Loader.getImage('grass');
    this.dirt = Loader.getImage('dirt');

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
            //var tileCurrent = tileList[r][c];
            var tile = map.getTile(c, r);
            //console.log(tile);
            if (tile.type == 1) {
                this.ctx.drawImage(this.grass, c * map.tsize, r * map.tsize, map.tsize, map.tsize);
            }

            if (tile.type == 2) {
                this.ctx.drawImage(this.dirt, c * map.tsize, r * map.tsize, map.tsize, map.tsize);
            }
        }
    }
};

// Functions
const klik = (event) => {
    var canvas = document.getElementById('demo');
    var rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("x: " + Math.floor(x/50) + " y: " + Math.floor(y/50));
    newtile = new Tile(Math.floor(x/50), Math.floor(y/50), 2, false); 
    map.setTile(newtile, Math.floor(x/50), Math.floor(y/50));
};