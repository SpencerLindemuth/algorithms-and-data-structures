# //Given the lifting strength of the arms of two people.
# //Determine the results of a arm wrestling match between the two
# //[leftArm,rightArm]
# playerOne = [10,13]
# playerTwo = [11,9]
# //in: playerOne,PlayerTwo
# //out: Left Arm winner, playerTwo
# //     Right Arm winner, playerOne

# //in: [11,10], [11,9]
# //out: Left arm tie 
# //     Right arm winner, playerOne

require 'pry'

def arm_wrestle(one, two)
    left_winner = ""
    right_winner = ""

    if one[0] > two[0]
        left_winner = "winner, playerOne"
    elsif one[0] == two[0]
        left_winner = "tie"
    else
        left_winner = "winner, playerTwo"
    end

    if one[1] > two[1]
        right_winner = "winner, playerOne"
    elsif one[1] == two[1]
        right_winner = "tie"
    else
        right_winner = "winner, playerTwo"
    end

    puts "Left arm #{left_winner}"
    puts "Right arm #{right_winner}"

end

pry
    