Name=input("Enter your name:- ")
Age=int(input("Enter your age:-"))
Diabetes=input("Do you have Diabetes? ")

if (Diabetes=="Yes") or (Diabetes=="yes") or (Diabetes=="y") or (Diabetes=="Y"):
    print("Control your diabetes and ")

if Age>=45:
    print("You will be able to get your vaccine from April 1st")
elif Age<45 and Age>=18:
    print("You will be able to vaccinate from May 1st")
elif Age<18:
    print("It hasn't been declared,you will be notified soon")


