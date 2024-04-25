controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Rotate(RotationsLshape)
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Bottom)) {
        if (sprite.image.equals(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f f f f f . . . . . . 
            `)) {
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row + 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row - 1), assets.tile`myTile3`)
        } else if (sprite.image.equals(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f . . . . . . 
            . f 2 2 2 f 2 2 2 f . . . . . . 
            . f 2 2 2 f 2 2 2 f . . . . . . 
            . f 2 2 2 f 2 2 2 f . . . . . . 
            . f f f f f f f f f f f f f . . 
            . . . . . f 2 2 2 f 2 2 2 f . . 
            . . . . . f 2 2 2 f 2 2 2 f . . 
            . . . . . f 2 2 2 f 2 2 2 f . . 
            . . . . . f f f f f f f f f . . 
            `)) {
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column - 1, Sprite2.tilemapLocation().row), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column + 1, Sprite2.tilemapLocation().row + 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row + 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row), assets.tile`myTile3`)
        } else if (sprite.image.equals(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f . . . . . 
            . . f 2 2 2 f 2 2 2 f . . . . . 
            . . f 2 2 2 f 2 2 2 f . . . . . 
            . . f 2 2 2 f 2 2 2 f . . . . . 
            . . f f f f f f f f f . . . . . 
            . . . . . . f 2 2 2 f . . . . . 
            . . . . . . f 2 2 2 f . . . . . 
            . . . . . . f 2 2 2 f . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . f 2 2 2 f . . . . . 
            . . . . . . f 2 2 2 f . . . . . 
            . . . . . . f 2 2 2 f . . . . . 
            . . . . . . f f f f f . . . . . 
            `)) {
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row + 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row - 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column - 1, Sprite2.tilemapLocation().row - 1), assets.tile`myTile3`)
        } else if (sprite.image.equals(img`
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
            . . f f f f f f f f f f f f f . 
            . . f 2 2 2 f 2 2 2 f 2 2 2 f . 
            . . f 2 2 2 f 2 2 2 f 2 2 2 f . 
            . . f 2 2 2 f 2 2 2 f 2 2 2 f . 
            . . f f f f f f f f f f f f f . 
            `)) {
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row + 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column + 1, Sprite2.tilemapLocation().row + 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column - 1, Sprite2.tilemapLocation().row + 1), assets.tile`myTile3`)
        } else if (sprite.image.equals(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f f f f . 
            . . . . . . . . . . f 2 2 2 f . 
            . . . . . . . . . . f 2 2 2 f . 
            . . . . . . . . . . f 2 2 2 f . 
            . . . . . . f f f f f f f f f . 
            . . . . . . f 2 2 2 f 2 2 2 f . 
            . . . . . . f 2 2 2 f 2 2 2 f . 
            . . . . . . f 2 2 2 f 2 2 2 f . 
            . . . . . . f f f f f f f f f . 
            . . . . . . f 2 2 2 f . . . . . 
            . . . . . . f 2 2 2 f . . . . . 
            . . . . . . f 2 2 2 f . . . . . 
            . . . . . . f f f f f . . . . . 
            `)) {
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row + 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column + 1, Sprite2.tilemapLocation().row), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column + 1, Sprite2.tilemapLocation().row - 1), assets.tile`myTile3`)
        } else if (sprite.image.equals(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f f f f . 
            . . . . . . . . . . f 2 2 2 f . 
            . . . . . . . . . . f 2 2 2 f . 
            . . . . . . . . . . f 2 2 2 f . 
            . . f f f f f f f f f f f f f . 
            . . f 2 2 2 f 2 2 2 f 2 2 2 f . 
            . . f 2 2 2 f 2 2 2 f 2 2 2 f . 
            . . f 2 2 2 f 2 2 2 f 2 2 2 f . 
            . . f f f f f f f f f f f f f . 
            `)) {
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row + 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column + 1, Sprite2.tilemapLocation().row + 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column + 1, Sprite2.tilemapLocation().row), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column - 1, Sprite2.tilemapLocation().row + 1), assets.tile`myTile3`)
        } else if (sprite.image.equals(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . f 2 2 2 f . . . . . . . 
            . . . . f 2 2 2 f . . . . . . . 
            . . . . f 2 2 2 f . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . f 2 2 2 f . . . . . . . 
            . . . . f 2 2 2 f . . . . . . . 
            . . . . f 2 2 2 f . . . . . . . 
            . . . . f f f f f f f f f . . . 
            . . . . f 2 2 2 f 2 2 2 f . . . 
            . . . . f 2 2 2 f 2 2 2 f . . . 
            . . . . f 2 2 2 f 2 2 2 f . . . 
            . . . . f f f f f f f f f . . . 
            `)) {
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column + 1, Sprite2.tilemapLocation().row + 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row + 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row - 1), assets.tile`myTile3`)
        } else {
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column - 1, Sprite2.tilemapLocation().row + 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column - 1, Sprite2.tilemapLocation().row), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column + 1, Sprite2.tilemapLocation().row), assets.tile`myTile3`)
        }
        for (let ValueBlue of tiles.getTilesByType(assets.tile`myTile3`)) {
            tiles.setWallAt(tiles.getTileLocation(ValueBlue.column, ValueBlue.row), true)
        }
        sprites.destroy(sprite)
        SpawnSprite()
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    Sprite2.vy = 75
})
function SpawnSprite () {
    if (NextSprite.image.equals(img`
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
        `)) {
        Sprite2 = sprites.create(Blocks._pickRandom(), SpriteKind.Player)
    } else {
        Sprite2 = sprites.create(NextSprite.image, SpriteKind.Player)
        Sprite2.scale += 2.5
    }
    NextSprite.setImage(Blocks._pickRandom())
    tiles.placeOnTile(Sprite2, tiles.getTileLocation(randint(2, 12), 2))
    Sprite2.vy = 75
    controller.moveSprite(Sprite2, 100, 0)
}
function PointBoost (bool: boolean) {
    if (bool) {
        tiles.setCurrentTilemap(tilemap`level2`)
    } else {
        tiles.setCurrentTilemap(tilemap`level0`)
    }
}
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    Sprite2.vy = 150
    if (mySprite) {
        info.changeScoreBy(5)
    } else {
        info.changeScoreBy(1)
    }
})
function StartSequence (color: Image, bool: boolean) {
    if (count < 1) {
        if (bool) {
            info.setScore(10)
            count += 1
        } else {
            info.setScore(0)
            count += 1
        }
    }
    for (let StartCol = 0; StartCol <= 12; StartCol++) {
        for (let StartRow = 0; StartRow <= 29; StartRow++) {
            tiles.setTileAt(tiles.getTileLocation(StartCol + 1, StartRow + 1), color)
        }
    }
}
function Rotate (list: Image[]) {
    if (Sprite2.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f 2 2 2 f . . . . . . 
        . . . . . f 2 2 2 f . . . . . . 
        . . . . . f 2 2 2 f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f 2 2 2 f . . . . . . 
        . . . . . f 2 2 2 f . . . . . . 
        . . . . . f 2 2 2 f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f 2 2 2 f . . . . . . 
        . . . . . f 2 2 2 f . . . . . . 
        . . . . . f 2 2 2 f . . . . . . 
        . . . . . f f f f f . . . . . . 
        `)) {
        Sprite2.setImage(img`
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
            . . f f f f f f f f f f f f f . 
            . . f 2 2 2 f 2 2 2 f 2 2 2 f . 
            . . f 2 2 2 f 2 2 2 f 2 2 2 f . 
            . . f 2 2 2 f 2 2 2 f 2 2 2 f . 
            . . f f f f f f f f f f f f f . 
            `)
    } else if (Sprite2.image.equals(img`
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
        . . f f f f f f f f f f f f f . 
        . . f 2 2 2 f 2 2 2 f 2 2 2 f . 
        . . f 2 2 2 f 2 2 2 f 2 2 2 f . 
        . . f 2 2 2 f 2 2 2 f 2 2 2 f . 
        . . f f f f f f f f f f f f f . 
        `)) {
        Sprite2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . f f f f f . . . . . . 
            `)
    } else if (Sprite2.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . f f f f f . 
        . . . . . . . . . . f 2 2 2 f . 
        . . . . . . . . . . f 2 2 2 f . 
        . . . . . . . . . . f 2 2 2 f . 
        . . . . . . f f f f f f f f f . 
        . . . . . . f 2 2 2 f 2 2 2 f . 
        . . . . . . f 2 2 2 f 2 2 2 f . 
        . . . . . . f 2 2 2 f 2 2 2 f . 
        . . . . . . f f f f f f f f f . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . f 2 2 2 f . . . . . 
        . . . . . . f f f f f . . . . . 
        `)) {
        Sprite2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f . . . . . . 
            . f 2 2 2 f 2 2 2 f . . . . . . 
            . f 2 2 2 f 2 2 2 f . . . . . . 
            . f 2 2 2 f 2 2 2 f . . . . . . 
            . f f f f f f f f f f f f f . . 
            . . . . . f 2 2 2 f 2 2 2 f . . 
            . . . . . f 2 2 2 f 2 2 2 f . . 
            . . . . . f 2 2 2 f 2 2 2 f . . 
            . . . . . f f f f f f f f f . . 
            `)
    } else if (Sprite2.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f . . . . . . 
        . f 2 2 2 f 2 2 2 f . . . . . . 
        . f 2 2 2 f 2 2 2 f . . . . . . 
        . f 2 2 2 f 2 2 2 f . . . . . . 
        . f f f f f f f f f f f f f . . 
        . . . . . f 2 2 2 f 2 2 2 f . . 
        . . . . . f 2 2 2 f 2 2 2 f . . 
        . . . . . f 2 2 2 f 2 2 2 f . . 
        . . . . . f f f f f f f f f . . 
        `)) {
        Sprite2.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f f f f . 
            . . . . . . . . . . f 2 2 2 f . 
            . . . . . . . . . . f 2 2 2 f . 
            . . . . . . . . . . f 2 2 2 f . 
            . . . . . . f f f f f f f f f . 
            . . . . . . f 2 2 2 f 2 2 2 f . 
            . . . . . . f 2 2 2 f 2 2 2 f . 
            . . . . . . f 2 2 2 f 2 2 2 f . 
            . . . . . . f f f f f f f f f . 
            . . . . . . f 2 2 2 f . . . . . 
            . . . . . . f 2 2 2 f . . . . . 
            . . . . . . f 2 2 2 f . . . . . 
            . . . . . . f f f f f . . . . . 
            `)
    } else {
        Index_L = list.indexOf(Sprite2.image)
        Sprite2.setImage(list[(Index_L + 1) % 4])
    }
}
let Index_L = 0
let Sprite2: Sprite = null
let mySprite = false
let NextSprite: Sprite = null
let count = 0
let RotationsLshape: Image[] = []
let Blocks: Image[] = []
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 525
    export const ARCADE_SCREEN_HEIGHT = 510
}
tiles.setCurrentTilemap(tilemap`level2`)
Blocks = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 2 2 2 f . . . . . . 
    . . . . . f 2 2 2 f . . . . . . 
    . . . . . f 2 2 2 f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 2 2 2 f . . . . . . 
    . . . . . f 2 2 2 f . . . . . . 
    . . . . . f 2 2 2 f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 2 2 2 f . . . . . . 
    . . . . . f 2 2 2 f . . . . . . 
    . . . . . f 2 2 2 f . . . . . . 
    . . . . . f f f f f . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f . . . . . . 
    . f 2 2 2 f 2 2 2 f . . . . . . 
    . f 2 2 2 f 2 2 2 f . . . . . . 
    . f 2 2 2 f 2 2 2 f . . . . . . 
    . f f f f f f f f f f f f f . . 
    . . . . . f 2 2 2 f 2 2 2 f . . 
    . . . . . f 2 2 2 f 2 2 2 f . . 
    . . . . . f 2 2 2 f 2 2 2 f . . 
    . . . . . f f f f f f f f f . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f f f f f f f f . . . . . 
    . . f 2 2 2 f 2 2 2 f . . . . . 
    . . f 2 2 2 f 2 2 2 f . . . . . 
    . . f 2 2 2 f 2 2 2 f . . . . . 
    . . f f f f f f f f f . . . . . 
    . . . . . . f 2 2 2 f . . . . . 
    . . . . . . f 2 2 2 f . . . . . 
    . . . . . . f 2 2 2 f . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f 2 2 2 f . . . . . 
    . . . . . . f 2 2 2 f . . . . . 
    . . . . . . f 2 2 2 f . . . . . 
    . . . . . . f f f f f . . . . . 
    `]
let RotationsLong = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 2 2 2 f . . . . . . 
    . . . . . f 2 2 2 f . . . . . . 
    . . . . . f 2 2 2 f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 2 2 2 f . . . . . . 
    . . . . . f 2 2 2 f . . . . . . 
    . . . . . f 2 2 2 f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 2 2 2 f . . . . . . 
    . . . . . f 2 2 2 f . . . . . . 
    . . . . . f 2 2 2 f . . . . . . 
    . . . . . f f f f f . . . . . . 
    `, img`
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
    . . f f f f f f f f f f f f f . 
    . . f 2 2 2 f 2 2 2 f 2 2 2 f . 
    . . f 2 2 2 f 2 2 2 f 2 2 2 f . 
    . . f 2 2 2 f 2 2 2 f 2 2 2 f . 
    . . f f f f f f f f f f f f f . 
    `]
