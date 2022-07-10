'''
write the program of atoi function
'''
def atoi(input1,output):
    if input1==[]:
        return int(output)
    output=output+input1.pop()
    return atoi(input1,output)




input1=list(input("Enter the string = "))
output=''
input1.reverse()
c=atoi(input1,output)
c=c+1
print(c)



