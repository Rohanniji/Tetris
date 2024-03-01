controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Rotate(RotationsLshape)
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    BlockPlacement(Sprite2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(false)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(false)
})
function DestroyRow (bool: boolean) {
    if (bool) {
        for (let row = 0; row <= 29; row++) {
            for (let col = 0; col <= 12; col++) {
                if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(col + 1, row + 1), assets.tile`myTile3`))) {
                    flag = false
                }
            }
        }
    } else {
        for (let ValueTurq2 of tiles.getTilesByType(assets.tile`myTile6`)) {
            RowTurq = ValueTurq2.row
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
function PointBoost (bool: boolean) {
    if (bool) {
        tiles.setTileAt(tiles.getTileLocation(15, 15), assets.tile`myTile0`)
    } else {
        tiles.setTileAt(tiles.getTileLocation(15, 15), assets.tile`myTile1`)
    }
}
function BlockPlacement (SpawnedSprite: Sprite) {
    if (SpawnedSprite.isHittingTile(CollisionDirection.Bottom)) {
        if (SpawnedSprite.image.equals(img`
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
        } else if (SpawnedSprite.image.equals(img`
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
        } else if (SpawnedSprite.image.equals(img`
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
        } else if (SpawnedSprite.image.equals(img`
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
        } else if (SpawnedSprite.image.equals(img`
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
        } else if (SpawnedSprite.image.equals(img`
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
        } else if (SpawnedSprite.image.equals(img`
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
        for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
            tiles.setWallAt(tiles.getTileLocation(value.column, value.row), true)
        }
        sprites.destroy(Sprite2)
        SpawnSprite()
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
let index = 0
let RowBlue = 0
let RowTurq = 0
let Sprite2: Sprite = null
let flag = false
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
flag = true
PointBoost(game.ask("Do you want a point boost?"))
game.onUpdate(function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(value.column, value.row + 1), assets.tile`myTile3`)) {
            game.gameOver(false)
        }
    }
    DestroyRow(flag)
})
