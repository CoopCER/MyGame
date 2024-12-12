input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Click), function () {
    if (end == 1) {
        points = 0
        sound = 0
        Board = 1
        TBall = 1
        RBall = 1
        BallX = 1
        BallY = 1
        end = 0
    }
})
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Down), function () {
    if (end == 1) {
        basic.showNumber(Highscore)
    }
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    if (Board - 1 > 0) {
        Board += -1
    }
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    if (Board + 1 < 5) {
        Board += 1
    }
})
let pointsA = 0
let sound1 = 0
let points = 0
let end = 0
let BallY = 0
let BallX = 0
let RBall = 0
let TBall = 0
let Board = 0
let sound = 0
let Highscore = 0
Highscore = storage.getNumber(StorageSlots.s1)
sound = 0
Board = 1
TBall = 1
RBall = 1
BallX = 1
BallY = 1
basic.forever(function () {
    basic.pause(750)
    if (BallX - 1 > 0 && RBall == 0) {
        BallX += -1
    }
    if (BallX + 1 < 6 && RBall == 1) {
        BallX += 1
    }
    if (BallY + 1 < 5 && TBall == 1) {
        BallY += 1
    }
    if (BallY - 1 > -1 && TBall == 0) {
        BallY += -1
    }
})
basic.forever(function () {
    if (BallY > 0) {
        if (Board == 1) {
            if (BallY == 1 && BallX == 1) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    # . . . .
                    # # . . .
                    `)
            }
            if (BallY == 1 && BallX == 2) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . # . . .
                    # # . . .
                    `)
            }
            if (BallY == 1 && BallX == 3) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . # . .
                    # # . . .
                    `)
            }
            if (BallY == 1 && BallX == 4) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . # .
                    # # . . .
                    `)
            }
            if (BallY == 1 && BallX == 5) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . #
                    # # . . .
                    `)
            }
            if (BallY == 2 && BallX == 1) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # . . . .
                    . . . . .
                    # # . . .
                    `)
            }
            if (BallY == 3 && BallX == 1) {
                basic.showLeds(`
                    . . . . .
                    # . . . .
                    . . . . .
                    . . . . .
                    # # . . .
                    `)
            }
            if (BallY == 4 && BallX == 1) {
                basic.showLeds(`
                    # . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    # # . . .
                    `)
            }
            if (BallY == 2 && BallX == 2) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . # . . .
                    . . . . .
                    # # . . .
                    `)
            }
            if (BallY == 2 && BallX == 3) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    # # . . .
                    `)
            }
            if (BallY == 2 && BallX == 4) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . # .
                    . . . . .
                    # # . . .
                    `)
            }
            if (BallY == 2 && BallX == 5) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . #
                    . . . . .
                    # # . . .
                    `)
            }
            if (BallY == 3 && BallX == 2) {
                basic.showLeds(`
                    . . . . .
                    . # . . .
                    . . . . .
                    . . . . .
                    # # . . .
                    `)
            }
            if (BallY == 3 && BallX == 3) {
                basic.showLeds(`
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    # # . . .
                    `)
            }
            if (BallY == 3 && BallX == 4) {
                basic.showLeds(`
                    . . . . .
                    . . . # .
                    . . . . .
                    . . . . .
                    # # . . .
                    `)
            }
            if (BallY == 3 && BallX == 5) {
                basic.showLeds(`
                    . . . . .
                    . . . . #
                    . . . . .
                    . . . . .
                    # # . . .
                    `)
            }
            if (BallY == 4 && BallX == 2) {
                basic.showLeds(`
                    . # . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    # # . . .
                    `)
            }
            if (BallY == 4 && BallX == 3) {
                basic.showLeds(`
                    . . # . .
                    . . . . .
                    . . . . .
                    . . . . .
                    # # . . .
                    `)
            }
            if (BallY == 4 && BallX == 4) {
                basic.showLeds(`
                    . . . # .
                    . . . . .
                    . . . . .
                    . . . . .
                    # # . . .
                    `)
            }
            if (BallY == 4 && BallX == 5) {
                basic.showLeds(`
                    . . . . #
                    . . . . .
                    . . . . .
                    . . . . .
                    # # . . .
                    `)
            }
        } else {
            if (Board == 2) {
                if (BallY == 1 && BallX == 1) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        # . . . .
                        . # # . .
                        `)
                }
                if (BallY == 1 && BallX == 2) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . # . . .
                        . # # . .
                        `)
                }
                if (BallY == 1 && BallX == 3) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . # . .
                        . # # . .
                        `)
                }
                if (BallY == 1 && BallX == 4) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . # .
                        . # # . .
                        `)
                }
                if (BallY == 1 && BallX == 5) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . #
                        . # # . .
                        `)
                }
                if (BallY == 2 && BallX == 1) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        # . . . .
                        . . . . .
                        . # # . .
                        `)
                }
                if (BallY == 3 && BallX == 1) {
                    basic.showLeds(`
                        . . . . .
                        # . . . .
                        . . . . .
                        . . . . .
                        . # # . .
                        `)
                }
                if (BallY == 4 && BallX == 1) {
                    basic.showLeds(`
                        # . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . # # . .
                        `)
                }
                if (BallY == 2 && BallX == 2) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . # . . .
                        . . . . .
                        . # # . .
                        `)
                }
                if (BallY == 2 && BallX == 3) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . # # . .
                        `)
                }
                if (BallY == 2 && BallX == 4) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . # .
                        . . . . .
                        . # # . .
                        `)
                }
                if (BallY == 2 && BallX == 5) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . #
                        . . . . .
                        . # # . .
                        `)
                }
                if (BallY == 3 && BallX == 2) {
                    basic.showLeds(`
                        . . . . .
                        . # . . .
                        . . . . .
                        . . . . .
                        . # # . .
                        `)
                }
                if (BallY == 3 && BallX == 3) {
                    basic.showLeds(`
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
                        . # # . .
                        `)
                }
                if (BallY == 3 && BallX == 4) {
                    basic.showLeds(`
                        . . . . .
                        . . . # .
                        . . . . .
                        . . . . .
                        . # # . .
                        `)
                }
                if (BallY == 3 && BallX == 5) {
                    basic.showLeds(`
                        . . . . .
                        . . . . #
                        . . . . .
                        . . . . .
                        . # # . .
                        `)
                }
                if (BallY == 4 && BallX == 2) {
                    basic.showLeds(`
                        . # . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . # # . .
                        `)
                }
                if (BallY == 4 && BallX == 3) {
                    basic.showLeds(`
                        . . # . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . # # . .
                        `)
                }
                if (BallY == 4 && BallX == 4) {
                    basic.showLeds(`
                        . . . # .
                        . . . . .
                        . . . . .
                        . . . . .
                        . # # . .
                        `)
                }
                if (BallY == 4 && BallX == 5) {
                    basic.showLeds(`
                        . . . . #
                        . . . . .
                        . . . . .
                        . . . . .
                        . # # . .
                        `)
                }
            } else {
                if (Board == 3) {
                    if (BallY == 1 && BallX == 1) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            # . . . .
                            . . # # .
                            `)
                    }
                    if (BallY == 1 && BallX == 2) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . # . . .
                            . . # # .
                            `)
                    }
                    if (BallY == 1 && BallX == 3) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . # . .
                            . . # # .
                            `)
                    }
                    if (BallY == 1 && BallX == 4) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . # .
                            . . # # .
                            `)
                    }
                    if (BallY == 1 && BallX == 5) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . #
                            . . # # .
                            `)
                    }
                    if (BallY == 2 && BallX == 1) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            # . . . .
                            . . . . .
                            . . # # .
                            `)
                    }
                    if (BallY == 3 && BallX == 1) {
                        basic.showLeds(`
                            . . . . .
                            # . . . .
                            . . . . .
                            . . . . .
                            . . # # .
                            `)
                    }
                    if (BallY == 4 && BallX == 1) {
                        basic.showLeds(`
                            # . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            . . # # .
                            `)
                    }
                    if (BallY == 2 && BallX == 2) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . # . . .
                            . . . . .
                            . . # # .
                            `)
                    }
                    if (BallY == 2 && BallX == 3) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . # . .
                            . . . . .
                            . . # # .
                            `)
                    }
                    if (BallY == 2 && BallX == 4) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . # .
                            . . . . .
                            . . # # .
                            `)
                    }
                    if (BallY == 2 && BallX == 5) {
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . #
                            . . . . .
                            . . # # .
                            `)
                    }
                    if (BallY == 3 && BallX == 2) {
                        basic.showLeds(`
                            . . . . .
                            . # . . .
                            . . . . .
                            . . . . .
                            . . # # .
                            `)
                    }
                    if (BallY == 3 && BallX == 3) {
                        basic.showLeds(`
                            . . . . .
                            . . # . .
                            . . . . .
                            . . . . .
                            . . # # .
                            `)
                    }
                    if (BallY == 3 && BallX == 4) {
                        basic.showLeds(`
                            . . . . .
                            . . . # .
                            . . . . .
                            . . . . .
                            . . # # .
                            `)
                    }
                    if (BallY == 3 && BallX == 5) {
                        basic.showLeds(`
                            . . . . .
                            . . . . #
                            . . . . .
                            . . . . .
                            . . # # .
                            `)
                    }
                    if (BallY == 4 && BallX == 2) {
                        basic.showLeds(`
                            . # . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            . . # # .
                            `)
                    }
                    if (BallY == 4 && BallX == 3) {
                        basic.showLeds(`
                            . . # . .
                            . . . . .
                            . . . . .
                            . . . . .
                            . . # # .
                            `)
                    }
                    if (BallY == 4 && BallX == 4) {
                        basic.showLeds(`
                            . . . # .
                            . . . . .
                            . . . . .
                            . . . . .
                            . . # # .
                            `)
                    }
                    if (BallY == 4 && BallX == 5) {
                        basic.showLeds(`
                            . . . . #
                            . . . . .
                            . . . . .
                            . . . . .
                            . . # # .
                            `)
                    }
                } else {
                    if (Board == 4) {
                        if (BallY == 1 && BallX == 1) {
                            basic.showLeds(`
                                . . . . .
                                . . . . .
                                . . . . .
                                # . . . .
                                . . . # #
                                `)
                        }
                        if (BallY == 1 && BallX == 2) {
                            basic.showLeds(`
                                . . . . .
                                . . . . .
                                . . . . .
                                . # . . .
                                . . . # #
                                `)
                        }
                        if (BallY == 1 && BallX == 3) {
                            basic.showLeds(`
                                . . . . .
                                . . . . .
                                . . . . .
                                . . # . .
                                . . . # #
                                `)
                        }
                        if (BallY == 1 && BallX == 4) {
                            basic.showLeds(`
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . # .
                                . . . # #
                                `)
                        }
                        if (BallY == 1 && BallX == 5) {
                            basic.showLeds(`
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . . #
                                . . . # #
                                `)
                        }
                        if (BallY == 2 && BallX == 1) {
                            basic.showLeds(`
                                . . . . .
                                . . . . .
                                # . . . .
                                . . . . .
                                . . . # #
                                `)
                        }
                        if (BallY == 3 && BallX == 1) {
                            basic.showLeds(`
                                . . . . .
                                # . . . .
                                . . . . .
                                . . . . .
                                . . . # #
                                `)
                        }
                        if (BallY == 4 && BallX == 1) {
                            basic.showLeds(`
                                # . . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . # #
                                `)
                        }
                        if (BallY == 2 && BallX == 2) {
                            basic.showLeds(`
                                . . . . .
                                . . . . .
                                . # . . .
                                . . . . .
                                . . . # #
                                `)
                        }
                        if (BallY == 2 && BallX == 3) {
                            basic.showLeds(`
                                . . . . .
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . # #
                                `)
                        }
                        if (BallY == 2 && BallX == 4) {
                            basic.showLeds(`
                                . . . . .
                                . . . . .
                                . . . # .
                                . . . . .
                                . . . # #
                                `)
                        }
                        if (BallY == 2 && BallX == 5) {
                            basic.showLeds(`
                                . . . . .
                                . . . . .
                                . . . . #
                                . . . . .
                                . . . # #
                                `)
                        }
                        if (BallY == 3 && BallX == 2) {
                            basic.showLeds(`
                                . . . . .
                                . # . . .
                                . . . . .
                                . . . . .
                                . . . # #
                                `)
                        }
                        if (BallY == 3 && BallX == 3) {
                            basic.showLeds(`
                                . . . . .
                                . . # . .
                                . . . . .
                                . . . . .
                                . . . # #
                                `)
                        }
                        if (BallY == 3 && BallX == 4) {
                            basic.showLeds(`
                                . . . . .
                                . . . # .
                                . . . . .
                                . . . . .
                                . . . # #
                                `)
                        }
                        if (BallY == 3 && BallX == 5) {
                            basic.showLeds(`
                                . . . . .
                                . . . . #
                                . . . . .
                                . . . . .
                                . . . # #
                                `)
                        }
                        if (BallY == 4 && BallX == 2) {
                            basic.showLeds(`
                                . # . . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . # #
                                `)
                        }
                        if (BallY == 4 && BallX == 3) {
                            basic.showLeds(`
                                . . # . .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . # #
                                `)
                        }
                        if (BallY == 4 && BallX == 4) {
                            basic.showLeds(`
                                . . . # .
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . # #
                                `)
                        }
                        if (BallY == 4 && BallX == 5) {
                            basic.showLeds(`
                                . . . . #
                                . . . . .
                                . . . . .
                                . . . . .
                                . . . # #
                                `)
                        }
                    } else {
                    	
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (BallX == 1) {
        RBall = 1
    }
    if (BallX == 5) {
        RBall = 0
    }
    if (BallY == 4) {
        TBall = 0
        sound1 = 1
        pointsA = 1
    }
    if (BallY == 1 && (BallX == Board || BallX == Board + 1)) {
        TBall = 1
    }
    if (BallY == 0) {
        sound = 1
        basic.showNumber(points)
        end = 1
        storage.putNumber(StorageSlots.s1, Highscore)
        if (points > Highscore) {
            Highscore = points
        }
    }
})
basic.forever(function () {
    if (sound == 1) {
        music.playMelody("C5 A F D C C C C ", 120)
        sound = 0
    }
})
basic.forever(function () {
    if (sound1 == 1) {
        music.playMelody("C5 - - - - - - - ", 120)
        sound1 = 0
    }
})
basic.forever(function () {
    if (pointsA == 1) {
        points += 1
        basic.pause(2000)
        pointsA = 0
    }
})