let RotationsSwiggle = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f . . . . . . 
    . f 2 2 2 f 2 2 2 f . . . . . . 
    . f 2 2 2 f 2 2 2 f . . . . . . 
    . f 2 2 2 f 2 2 2 f . . . . . . 
    . f f f f f f f f f f f f f . . 
    . . . . . f 2 2 2 f 2 2 2 f . . 
    . . . . . f 2 2 2 f 2 2 2 f . . 
    . . . . . f 2 2 2 f 2 2 2 f . . 
    . . . . . f f f f f f f f f . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . f f f f f . 
    . . . . . . . . . . f 2 2 2 f . 
    . . . . . . . . . . f 2 2 2 f . 
    . . . . . . . . . . f 2 2 2 f . 
    . . . . . . f f f f f f f f f . 
    . . . . . . f 2 2 2 f 2 2 2 f . 
    . . . . . . f 2 2 2 f 2 2 2 f . 
    . . . . . . f 2 2 2 f 2 2 2 f . 
    . . . . . . f f f f f f f f f . 
    . . . . . . f 2 2 2 f . . . . . 
    . . . . . . f 2 2 2 f . . . . . 
    . . . . . . f 2 2 2 f . . . . . 
    . . . . . . f f f f f . . . . . 
    `]
RotationsLshape = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f f f f f f f f . . . . . 
    . . f 2 2 2 f 2 2 2 f . . . . . 
    . . f 2 2 2 f 2 2 2 f . . . . . 
    . . f 2 2 2 f 2 2 2 f . . . . . 
    . . f f f f f f f f f . . . . . 
    . . . . . . f 2 2 2 f . . . . . 
    . . . . . . f 2 2 2 f . . . . . 
    . . . . . . f 2 2 2 f . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f 2 2 2 f . . . . . 
    . . . . . . f 2 2 2 f . . . . . 
    . . . . . . f 2 2 2 f . . . . . 
    . . . . . . f f f f f . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . f f f f f . 
    . . . . . . . . . . f 2 2 2 f . 
    . . . . . . . . . . f 2 2 2 f . 
    . . . . . . . . . . f 2 2 2 f . 
    . . f f f f f f f f f f f f f . 
    . . f 2 2 2 f 2 2 2 f 2 2 2 f . 
    . . f 2 2 2 f 2 2 2 f 2 2 2 f . 
    . . f 2 2 2 f 2 2 2 f 2 2 2 f . 
    . . f f f f f f f f f f f f f . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . . f 2 2 2 f . . . . . . . 
    . . . . f 2 2 2 f . . . . . . . 
    . . . . f 2 2 2 f . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . . f 2 2 2 f . . . . . . . 
    . . . . f 2 2 2 f . . . . . . . 
    . . . . f 2 2 2 f . . . . . . . 
    . . . . f f f f f f f f f . . . 
    . . . . f 2 2 2 f 2 2 2 f . . . 
    . . . . f 2 2 2 f 2 2 2 f . . . 
    . . . . f 2 2 2 f 2 2 2 f . . . 
    . . . . f f f f f f f f f . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f f f f f 
    . . . f 2 2 2 f 2 2 2 f 2 2 2 f 
    . . . f 2 2 2 f 2 2 2 f 2 2 2 f 
    . . . f 2 2 2 f 2 2 2 f 2 2 2 f 
    . . . f f f f f f f f f f f f f 
    . . . f 2 2 2 f . . . . . . . . 
    . . . f 2 2 2 f . . . . . . . . 
    . . . f 2 2 2 f . . . . . . . . 
    . . . f f f f f . . . . . . . . 
    `
]
count = 0
NextSprite = sprites.create(img`
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
    `, SpriteKind.Player)
tiles.placeOnTile(NextSprite, tiles.getTileLocation(23, 13))
NextSprite.scale += 8
mySprite = game.ask("Do you want a point boost?")
PointBoost(mySprite)
timer.after(500, function () {
    StartSequence(assets.tile`myTile`, mySprite)
})
timer.after(1000, function () {
    StartSequence(assets.tile`myTile7`, mySprite)
})
timer.after(1500, function () {
    StartSequence(assets.tile`myTile8`, mySprite)
})
timer.after(2000, function () {
    StartSequence(assets.tile`myTile1`, mySprite)
    SpawnSprite()
})
game.onUpdate(function () {
    for (let ValueRed of tiles.getTilesByType(assets.tile`myTile`)) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(tiles.locationXY(ValueRed, tiles.XY.column), tiles.locationXY(ValueRed, tiles.XY.column) - 1), assets.tile`myTile3`)) {
            game.gameOver(false)
        }
    }
})
