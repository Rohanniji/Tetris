controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Rotate(info.score())
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
            tiles.setTileAt(tiles.getTileLocation(location.column, location.row - 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(location.column, location.row - 2), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(location.column, location.row - 3), assets.tile`myTile3`)
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
            tiles.setTileAt(tiles.getTileLocation(location.column - 1, location.row - 2), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(location.column + 1, location.row - 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(location.column, location.row - 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(location.column, location.row - 2), assets.tile`myTile3`)
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
            tiles.setTileAt(tiles.getTileLocation(location.column, location.row - 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(location.column, location.row - 2), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(location.column, location.row - 3), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(location.column - 1, location.row - 3), assets.tile`myTile3`)
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
            tiles.setTileAt(tiles.getTileLocation(location.column, location.row - 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(location.column + 1, location.row - 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(location.column - 1, location.row - 1), assets.tile`myTile3`)
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
            tiles.setTileAt(tiles.getTileLocation(location.column, location.row - 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(location.column, location.row - 2), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(location.column + 1, location.row - 2), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(location.column + 1, location.row - 3), assets.tile`myTile3`)
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
            tiles.setTileAt(tiles.getTileLocation(location.column, location.row - 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(location.column + 1, location.row - 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(location.column + 1, location.row - 2), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(location.column - 1, location.row - 1), assets.tile`myTile3`)
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
            tiles.setTileAt(tiles.getTileLocation(location.column, location.row - 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(location.column - 1, location.row - 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(location.column - 1, location.row - 2), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(location.column - 1, location.row - 3), assets.tile`myTile3`)
        } else {
            tiles.setTileAt(tiles.getTileLocation(location.column, location.row - 2), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(location.column - 1, location.row - 1), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(location.column - 1, location.row - 2), assets.tile`myTile3`)
            tiles.setTileAt(tiles.getTileLocation(location.column + 1, location.row - 2), assets.tile`myTile3`)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
            tiles.setWallAt(tiles.getTileLocation(value.column, value.row), true)
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
    controller.moveSprite(Sprite2, 100, 0)
}
function DestroyRow (bool: boolean) {
    if (true) {
        for (let row = 0; row <= 29; row++) {
            for (let col = 0; col <= 12; col++) {
            	
            }
        }
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
function StartSequence (color: Image) {
    for (let StartCol = 0; StartCol <= 12; StartCol++) {
        for (let StartRow = 0; StartRow <= 29; StartRow++) {
            tiles.setTileAt(tiles.getTileLocation(StartCol + 1, StartRow + 1), color)
        }
    }
}
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
        `) || Sprite2.image.equals(img`
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
        for (let index = 0; index <= RotationsLong.length - 1; index++) {
            Sprite2.setImage(RotationsLong[index + 1])
        }
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
        `) || Sprite2.image.equals(img`
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
        // StartCol = list.indexOf(Sprite2.image)
        // Sprite2.setImage(list[(StartCol + 1) % 4])
        for (let index2 = 0; index2 <= RotationsSwiggle.length - 1; index2++) {
            Sprite2.setImage(RotationsSwiggle[index2 + 1])
        }
    }
    if (Sprite2.image.equals(img`
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
        `) || Sprite2.image.equals(img`
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
        `) || (Sprite2.image.equals(img`
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
        `) || Sprite2.image.equals(img`
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
        `))) {
        for (let index3 = 0; index3 <= RotationsLshape.length - 1; index3++) {
            Sprite2.setImage(RotationsLshape[index3 + 1])
        }
        for (let index4 = 0; index4 <= RotationsSwiggle.length - 1; index4++) {
            Sprite2.setImage(RotationsSwiggle[index4 + 1])
        }
    } else if (Sprite2.image.equals(img`
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
        `) || Sprite2.image.equals(img`
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
        `) || (Sprite2.image.equals(img`
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
        `) || Sprite2.image.equals(img`
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
        `))) {
        for (let index5 = 0; index5 <= RotationsLshape.length - 1; index5++) {
            Sprite2.setImage(RotationsLshape[index5 + 1])
        }
        for (let index6 = 0; index6 <= RotationsSwiggle.length - 1; index6++) {
            Sprite2.setImage(RotationsSwiggle[index6 + 1])
        }
    } else if (Sprite2.image.equals(img`
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
        `) || Sprite2.image.equals(img`
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
        `) || (Sprite2.image.equals(img`
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
        `) || Sprite2.image.equals(img`
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
        `))) {
        for (let index7 = 0; index7 <= RotationsLshape.length - 1; index7++) {
            Sprite2.setImage(RotationsLshape[index7 + 1])
        }
        for (let index8 = 0; index8 <= RotationsSwiggle.length - 1; index8++) {
            Sprite2.setImage(RotationsSwiggle[index8 + 1])
        }
    } else if (Sprite2.image.equals(img`
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
        `) || Sprite2.image.equals(img`
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
        `) || (Sprite2.image.equals(img`
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
        `) || Sprite2.image.equals(img`
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
        `))) {
        for (let index9 = 0; index9 <= RotationsLshape.length - 1; index9++) {
            Sprite2.setImage(RotationsLshape[index9 + 1])
        }
    }
    info.changeScoreBy(num - (num - 1))
}
let RowBlue = 0
let RowTurq = 0
let Sprite2: Sprite = null
let count = 0
let NextSprite: Sprite = null
let RotationsLshape: Image[] = []
let RotationsSwiggle: Image[] = []
let RotationsLong: Image[] = []
let Blocks: Image[] = []
let StartCol2 = 0
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
RotationsLong = [img`
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
RotationsSwiggle = [img`
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
tiles.placeOnTile(NextSprite, tiles.getTileLocation(23, 13))
NextSprite.scale += 8
info.setScore(0)
let flag = true
PointBoost(game.ask("Do you want a point boost?"))
timer.after(500, function () {
    StartSequence(img`myTile11`)
})
timer.after(1000, function () {
    StartSequence(img`myTile12`)
})
timer.after(1500, function () {
    StartSequence(img`myTile13`)
})
timer.after(2000, function () {
    StartSequence(assets.tile`myTile1`)
    SpawnSprite()
})
game.onUpdate(function () {
    for (let value2 of tiles.getTilesByType(assets.tile`myTile`)) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(tiles.locationXY(value2, tiles.XY.column), tiles.locationXY(value2, tiles.XY.column) - 1), assets.tile`myTile3`)) {
            game.gameOver(false)
        }
    }
})
