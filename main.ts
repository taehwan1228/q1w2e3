namespace SpriteKind {
    export const boom = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.player2.score() >= 1) {
        info.player2.changeScoreBy(-1)
        projec4 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . b d b c . . . . . 
            . . . . b b c 5 5 5 c b b . . . 
            . . . . b 5 5 5 1 5 5 5 b . . . 
            . . . c c 5 5 5 1 5 5 5 c c . . 
            . . b b 5 5 5 1 1 1 5 5 5 b b . 
            . . d d 5 1 1 1 1 1 1 1 5 d d . 
            . . b b 5 5 5 1 1 1 5 5 5 b b . 
            . . . c c 5 5 5 1 5 5 5 c c . . 
            . . . . b 5 5 5 1 5 5 5 b . . . 
            . . . . b b c 5 5 5 c b b . . . 
            . . . . . . c b d b c . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, -40)
        music.beamUp.play()
        projec4.setKind(SpriteKind.boom)
        pause(1000)
        music.sonar.play()
        scene.cameraShake(29, 1000)
        projec4.destroy()
        for (let index = 0; index < 4; index++) {
            scene.setBackgroundColor(2)
            pause(100)
            scene.setBackgroundColor(5)
            pause(100)
        }
        scene.setBackgroundColor(15)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.pewPew.play()
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . 2 3 1 3 2 . . . . . . 
        . . . . . 3 1 1 1 3 . . . . . . 
        . . . . . 3 1 1 1 3 . . . . . . 
        . . . . . 3 1 1 1 3 . . . . . . 
        . . . . . 3 1 1 1 2 . . . . . . 
        . . . . . 2 1 1 1 2 . . . . . . 
        . . . . . 2 3 1 3 2 . . . . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . . . . . 2 1 2 . . . . . . . 
        . . . . . . 2 1 2 . . . . . . . 
        . . . . . . 2 1 2 . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        `, mySprite, 0, -200)
})
info.onLifeZero(function () {
    game.over(false, effects.splatter)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    projectile.destroy()
    info.changeScoreBy(1)
    otherSprite.destroy(effects.fire, 100)
    scene.cameraShake(5, 100)
    music.smallCrash.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.bigCrash.play()
    otherSprite.destroy()
    scene.cameraShake(15, 500)
})
let projectile3: Sprite = null
let projectile: Sprite = null
let projec4: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 2 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . c e 2 e . . . . . . 
    . . . . . . c 2 4 e . . . . . . 
    . . . . . . c 2 4 e . . . . . . 
    . . . . f f e 2 2 4 f f . . . . 
    c d . . c e 2 2 2 4 2 e . . c d 
    c d . c c e 2 2 2 2 4 2 e . e d 
    f d c c e 2 2 2 2 2 4 2 e e e f 
    f b c e e 2 . . . . 2 4 2 e e f 
    . b c e . . . . . . . . 4 e b . 
    . . c . . . . . . . . . . e . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
mySprite.setStayInScreen(true)
let mySprite2 = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . c c c . . . . . . 
    . . . . . . a b a a . . . . . . 
    . . . . . c b a f c a c . . . . 
    . . . . c b b b f f a c c . . . 
    . . . . b b f a b b a a c . . . 
    . . . . c b f f b a f c a . . . 
    . . . . . c a a c b b a . . . . 
    . . . . . . c c c c . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . c c 8 . . . . 
    . . . . . . 8 c c c f 8 c c . . 
    . . . c c 8 8 f c a f f f c c . 
    . . c c c f f f c a a f f c c c 
    8 c c c f f f f c c a a c 8 c c 
    c c c b f f f 8 a c c a a a c c 
    c a a b b 8 a b c c c c c c c c 
    a f c a a b b a c c c c c f f c 
    a 8 f c a a c c a c a c f f f c 
    c a 8 a a c c c c a a f f f 8 a 
    . a c a a c f f a a b 8 f f c a 
    . . c c b a f f f a b b c c 6 c 
    . . . c b b a f f 6 6 a b 6 c . 
    . . . c c b b b 6 6 a c c c c . 
    . . . . c c a b b c c c . . . . 
    . . . . . c c c c c c . . . . . 
    `,
img`
    . . . . . . . . c c c c . . . . 
    . . . . c c c c c c c c c . . . 
    . . . c f c c a a a a c a c . . 
    . . c c f f f f a a a c a a c . 
    . . c c a f f c a a f f f a a c 
    . . c c a a a a b c f f f a a c 
    . c c c c a c c b a f c a a c c 
    c a f f c c c a b b 6 b b b c c 
    c a f f f f c c c 6 b b b a a c 
    c a a c f f c a 6 6 b b b a a c 
    c c b a a a a b 6 b b a b b a . 
    . c c b b b b b b b a c c b a . 
    . . c c c b c c c b a a b c . . 
    . . . . c b a c c b b b c . . . 
    . . . . c b b a a 6 b c . . . . 
    . . . . . . b 6 6 c c . . . . . 
    `,
