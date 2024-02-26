// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`2000200002010101010101010101010101010203010303010301010301030301030101010203030303030303030303030303020301010301030103030101010103030103020303030303030303030303030302030101010103010103030101030303010302030303030303030303030303030203010301010301030301010101030301030203030303030303030303030303020301030301030101030103030103030103020303030303030303030303030302030303030303030303030303030303030302030303030303030303030303030203030303030303030303030303030303030203030303030303030303030303020302020202020202020202020202020203020303030303030303030303030302030203030303030303030303030303020302030303030303030303030303030203020303030303030303030303030302030203030303030303030303030303020302030303030303030303030303030203020303030303030303030303030302030203030303030303030303030303020302030303030303030303030303030203020303030303030303030303030302030203030303030303030303030303020302030303030303030303030303030203020303030303030303030303030302030203030303030303030303030303020302030303030303030303030303030203020303030303030303030303030302030203030303030303030303030303020302030303030303030303030303030203020303030303030303030303030302030203030303030303030303030303020302030303030303030303030303030203020303030303030303030303030302030203030303030303030303030303020302020202020202020202020202020203020303030303030303030303030302030303030303030303030303030303030302030303030303030303030303030203030303030303030303030303030303030203030303030303030303030303020303030303030303030303030303030303020303030303030303030303030302030303030303030303030303030303030302030303030303030303030303030203030303030303030303030303030303030203030303030303030303030303020303030303030303030303030303030303020303030303030303030303030302030303030303030303030303030303030302030303030303030303030303030203030303030303030303030303030303030203030303030303030303030303020303030303030303030303030303030303020303030303030303030303030302030303030303030303030303030303030302030303030303030303030303030203030303030303030303030303030303030202020202020202020202020202020303030303030303030303030303030303`, img`
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
2.............2.................
222222222222222.................
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.