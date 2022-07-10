dict=["abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]

res=[]
digits=input("enter the digits= ")
if len(digits)==1:
    for i in dict[int(digits[0])-2]:
        res.append(i)

if len(digits)==2:
    for i in dict[int(digits[0])-2]:
        for j in dict[int(digits[1])-2]:
            res.append(''.join([i,j]))

if len(digits)==3:
    for i in dict[int(digits[0])-2]:
        for j in dict[int(digits[1])-2]:
            for k in dict[int(digits[2])-2]:
                res.append(''.join([i,j,k]))

if len(digits)==4:
    for i in dict[int(digits[0])-2]:
        for j in dict[int(digits[1])-2]:
            for k in dict[int(digits[2])-2]:
                for l in dict[int(digits[3])-2]:
                    res.append(''.join([i,j,k,l]))

print(res)


