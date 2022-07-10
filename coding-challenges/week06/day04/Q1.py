'''
https://leetcode.com/problems/plus-one/
'''
'''
1. input is int
2. convert it into str
3. we will join it 
4. convert it into int
5. will do sum of the digit approach and append it to the list 
6. reverse the list using reverse function
'''
digits=list(map(int,input().split()))   #[1,2,3]
list1=[]

digit_str = [str(x) for x in digits]    #['1','2','3']
joined_str= "".join(digit_str)          #'123'
joined_str=int(joined_str)              #123
joined_str=joined_str + 1               #123+1=124

while joined_str!=0:                    
    last_digit=joined_str%10
    list1.append(last_digit)            #preparing list [4,2,1]
    joined_str=joined_str//10  

list1.reverse()                         #[1,2,4]
print(list1)

