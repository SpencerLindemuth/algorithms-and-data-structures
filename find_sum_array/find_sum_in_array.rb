#Given an unsorted array of integers, find first two numbers  in the array that equal a given sum.
#[3,4,6,1]
# 3 + 4 = 7
# 3 + 6 = 9
# 3 + 1 = 4
# 4 + 6 = 10
# 4 + 1 = 5
# 6 + 1 = 7
require 'pry'
def sumTwo(array, sum)
    i = 0
    j = 1
    return_array = []
    for i in (0..array.length - 2) do
        for j in (1..array.length - 1) do
            if array[i]+array[j] == sum
                return_array << array[i]
                return_array << array[j]
                return return_array
            elsif array[i]+array[j] != sum
            end
        end
    end
    return "no pairs sum to this input"
end
puts sumTwo([3,4,6,1], 10)
#output should be 4 and 6
puts sumTwo([8,1,5,2], 75)
#output should be 'no pairs sum to this input'
puts sumTwo([2,2,3,1], 4)
#output 2 and 2

