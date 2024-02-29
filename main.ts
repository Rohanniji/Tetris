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
        for (let ValueTurq of tiles.getTilesByType(assets.tile`myTile3`)) {
            tiles.setWallAt(tiles.getTileLocation(ValueTurq.column, ValueTurq.row), true)
        }
        sprites.destroy(sprite)
        SpawnSprite()
    }
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
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Sprite2.tileKindAt(TileDirection.Left, assets.tile`myTile0`)) {
        Sprite2.x += 0
    }
    Sprite2.x += -17.5
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Sprite2.tileKindAt(TileDirection.Right, assets.tile`myTile0`)) {
        Sprite2.x += 0
    }
    Sprite2.x += 17.5
})
function PointBoost (bool: boolean) {
    if (bool) {
        tiles.setTileAt(tiles.getTileLocation(15, 15), assets.tile`myTile0`)
    } else {
        tiles.setTileAt(tiles.getTileLocation(15, 15), assets.tile`myTile1`)
    }
}
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    Sprite2.vy = 150
    info.changeScoreBy(1)
})
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
        index = list.indexOf(Sprite2.image)
        Sprite2.setImage(list[(index + 1) % 4])
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(15, 15), assets.tile`myTile1`)) {
        info.changeScoreBy(1)
    }
    info.changeScoreBy(10)
}
let RowBlue = 0
let RowTurq = 0
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
PointBoost(game.ask("Do you want a point boost?"))
game.onUpdate(function () {
    for (let ValueTurq of tiles.getTilesByType(assets.tile`myTile`)) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(ValueTurq.column, ValueTurq.row + 1), assets.tile`myTile3`)) {
            game.gameOver(false)
        }
    }
    for (let row = 0; row <= 29; row++) {
        for (let col = 0; col <= 12; col++) {
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(col + 1, row + 1), assets.tile`myTile3`))) {
                flag = false
            }
            if (flag) {
                tiles.setTileAt(tiles.getTileLocation(col + 1, row + 1), assets.tile`myTile6`)
                for (let ValueTurq of tiles.getTilesByType(assets.tile`myTile6`)) {
                    RowTurq = ValueTurq.row
                }
                for (let ValueBlue of tiles.getTilesByType(assets.tile`myTile3`)) {
                    RowBlue = ValueBlue.row
                    if (RowBlue < RowTurq) {
                        tiles.setTileAt(tiles.getTileLocation(ValueBlue.column, ValueBlue.row + 1), assets.tile`myTile3`)
                    }
                    tiles.setTileAt(tiles.getTileLocation(ValueBlue.column, ValueBlue.row), assets.tile`myTile3`)
                }
            }
        }
    }
})
