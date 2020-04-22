import random
import subprocess

file = open("IDs.txt", "r")
content = file.read()
content = content.split("\n")

def getID(content):
	id = str(random.randint(111111, 999999))
	for i in content:
		if id == i:
			getID(content)
		else:
			continue
	return id

file.close()

print("new id:", str(getID(content)))
submit = input("Want to add a new id to the list? y/n : ")

if submit == 'y':
	file = open("IDs.txt", "a+")
	file.write(str(getID(content)) + '\n')
	file.close()
