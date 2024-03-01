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
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row + 1), assets.tile`myTile3`)
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
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column - 1, Sprite2.tilemapLocation().row - 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row + 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row - 1), assets.tile`myTile3`)
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
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column - 1, Sprite2.tilemapLocation().row + 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column + 1, Sprite2.tilemapLocation().row + 1), assets.tile`myTile3`)
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
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row - 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row - 2), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column + 1, Sprite2.tilemapLocation().row - 2), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column + 1, Sprite2.tilemapLocation().row - 3), assets.tile`myTile3`)
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
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row - 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column + 1, Sprite2.tilemapLocation().row - 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column + 1, Sprite2.tilemapLocation().row - 2), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column - 1, Sprite2.tilemapLocation().row - 1), assets.tile`myTile3`)
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
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row - 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column - 1, Sprite2.tilemapLocation().row - 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column - 1, Sprite2.tilemapLocation().row - 2), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column - 1, Sprite2.tilemapLocation().row - 3), assets.tile`myTile3`)
        } else {
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column, Sprite2.tilemapLocation().row), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column - 1, Sprite2.tilemapLocation().row + 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column - 1, Sprite2.tilemapLocation().row), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(Sprite2.tilemapLocation().column + 1, Sprite2.tilemapLocation().row), assets.tile`myTile3`)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
            tiles.setWallAt(tiles.getTileLocation(value.column, value.row), true)
        }
        sprites.destroy(sprite)
        SpawnSprite()
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Rotate(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (count < 1) {
        count += 1
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
        Sprite2.scale += 2.5
    } else {
        Sprite2 = sprites.create(NextSprite.image, SpriteKind.Player)
        Sprite2.scale += 2.5
    }
    NextSprite.setImage(Blocks._pickRandom())
    tiles.placeOnTile(Sprite2, tiles.getTileLocation(randint(2, 12), 2))
    Sprite2.vy = 75
    controller.moveSprite(Sprite2, 100, 0)
}
function DestroyRow () {
    tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`myTile1`)
}
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    Sprite2.vy = 150
    info.changeScoreBy(1)
})
function Rotate (num: number) {
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
    } else {
        index = RotationsLshape.indexOf(Sprite2.image)
    }
    info.changeScoreBy(num)
}
let index = 0
let Sprite2: Sprite = null
let count = 0
let NextSprite: Sprite = null
let RotationsLshape: Image[] = []
let Blocks: Image[] = []
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 515
    export const ARCADE_SCREEN_HEIGHT = 515
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
count = 0
tiles.placeOnTile(NextSprite, tiles.getTileLocation(23, 13))
NextSprite.scale += 8
info.setScore(0)
let flag = true
game.onUpdate(function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(value.column, value.row + 1), assets.tile`myTile3`)) {
            game.gameOver(false)
        }
    }
    for (let row = 0; row <= 29; row++) {
        flag = true
        for (let col = 0; col <= 12; col++) {
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(col + 1, row + 1), assets.tile`myTile3`))) {
                flag = false
            }
        }
        if (flag) {
            let col = 0
            tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile1`)
            for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
                tiles.setTileAt(tiles.getTileLocation(value.column, value.row + 1), assets.tile`myTile3`)
            }
        }
    }
})
