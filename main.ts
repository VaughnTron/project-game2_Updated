enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Walk_Right,
    Walk_Foward,
    Walk_Back,
    Walk_Left,
    IDLE,
    redFIRE,
    blueFIRE
}
function CallEnemy () {
    Straw = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        `, SpriteKind.Player)
    anim1back = animation.createAnimation(ActionKind.Walk_Back, 175)
    anim1back.addAnimationFrame(assets.image`Straw`)
    anim1back.addAnimationFrame(assets.image`Straw`)
    anim1back.addAnimationFrame(assets.image`Straw`)
    anim1back.addAnimationFrame(assets.image`Straw`)
    animation.attachAnimation(Straw, anim1back)
    anim2foward = animation.createAnimation(ActionKind.Walk_Foward, 175)
    anim2foward.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        `)
    animation.attachAnimation(Straw, anim2foward)
    anim3right = animation.createAnimation(ActionKind.Walk_Right, 275)
    anim3right.addAnimationFrame(assets.tile`myTile`)
    anim3right.addAnimationFrame(assets.tile`myTile`)
    anim3right.addAnimationFrame(assets.tile`myTile`)
    anim3right.addAnimationFrame(assets.tile`myTile`)
    animation.attachAnimation(Straw, anim3right)
    anim4left = animation.createAnimation(ActionKind.Walk_Left, 275)
    anim4left.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 f 1 1 f 1 1 1 . . . . . . . . 
        f f 2 f f 2 2 1 1 . . . . . . . 
        1 1 1 1 1 1 2 2 1 1 . . . . . . 
        2 f f f 2 1 1 2 2 1 1 . . . . . 
        f 1 1 1 f 2 1 1 2 2 1 1 . . . . 
        . . . 1 1 2 2 1 1 2 2 1 . . . . 
        . . . . 1 1 2 2 1 1 2 1 . . . . 
        . . . . . 1 1 2 2 1 2 1 . . . . 
        . . . . . . 1 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        `)
    anim4left.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 f 1 1 f 1 1 1 . . . . . . . . 
        f f 2 f f 2 2 1 1 . . . . . . . 
        1 1 1 1 1 1 2 2 1 1 . . . . . . 
        2 f f f 2 1 1 2 2 1 1 . . . . . 
        f 1 1 1 f 2 1 1 2 2 1 1 . . . . 
        . . . 1 1 2 2 1 1 2 2 1 . . . . 
        . . . . 1 1 2 2 1 1 2 1 . . . . 
        . . . . . 1 1 2 2 1 2 1 . . . . 
        . . . . . . 1 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        `)
    anim4left.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 f 1 1 f 1 1 1 . . . . . . . . 
        f f 2 f f 2 2 1 1 . . . . . . . 
        1 1 1 1 1 1 2 2 1 1 . . . . . . 
        2 f f f 2 1 1 2 2 1 1 . . . . . 
        f 1 1 1 f 2 1 1 2 2 1 1 . . . . 
        . . . 1 1 2 2 1 1 2 2 1 . . . . 
        . . . . 1 1 2 2 1 1 2 1 . . . . 
        . . . . . 1 1 2 2 1 2 1 . . . . 
        . . . . . . 1 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        `)
    anim4left.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 f 1 1 f 1 1 1 . . . . . . . . 
        f f 2 f f 2 2 1 1 . . . . . . . 
        1 1 1 1 1 1 2 2 1 1 . . . . . . 
        2 f f f 2 1 1 2 2 1 1 . . . . . 
        f 1 1 1 f 2 1 1 2 2 1 1 . . . . 
        . . . 1 1 2 2 1 1 2 2 1 . . . . 
        . . . . 1 1 2 2 1 1 2 1 . . . . 
        . . . . . 1 1 2 2 1 2 1 . . . . 
        . . . . . . 1 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        `)
    animation.attachAnimation(Straw, anim4left)
    anim = animation.createAnimation(ActionKind.IDLE, 275)
    anim.addAnimationFrame(assets.tile`myTile0`)
    animation.attachAnimation(Straw, anim)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    tiles.setWallAt(location, true)
})
function make_map () {
    tiles.setTilemap(tilemap`level2`)
    for (let index = 0; index < 1200; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 254), randint(0, 254)), assets.tile`myTile9`)
    }
    for (let index = 0; index < 1200; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 254), randint(0, 254)), assets.tile`myTile7`)
    }
    for (let index = 0; index < 1200; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 254), randint(0, 254)), assets.tile`myTile4`)
    }
    for (let index = 0; index < 1200; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 254), randint(0, 254)), assets.tile`myTile6`)
    }
    for (let index = 0; index < 1200; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 254), randint(0, 254)), assets.tile`myTile5`)
    }
    for (let index = 0; index < 1200; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 254), randint(0, 254)), assets.tile`myTile8`)
    }
    for (let index = 0; index < 3000; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 225), randint(0, 225)), assets.tile`myTile3`)
    }
    for (let index = 0; index < 5000; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 225), randint(0, 225)), sprites.castle.tileGrass3)
    }
    for (let index = 0; index < 900; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 225), randint(0, 225)), assets.tile`myTile12`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile14`)
    sprite.startEffect(effects.confetti, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setWallAt(location, true)
})
function CallPlayer1 () {
    TurtleBlue = sprites.create(img`
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 1 1 6 6 6 1 1 6 . . . 
        . . . . 6 1 f 6 6 6 f 1 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . e 6 6 f f f f f 6 6 e . . 
        . 6 6 e 5 6 6 6 6 6 6 6 5 e 6 6 
        . 6 e e e e 5 5 5 5 5 e e e e 6 
        . 6 e e 5 5 e e e e e 5 5 e e 6 
        . 6 e 5 5 e e 5 5 5 e e 5 5 e 6 
        . 6 e 5 e e 5 5 5 5 5 e e 5 e 6 
        . 6 6 e e 5 e e e e e 5 e e 6 6 
        . 6 6 e 5 e e 5 5 5 e e 5 e 6 6 
        . . . . e e e e e e e e e . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        `, SpriteKind.Player)
    anim1back = animation.createAnimation(ActionKind.Walk_Back, 175)
    anim1back.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 1 1 6 6 6 1 1 6 . . . 
        . . . . 6 1 f 6 6 6 f 1 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . e 6 6 f f f f f 6 6 e . . 
        . 6 6 e 5 6 6 6 6 6 6 6 5 e 6 6 
        . 6 e e e e 5 5 5 5 5 e e e e 6 
        . 6 e e 5 5 e e e e e 5 5 e e 6 
        . 6 e 5 5 e e 5 5 5 e e 5 5 e 6 
        . 6 e 5 e e 5 5 5 5 5 e e 5 e 6 
        . 6 6 e e 5 e e e e e 5 e e 6 6 
        . 6 6 e 5 e e 5 5 5 e e 5 e 6 6 
        . . . . e e e e e e e e e . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        `)
    anim1back.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 1 1 6 6 6 1 1 6 . . . 
        . . . . 6 1 f 6 6 6 f 1 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . e 6 6 f f f f f 6 6 e . . 
        . 6 6 e 5 6 6 6 6 6 6 6 5 e 6 6 
        . 6 e e e e 5 5 5 5 5 e e e e 6 
        . 6 e e 5 5 e e e e e 5 5 e e 6 
        . 6 e 5 5 e e 5 5 5 e e 5 5 e 6 
        . 6 e 5 e e 5 5 5 5 5 e e 5 e 6 
        . 6 6 e e 5 e e e e e 5 e e 6 6 
        . 6 6 e 5 e e 5 5 5 e e 5 e 6 6 
        . . . . e e e e e e e e e . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . . . . . . . 6 6 6 . . . 
        . . . . . . . . . . 6 6 6 . . . 
        `)
    anim1back.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 1 1 6 6 6 1 1 6 . . . 
        . . . . 6 1 f 6 6 6 f 1 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . e 6 6 f f f f f 6 6 e . . 
        . 6 6 e 5 6 6 6 6 6 6 6 5 e 6 6 
        . 6 e e e e 5 5 5 5 5 e e e e 6 
        . 6 e e 5 5 e e e e e 5 5 e e 6 
        . 6 e 5 5 e e 5 5 5 e e 5 5 e 6 
        . 6 e 5 e e 5 5 5 5 5 e e 5 e 6 
        . 6 6 e e 5 e e e e e 5 e e 6 6 
        . 6 6 e 5 e e 5 5 5 e e 5 e 6 6 
        . . . . e e e e e e e e e . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        `)
    anim1back.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 1 1 6 6 6 1 1 6 . . . 
        . . . . 6 1 f 6 6 6 f 1 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . e 6 6 f f f f f 6 6 e . . 
        . 6 6 e 5 6 6 6 6 6 6 6 5 e 6 6 
        . 6 e e e e 5 5 5 5 5 e e e e 6 
        . 6 e e 5 5 e e e e e 5 5 e e 6 
        . 6 e 5 5 e e 5 5 5 e e 5 5 e 6 
        . 6 e 5 e e 5 5 5 5 5 e e 5 e 6 
        . 6 6 e e 5 e e e e e 5 e e 6 6 
        . 6 6 e 5 e e 5 5 5 e e 5 e 6 6 
        . . . . e e e e e e e e e . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . . . . . . . 
        . . . . 6 6 6 . . . . . . . . . 
        `)
    animation.attachAnimation(TurtleBlue, anim1back)
    anim2foward = animation.createAnimation(ActionKind.Walk_Foward, 175)
    anim2foward.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 e e e e e 6 6 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 6 6 e 4 f f f f f f f 4 e 6 6 
        . 6 e f f f 4 f 4 f 4 f f f e 6 
        . 6 e f f 4 4 f f f 4 4 f f e 6 
        . 6 e 4 f f f f 4 f f f f 4 e 6 
        . 6 e f f 4 4 f 4 f 4 4 f f e 6 
        . 6 6 e 4 f f f f f f f 4 e 6 6 
        . 6 6 e e f 4 f 4 f 4 f e e 6 6 
        . . . . e e e e e e e e e . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 e e e e e 6 6 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 6 6 e 4 f f f f f f f 4 e 6 6 
        . 6 e f f f 4 f 4 f 4 f f f e 6 
        . 6 e f f 4 4 f f f 4 4 f f e 6 
        . 6 e 4 f f f f 4 f f f f 4 e 6 
        . 6 e f f 4 4 f 4 f 4 4 f f e 6 
        . 6 6 e 4 f f f f f f f 4 e 6 6 
        . 6 6 e e f 4 f 4 f 4 f e e 6 6 
        . . . . e e e e e e e e e . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . . . . . . . 
        . . . . 6 6 6 . . . . . . . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 e e e e e 6 6 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 6 6 e 4 f f f f f f f 4 e 6 6 
        . 6 e f f f 4 f 4 f 4 f f f e 6 
        . 6 e f f 4 4 f f f 4 4 f f e 6 
        . 6 e 4 f f f f 4 f f f f 4 e 6 
        . 6 e f f 4 4 f 4 f 4 4 f f e 6 
        . 6 6 e 4 f f f f f f f 4 e 6 6 
        . 6 6 e e f 4 f 4 f 4 f e e 6 6 
        . . . . e e e e e e e e e . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . . 6 6 e e e e e 6 6 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 6 6 e 4 f f f f f f f 4 e 6 6 
        . 6 e f f f 4 f 4 f 4 f f f e 6 
        . 6 e f f 4 4 f f f 4 4 f f e 6 
        . 6 e 4 f f f f 4 f f f f 4 e 6 
        . 6 e f f 4 4 f 4 f 4 4 f f e 6 
        . 6 6 e 4 f f f f f f f 4 e 6 6 
        . 6 6 e e f 4 f 4 f 4 f e e 6 6 
        . . . . e e e e e e e e e . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . . . . . . . 6 6 6 . . . 
        . . . . . . . . . . 6 6 6 . . . 
        `)
    animation.attachAnimation(TurtleBlue, anim2foward)
    anim3right = animation.createAnimation(ActionKind.Walk_Right, 275)
    anim3right.addAnimationFrame(img`
        . . . . . . 6 6 6 6 6 . . . . . 
        . . . . . 6 6 6 6 1 1 6 . . . . 
        . . . . . 6 6 6 6 1 f 6 6 . . . 
        . . . 4 . 6 6 6 6 6 6 6 6 . . . 
        . . 4 f e e 6 6 f f f f f . . . 
        . . f f 4 e 6 6 6 6 6 6 6 . . . 
        . f 4 f e f 6 6 5 e . . . . . . 
        . 4 f 4 e f 6 6 6 6 6 6 6 6 6 . 
        . 4 f 4 e f 6 6 6 6 6 6 6 6 6 . 
        . f 4 f e f 6 6 6 5 . . . . . . 
        . . f f 4 e 6 6 6 e . . . . . . 
        . . 4 f e e 6 6 e 5 . . . . . . 
        . . . 4 . . 6 6 5 5 . . . . . . 
        . . . . . . f 6 6 . . . . . . . 
        . . . . . . f 6 6 . . . . . . . 
        . . . . . . f 6 6 . . . . . . . 
        `)
    anim3right.addAnimationFrame(img`
        . . . . . . 6 6 6 6 6 . . . . . 
        . . . . . 6 6 6 6 1 1 6 . . . . 
        . . . . . 6 6 6 6 1 f 6 6 . . . 
        . . . 4 . 6 6 6 6 6 6 6 6 . . . 
        . . 4 f e e 6 6 f f f f f . . . 
        . . f f 4 e 6 6 6 6 6 6 6 . . . 
        . f 4 f e f 6 6 5 e . . . . . . 
        . 4 f 4 e f 6 6 6 6 6 6 6 6 6 . 
        . 4 f 4 e f 6 6 6 6 6 6 6 6 6 . 
        . f 4 f e f 6 6 6 5 . . . . . . 
        . . f f 4 e 6 6 6 e . . . . . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . f f f f 6 6 6 6 6 6 6 6 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim3right.addAnimationFrame(img`
        . . . . . . 6 6 6 6 6 . . . . . 
        . . . . . 6 6 6 6 1 1 6 . . . . 
        . . . . . 6 6 6 6 1 f 6 6 . . . 
        . . . 4 . 6 6 6 6 6 6 6 6 . . . 
        . . 4 f e e 6 6 f f f f f . . . 
        . . f f 4 e 6 6 6 6 6 6 6 . . . 
        . f 4 f e f 6 6 5 e . . . . . . 
        . 4 f 4 e f 6 6 6 6 6 6 6 6 6 . 
        . 4 f 4 e f 6 6 6 6 6 6 6 6 6 . 
        . f 4 f e f 6 6 6 5 . . . . . . 
        . . f f 4 e 6 6 6 e . . . . . . 
        . . 4 f e e 6 6 e 5 . . . . . . 
        . . . 4 . . 6 6 5 5 . . . . . . 
        . . . . . . f 6 6 . . . . . . . 
        . . . . . . f 6 6 . . . . . . . 
        . . . . . . f 6 6 . . . . . . . 
        `)
    anim3right.addAnimationFrame(img`
        . . . . . . 6 6 6 6 6 . . . . . 
        . . . . . 6 6 6 6 1 1 6 . . . . 
        . . . . . 6 6 6 6 1 f 6 6 . . . 
        . . . 4 . 6 6 6 6 6 6 6 6 . . . 
        . . 4 f e e 6 6 f f f f f . . . 
        . . f f 4 e 6 6 6 6 6 6 6 . . . 
        . f 4 f e f 6 6 5 e . . . . . . 
        . 4 f 4 e f 6 6 6 6 6 6 6 6 6 . 
        . 4 f 4 e f 6 6 6 6 6 6 6 6 6 . 
        . f 4 f e f 6 6 6 5 . . . . . . 
        . . f f 4 e 6 6 6 e . . . . . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . 6 6 6 6 6 6 6 6 f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.attachAnimation(TurtleBlue, anim3right)
    anim4left = animation.createAnimation(ActionKind.Walk_Left, 275)
    anim4left.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . 6 1 1 6 6 6 6 . . . . . 
        . . . 6 6 f 1 6 6 6 6 . . . . . 
        . . . 6 6 6 6 6 6 6 6 . 4 . . . 
        . . . f f f f f 6 6 e e f 4 . . 
        . . . 6 6 6 6 6 6 6 e 4 f f . . 
        . . . . . . e 5 6 6 f e f 4 f . 
        . 6 6 6 6 6 6 6 6 6 f e 4 f 4 . 
        . 6 6 6 6 6 6 6 6 6 f e 4 f 4 . 
        . . . . . . 5 6 6 6 f e f 4 f . 
        . . . . . . e 6 6 6 e 4 f f . . 
        . . . . . . 5 e 6 6 e e f 4 . . 
        . . . . . . 5 5 6 6 . . 4 . . . 
        . . . . . . . 6 6 f . . . . . . 
        . . . . . . . 6 6 f . . . . . . 
        . . . . . . . 6 6 f . . . . . . 
        `)
    anim4left.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . 6 1 1 6 6 6 6 . . . . . 
        . . . 6 6 f 1 6 6 6 6 . . . . . 
        . . . 6 6 6 6 6 6 6 6 . 4 . . . 
        . . . f f f f f 6 6 e e f 4 . . 
        . . . 6 6 6 6 6 6 6 e 4 f f . . 
        . . . . . . e 5 6 6 f e f 4 f . 
        . 6 6 6 6 6 6 6 6 6 f e 4 f 4 . 
        . 6 6 6 6 6 6 6 6 6 f e 4 f 4 . 
        . . . . . . 5 6 6 6 f e f 4 f . 
        . . . . . . e 6 6 6 e 4 f f . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . 6 6 6 6 6 6 6 6 f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim4left.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . 6 1 1 6 6 6 6 . . . . . 
        . . . 6 6 f 1 6 6 6 6 . . . . . 
        . . . 6 6 6 6 6 6 6 6 . 4 . . . 
        . . . f f f f f 6 6 e e f 4 . . 
        . . . 6 6 6 6 6 6 6 e 4 f f . . 
        . . . . . . e 5 6 6 f e f 4 f . 
        . 6 6 6 6 6 6 6 6 6 f e 4 f 4 . 
        . 6 6 6 6 6 6 6 6 6 f e 4 f 4 . 
        . . . . . . 5 6 6 6 f e f 4 f . 
        . . . . . . e 6 6 6 e 4 f f . . 
        . . . . . . 5 e 6 6 e e f 4 . . 
        . . . . . . 5 5 6 6 . . 4 . . . 
        . . . . . . . 6 6 f . . . . . . 
        . . . . . . . 6 6 f . . . . . . 
        . . . . . . . 6 6 f . . . . . . 
        `)
    anim4left.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 . . . . . . 
        . . . . 6 1 1 6 6 6 6 . . . . . 
        . . . 6 6 f 1 6 6 6 6 . . . . . 
        . . . 6 6 6 6 6 6 6 6 . 4 . . . 
        . . . f f f f f 6 6 e e f 4 . . 
        . . . 6 6 6 6 6 6 6 e 4 f f . . 
        . . . . . . e 5 6 6 f e f 4 f . 
        . 6 6 6 6 6 6 6 6 6 f e 4 f 4 . 
        . 6 6 6 6 6 6 6 6 6 f e 4 f 4 . 
        . . . . . . 5 6 6 6 f e f 4 f . 
        . . . . . . e 6 6 6 e 4 f f . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
        . . f f f f 6 6 6 6 6 6 6 6 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.attachAnimation(TurtleBlue, anim4left)
    anim = animation.createAnimation(ActionKind.IDLE, 275)
    anim.addAnimationFrame(img`
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 1 1 6 6 6 1 1 6 . . . 
        . . . . 6 1 f 6 6 6 f 1 6 . . . 
        . . . . 6 6 6 6 6 6 6 6 6 . . . 
        . . . e 6 6 f f f f f 6 6 e . . 
        . 6 6 e 5 6 6 6 6 6 6 6 5 e 6 6 
        . 6 e e e e 5 5 5 5 5 e e e e 6 
        . 6 e e 5 5 e e e e e 5 5 e e 6 
        . 6 e 5 5 e e 5 5 5 e e 5 5 e 6 
        . 6 e 5 e e 5 5 5 5 5 e e 5 e 6 
        . 6 6 e e 5 e e e e e 5 e e 6 6 
        . 6 6 e 5 e e 5 5 5 e e 5 e 6 6 
        . . . . e e e e e e e e e . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        . . . . 6 6 6 . . . 6 6 6 . . . 
        `)
    animation.attachAnimation(TurtleBlue, anim)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.setWallAt(location, true)
})
function CallPlayer2 () {
    TurtleRed = sprites.create(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 1 1 2 2 2 1 1 2 . . . 
        . . . . 2 1 f 2 2 2 f 1 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e 2 2 f f f f f 2 2 e . . 
        . 2 2 e 5 2 2 1 2 1 2 2 5 e 2 2 
        . 2 e e e e 5 5 5 5 5 e e e e 2 
        . 2 e e 5 5 e e e e e 5 5 e e 2 
        . 2 e 5 5 e e 5 5 5 e e 5 5 e 2 
        . 2 e 5 e e 5 5 5 5 5 e e 5 e 2 
        . 2 2 e e 5 e e e e e 5 e e 2 2 
        . 2 2 e 5 e e 5 5 5 e e 5 e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        `, SpriteKind.Player)
    anim1back = animation.createAnimation(ActionKind.Walk_Back, 175)
    anim1back.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 1 1 2 2 2 1 1 2 . . . 
        . . . . 2 1 f 2 2 2 f 1 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e 2 2 f f f f f 2 2 e . . 
        . 2 2 e 5 2 2 1 2 1 2 2 5 e 2 2 
        . 2 e e e e 5 5 5 5 5 e e e e 2 
        . 2 e e 5 5 e e e e e 5 5 e e 2 
        . 2 e 5 5 e e 5 5 5 e e 5 5 e 2 
        . 2 e 5 e e 5 5 5 5 5 e e 5 e 2 
        . 2 2 e e 5 e e e e e 5 e e 2 2 
        . 2 2 e 5 e e 5 5 5 e e 5 e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        `)
    anim1back.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 1 1 2 2 2 1 1 2 . . . 
        . . . . 2 1 f 2 2 2 f 1 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e 2 2 f f f f f 2 2 e . . 
        . 2 2 e 5 2 2 1 2 1 2 2 5 e 2 2 
        . 2 e e e e 5 5 5 5 5 e e e e 2 
        . 2 e e 5 5 e e e e e 5 5 e e 2 
        . 2 e 5 5 e e 5 5 5 e e 5 5 e 2 
        . 2 e 5 e e 5 5 5 5 5 e e 5 e 2 
        . 2 2 e e 5 e e e e e 5 e e 2 2 
        . 2 2 e 5 e e 5 5 5 e e 5 e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . . . . . . . 2 2 2 . . . 
        . . . . . . . . . . 2 2 2 . . . 
        `)
    anim1back.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 1 1 2 2 2 1 1 2 . . . 
        . . . . 2 1 f 2 2 2 f 1 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e 2 2 f f f f f 2 2 e . . 
        . 2 2 e 5 2 2 2 2 2 2 2 5 e 2 2 
        . 2 e e e e 5 5 5 5 5 e e e e 2 
        . 2 e e 5 5 e e e e e 5 5 e e 2 
        . 2 e 5 5 e e 5 5 5 e e 5 5 e 2 
        . 2 e 5 e e 5 5 5 5 5 e e 5 e 2 
        . 2 2 e e 5 e e e e e 5 e e 2 2 
        . 2 2 e 5 e e 5 5 5 e e 5 e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        `)
    anim1back.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 1 1 2 2 2 1 1 2 . . . 
        . . . . 2 1 f 2 2 2 f 1 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e 2 2 f f f f f 2 2 e . . 
        . 2 2 e 5 2 2 1 2 1 2 2 5 e 2 2 
        . 2 e e e e 5 5 5 5 5 e e e e 2 
        . 2 e e 5 5 e e e e e 5 5 e e 2 
        . 2 e 5 5 e e 5 5 5 e e 5 5 e 2 
        . 2 e 5 e e 5 5 5 5 5 e e 5 e 2 
        . 2 2 e e 5 e e e e e 5 e e 2 2 
        . 2 2 e 5 e e 5 5 5 e e 5 e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        `)
    animation.attachAnimation(TurtleRed, anim1back)
    anim2foward = animation.createAnimation(ActionKind.Walk_Foward, 175)
    anim2foward.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 e e e e e 2 2 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 e f f f 4 f 4 f 4 f f f e 2 
        . 2 e f f 4 4 f f f 4 4 f f e 2 
        . 2 e 4 f f f f 4 f f f f 4 e 2 
        . 2 e f f 4 4 f 4 f 4 4 f f e 2 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 2 e e f 4 f 4 f 4 f e e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 e e e e e 2 2 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 e f f f 4 f 4 f 4 f f f e 2 
        . 2 e f f 4 4 f f f 4 4 f f e 2 
        . 2 e 4 f f f f 4 f f f f 4 e 2 
        . 2 e f f 4 4 f 4 f 4 4 f f e 2 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 2 e e f 4 f 4 f 4 f e e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 e e e e e 2 2 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 e f f f 4 f 4 f 4 f f f e 2 
        . 2 e f f 4 4 f f f 4 4 f f e 2 
        . 2 e 4 f f f f 4 f f f f 4 e 2 
        . 2 e f f 4 4 f 4 f 4 4 f f e 2 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 2 e e f 4 f 4 f 4 f e e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 e e e e e 2 2 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 e f f f 4 f 4 f 4 f f f e 2 
        . 2 e f f 4 4 f f f 4 4 f f e 2 
        . 2 e 4 f f f f 4 f f f f 4 e 2 
        . 2 e f f 4 4 f 4 f 4 4 f f e 2 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 2 e e f 4 f 4 f 4 f e e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . . . . . . . 2 2 2 . . . 
        . . . . . . . . . . 2 2 2 . . . 
        `)
    animation.attachAnimation(TurtleRed, anim2foward)
    anim3right = animation.createAnimation(ActionKind.Walk_Right, 275)
    anim3right.addAnimationFrame(img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 1 1 2 . . . . 
        . . . . . 2 2 2 2 1 f 2 2 . . . 
        . . . 4 . 2 2 2 2 2 2 2 2 . . . 
        . . 4 f e e 2 2 f f f f f . . . 
        . . f f 4 e 2 2 2 2 2 2 2 . . . 
        . f 4 f e f 2 2 5 e . . . . . . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . f 4 f e f 2 2 2 5 . . . . . . 
        . . f f 4 e 2 2 2 e . . . . . . 
        . . 4 f e e 2 2 e 5 . . . . . . 
        . . . 4 . . 2 2 5 5 . . . . . . 
        . . . . . . f 2 2 . . . . . . . 
        . . . . . . f 2 2 . . . . . . . 
        . . . . . . f 2 2 . . . . . . . 
        `)
    anim3right.addAnimationFrame(img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 1 1 2 . . . . 
        . . . . . 2 2 2 2 1 f 2 2 . . . 
        . . . 4 . 2 2 2 2 2 2 2 2 . . . 
        . . 4 f e e 2 2 f f f f f . . . 
        . . f f 4 e 2 2 2 2 2 2 2 . . . 
        . f 4 f e f 2 2 5 e . . . . . . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . f 4 f e f 2 2 2 5 . . . . . . 
        . . f f 4 e 2 2 2 e . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . f f f f 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim3right.addAnimationFrame(img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 1 1 2 . . . . 
        . . . . . 2 2 2 2 1 f 2 2 . . . 
        . . . 4 . 2 2 2 2 2 2 2 2 . . . 
        . . 4 f e e 2 2 f f f f f . . . 
        . . f f 4 e 2 2 2 2 2 2 2 . . . 
        . f 4 f e f 2 2 5 e . . . . . . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . f 4 f e f 2 2 2 5 . . . . . . 
        . . f f 4 e 2 2 2 e . . . . . . 
        . . 4 f e e 2 2 e 5 . . . . . . 
        . . . 4 . . 2 2 5 5 . . . . . . 
        . . . . . . f 2 2 . . . . . . . 
        . . . . . . f 2 2 . . . . . . . 
        . . . . . . f 2 2 . . . . . . . 
        `)
    anim3right.addAnimationFrame(img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 1 1 2 . . . . 
        . . . . . 2 2 2 2 1 f 2 2 . . . 
        . . . 4 . 2 2 2 2 2 2 2 2 . . . 
        . . 4 f e e 2 2 f f f f f . . . 
        . . f f 4 e 2 2 2 2 2 2 2 . . . 
        . f 4 f e f 2 2 5 e . . . . . . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . f 4 f e f 2 2 2 5 . . . . . . 
        . . f f 4 e 2 2 2 e . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.attachAnimation(TurtleRed, anim3right)
    anim4left = animation.createAnimation(ActionKind.Walk_Left, 275)
    anim4left.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 1 1 2 2 2 2 . . . . . 
        . . . 2 2 f 1 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 . 4 . . . 
        . . . f f f f f 2 2 e e f 4 . . 
        . . . 2 2 2 2 2 2 2 e 4 f f . . 
        . . . . . . e 5 2 2 f e f 4 f . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . . . . . . 5 2 2 2 f e f 4 f . 
        . . . . . . e 2 2 2 e 4 f f . . 
        . . . . . . 5 e 2 2 e e f 4 . . 
        . . . . . . 5 5 2 2 . . 4 . . . 
        . . . . . . . 2 2 f . . . . . . 
        . . . . . . . 2 2 f . . . . . . 
        . . . . . . . 2 2 f . . . . . . 
        `)
    anim4left.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 1 1 2 2 2 2 . . . . . 
        . . . 2 2 f 1 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 . 4 . . . 
        . . . f f f f f 2 2 e e f 4 . . 
        . . . 2 2 2 2 2 2 2 e 4 f f . . 
        . . . . . . e 5 2 2 f e f 4 f . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . . . . . . 5 2 2 2 f e f 4 f . 
        . . . . . . e 2 2 2 e 4 f f . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim4left.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 1 1 2 2 2 2 . . . . . 
        . . . 2 2 f 1 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 . 4 . . . 
        . . . f f f f f 2 2 e e f 4 . . 
        . . . 2 2 2 2 2 2 2 e 4 f f . . 
        . . . . . . e 5 2 2 f e f 4 f . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . . . . . . 5 2 2 2 f e f 4 f . 
        . . . . . . e 2 2 2 e 4 f f . . 
        . . . . . . 5 e 2 2 e e f 4 . . 
        . . . . . . 5 5 2 2 . . 4 . . . 
        . . . . . . . 2 2 f . . . . . . 
        . . . . . . . 2 2 f . . . . . . 
        . . . . . . . 2 2 f . . . . . . 
        `)
    anim4left.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 1 1 2 2 2 2 . . . . . 
        . . . 2 2 f 1 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 . 4 . . . 
        . . . f f f f f 2 2 e e f 4 . . 
        . . . 2 2 2 2 2 2 2 e 4 f f . . 
        . . . . . . e 5 2 2 f e f 4 f . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . . . . . . 5 2 2 2 f e f 4 f . 
        . . . . . . e 2 2 2 e 4 f f . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . f f f f 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.attachAnimation(TurtleRed, anim4left)
    anim = animation.createAnimation(ActionKind.IDLE, 275)
    anim.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 1 1 2 2 2 1 1 2 . . . 
        . . . . 2 1 f 2 2 2 f 1 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e 2 2 f f f f f 2 2 e . . 
        . 2 2 e 5 2 2 1 2 1 2 2 5 e 2 2 
        . 2 e e e e 5 5 5 5 5 e e e e 2 
        . 2 e e 5 5 e e e e e 5 5 e e 2 
        . 2 e 5 5 e e 5 5 5 e e 5 5 e 2 
        . 2 e 5 e e 5 5 5 5 5 e e 5 e 2 
        . 2 2 e e 5 e e e e e 5 e e 2 2 
        . 2 2 e 5 e e 5 5 5 e e 5 e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        `)
    animation.attachAnimation(TurtleRed, anim)
}
let redfire: Sprite = null
let anim: animation.Animation = null
let anim4left: animation.Animation = null
let anim3right: animation.Animation = null
let anim2foward: animation.Animation = null
let anim1back: animation.Animation = null
let Straw: Sprite = null
let TurtleBlue: Sprite = null
let TurtleRed: Sprite = null
make_map()
CallPlayer1()
CallPlayer2()
scene.cameraFollowSprite(TurtleRed)
TurtleBlue.setStayInScreen(true)
forever(function () {
	
})
forever(function () {
    if (controller.player2.isPressed(ControllerButton.Down)) {
        animation.setAction(TurtleBlue, ActionKind.Walk_Back)
        TurtleBlue.y += 1.5
    } else if (controller.player2.isPressed(ControllerButton.Up)) {
        animation.setAction(TurtleBlue, ActionKind.Walk_Foward)
        TurtleBlue.y += -1.5
    } else if (controller.player2.isPressed(ControllerButton.Right)) {
        animation.setAction(TurtleBlue, ActionKind.Walk_Right)
        TurtleBlue.x += 1.5
    } else if (controller.player2.isPressed(ControllerButton.Left)) {
        animation.setAction(TurtleBlue, ActionKind.Walk_Left)
        TurtleBlue.x += -1.5
    } else {
        animation.setAction(TurtleBlue, ActionKind.IDLE)
    }
    if (controller.player1.isPressed(ControllerButton.Down)) {
        animation.setAction(TurtleRed, ActionKind.Walk_Back)
        TurtleRed.y += 1.5
    } else if (controller.player1.isPressed(ControllerButton.Up)) {
        animation.setAction(TurtleRed, ActionKind.Walk_Foward)
        TurtleRed.y += -1.5
    } else if (controller.player1.isPressed(ControllerButton.Right)) {
        animation.setAction(TurtleRed, ActionKind.Walk_Right)
        TurtleRed.x += 1.5
    } else if (controller.player1.isPressed(ControllerButton.Left)) {
        animation.setAction(TurtleRed, ActionKind.Walk_Left)
        TurtleRed.x += -1.5
    } else {
        animation.setAction(TurtleRed, ActionKind.IDLE)
    }
    if (controller.player1.isPressed(ControllerButton.A) && controller.player1.isPressed(ControllerButton.Right)) {
        scene.cameraShake(2, 100)
        redfire = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . 4 4 d 7 4 . . . . . . 
            . . . 4 4 d d 4 4 4 4 . . . . . 
            . 4 4 5 7 4 4 5 d 7 4 . . . . . 
            4 5 5 7 d 5 5 d 7 7 4 . . . . . 
            7 4 4 5 5 5 5 5 7 4 4 . . . . . 
            7 d 5 d 7 7 4 4 4 . . . . . . . 
            4 4 4 4 7 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, TurtleRed, 100, 0)
    } else if (controller.player1.isPressed(ControllerButton.A) && controller.player1.isPressed(ControllerButton.Left)) {
        scene.cameraShake(2, 100)
        redfire = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . 4 4 d 7 4 . . . . . . 
            . . . 4 4 d d 4 4 4 4 . . . . . 
            . 4 4 5 7 4 4 5 d 7 4 . . . . . 
            4 5 5 7 d 5 5 d 7 7 4 . . . . . 
            7 4 4 5 5 5 5 5 7 4 4 . . . . . 
            7 d 5 d 7 7 4 4 4 . . . . . . . 
            4 4 4 4 7 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, TurtleRed, -100, 0)
    } else if (controller.player1.isPressed(ControllerButton.A) && controller.player1.isPressed(ControllerButton.Down)) {
        scene.cameraShake(2, 100)
        redfire = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . 4 4 d 7 4 . . . . . . 
            . . . 4 4 d d 4 4 4 4 . . . . . 
            . 4 4 5 7 4 4 5 d 7 4 . . . . . 
            4 5 5 7 d 5 5 d 7 7 4 . . . . . 
            7 4 4 5 5 5 5 5 7 4 4 . . . . . 
            7 d 5 d 7 7 4 4 4 . . . . . . . 
            4 4 4 4 7 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, TurtleRed, 0, 100)
    } else if (controller.player1.isPressed(ControllerButton.A) && controller.player1.isPressed(ControllerButton.Up)) {
        scene.cameraShake(2, 100)
        redfire = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . 4 4 d 7 4 . . . . . . 
            . . . 4 4 d d 4 4 4 4 . . . . . 
            . 4 4 5 7 4 4 5 d 7 4 . . . . . 
            4 5 5 7 d 5 5 d 7 7 4 . . . . . 
            7 4 4 5 5 5 5 5 7 4 4 . . . . . 
            7 d 5 d 7 7 4 4 4 . . . . . . . 
            4 4 4 4 7 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, TurtleRed, 0, -100)
    } else {
    	
    }
})
