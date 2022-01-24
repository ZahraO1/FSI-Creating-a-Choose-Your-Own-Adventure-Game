// Your Code Here
let firstAnswer = window.prompt("Do you head left or right?")
if (firstAnswer === 'left')
{
    let secondAnswer = window.prompt("You come across a stray cat. " +
        "It scampers off down a small hole, just large enought for you"+
        "to crawl through. Do you follow it, or continue on your path?")
    if (secondAnswer === 'follow')
    {
        let thirdAnswer = window.prompt("You follow the cat to a colony of cats, "+
            "nestles in a fort of warm blankets and subsisting off of inexplicably "+
            "warm soup. They are content with you staying, but you wonder if you "+
            "should alert the world to this magical safe heaven. "+
            "Do you A) Stay or B) Spread the word")
        if (thirdAnswer === 'Stay')
        {
            window.prompt ("You live happily amongst the cats for the rest of your days")
        }
        else
        {
            window.prompt ("After leaving the cat colony, you are never able to "+
                "find it again; without proof, no one believes you story, which "+
                "passes into legend nonetheless")
        }
    }
    //if the secondAnswer == continue
    else
    {
        let thirdAnswer = window.prompt("You come across a chamber that reaches "+
            "upward to a shining light above. There is a long, winding staricase, "+
            "and a much quicker, but rickety-looking ladder that leads up toward the "+
            "light. Do you take the A) Ladder or B) Staircase")
        if (thirdAnswer === 'ladder')
        {
            window.prompt ("After ascending a few feet up the ladder, one of irs rungs "+
                "snaps, and you comedically fall through each of the rungs below. "+
                "Sheepish, you return home.")
        }
        //if thirdAnswer === staircase
        else
        {
            window.prompt ("After ascending the staircase, you discover a shiny blue "+
                "stone, which you take home and cherish forever.")
        }
    }
}
else if (firstAnswer === 'right')
{
    let secondAnswer = window.prompt("You come across a snoring dragon. " +
        "On the other side of him, you see a shiny chest of treasure. "+
        "Another path would lead you away from the dragon altogether. "+
        "Do you go A) past or B) away from the dragon")
    if (secondAnswer === 'past')
    {
        let thirdAnswer = window.prompt("The dragon wakes up and sits upright. "+
            "You only have a moment to respond, to A)Stay or B) Run")
        if (thirdAnswer === 'stay')
        {
            window.prompt ("You and the dragon have an uplifting conversation about "+
                "local politics and become lifelong friends.")
        }
        else
        {
            window.prompt ("Quickly, you run back to the cave's entrance. "+
                "Sheepish, you return home.")
        }
    }
    //if secondAnswer === away
    else
    {
        let thirdAnswer = window.prompt ("After walking a while longer, you come "+
            "across a shiny blue flower. It is so beautiful. Do you A) Draw it or B) Pick it")
        if (thirdAnswer === 'draw it')
        {
            window.prompt ("You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.")

        }
        else
        {
            window.prompt ("You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.")
        }

    }
}