img`
    . . . . . . . c c c a c . . . . 
    . . c c b b b a c a a a c . . . 
    . c c a b a c b a a a b c c . . 
    . c a b c f f f b a b b b a . . 
    . c a c f f f 8 a b b b b b a . 
    . c a 8 f f 8 c a b b b b b a . 
    c c c a c c c c a b c f a b c c 
    c c a a a c c c a c f f c b b a 
    c c a b 6 a c c a f f c c b b a 
    c a b c 8 6 c c a a a b b c b c 
    c a c f f a c c a f a c c c b . 
    c a 8 f c c b a f f c b c c c . 
    . c b c c c c b f c a b b a c . 
    . . a b b b b b b b b b b b c . 
    . . . c c c c b b b b b c c . . 
    . . . . . . . . c b b c . . . . 
    `,
img`
    . . . . . . c c c . . . . . . . 
    . . . . . a a a c c c . . . . . 
    . . . c a c f a a a a c . . . . 
    . . c a c f f f a f f a c . . . 
    . c c a c c f a a c f f a c . . 
    . a b a a c 6 a a c c f a c c c 
    . a b b b 6 a b b a a c a f f c 
    . . a b b a f f b b a a c f f c 
    c . a a a c c f c b a a c f a c 
    c c a a a c c a a a b b a c a c 
    a c a b b a a 6 a b b 6 b b c . 
    b a c b b b 6 b c . c c a c . . 
    b a c c a b b a c . . . . . . . 
    b b a c a b a a . . . . . . . . 
    a b 6 b b a c . . . . . . . . . 
    . a a b c . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . c c . . . . . . . . 
    . . . . c a f b c . . . . . . . 
    . . . . b f f b c c . . . . . . 
    . . . a a f b a b a c . . . . . 
    . . . c a c b b f f b . . . . . 
    . . . . b f f b f a b . . . . . 
    . . . . a f f b b b a . . . . . 
    . . . . . a b b c c . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
]
info.setLife(4)
info.setScore(0)
if (info.score() >= 50) {
    mySprite3 = sprites.create(img`
        ..............................
        ..............................
        ..............................
        .......c..............6.......
        ......c6c666......666686......
        .....c6688886....68888986.....
        ......c6888886..668889986.....
        .......c6888886688889986......
        .......cc66888888888968.......
        .......fcc688888888968f.......
        .......fbc688888888968f.......
        .......fbc668888889866f.......
        .......fdcc6888889866df.......
        .......cd.cc68888986.dc.......
        .......cd..c6888986..dc.......
        .......cd..ff6889ff..dc.......
        .............c896.............
        .............c896.............
        .............c686.............
        .............cff6.............
        .............cc86.............
        .............cffb.............
        .............ccbd.............
        ..............cd..............
        ..............cd..............
        ..............................
        ..............................
        ..............................
        ..............................
        ..............................
        `, SpriteKind.Enemy)
}
info.player2.setScore(5)
game.onUpdateInterval(5000, function () {
    if (info.score() >= 70) {
        projectile3 = sprites.createProjectileFromSide(mySprite2[randint(0, mySprite2.length - 1)], 0, 75)
        projectile3.setKind(SpriteKind.Enemy)
        projectile3.setPosition(randint(10, 150), 0)
    }
})
game.onUpdateInterval(2000, function () {
    if (info.score() >= 60) {
        projectile3 = sprites.createProjectileFromSide(mySprite2[randint(0, mySprite2.length - 1)], 0, 75)
        projectile3.setKind(SpriteKind.Enemy)
        projectile3.setPosition(randint(10, 150), 0)
    }
})
game.onUpdateInterval(1000, function () {
    if (info.score() >= 50) {
        projectile3 = sprites.createProjectileFromSide(mySprite2[randint(0, mySprite2.length - 1)], 0, 75)
        projectile3.setKind(SpriteKind.Enemy)
        projectile3.setPosition(randint(10, 150), 0)
    }
})
game.onUpdateInterval(500, function () {
    projectile3 = sprites.createProjectileFromSide(mySprite2[randint(0, mySprite2.length - 1)], 0, 75)
    projectile3.setKind(SpriteKind.Enemy)
    projectile3.setPosition(randint(10, 150), 0)
})
game.onUpdateInterval(500, function () {
    if (info.score() >= 90) {
        projectile3 = sprites.createProjectileFromSide(mySprite2[randint(0, mySprite2.length - 1)], 0, 75)
        projectile3.setKind(SpriteKind.Enemy)
        projectile3.setPosition(randint(10, 150), 0)
    }
})
game.onUpdateInterval(500, function () {
    if (info.score() >= 110) {
        projectile3 = sprites.createProjectileFromSide(mySprite2[randint(0, mySprite2.length - 1)], 0, 75)
        projectile3.setKind(SpriteKind.Enemy)
        projectile3.setPosition(randint(10, 150), 0)
    }
})
