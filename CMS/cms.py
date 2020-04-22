import random
import subprocess
from googletrans import Translator
import json
import codecs
translator = Translator()


#generate ID
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


#collect some details
def genderF():
	gender = input("ქვიზი საჭიროებს თუ არა სქესის მითითებას?: y/n \n")
	if gender == "y":
		gender = "yes"
		return gender
	elif gender == "n":
		gender == "no"
		return gender
	else:
		genderF()

titleKa = input("შეიყვანეთ ქართული სათაური: \n")
titleMA = input("შეიყვანეთ მეგრული სათაური: \n")
gender = genderF()
ID = getID(content)
optionSum = int(input("შეიყვანეთ ვარიანტების რაოდენობა: \n"))
titleEn = translator.translate(titleKa, dest='en').text

jsFile = open("../VangaApp/scripts/scripts_for/"+ ID +".js", "w").close()

itemsMainsAdd = {"id": ID, "title": {"ka": titleKa, "ma": titleMA, "en": titleEn}, "SEX": gender}
itemsMain = codecs.open("../VangaApp/data/itemsMain.json", "r+", encoding="utf-8-sig")
itemsMainData = json.load(itemsMain)
itemsMainData.append(itemsMainsAdd)
itemsMain.close()
itemsMain = codecs.open("../VangaApp/data/itemsMain.json", "w", encoding="utf-8-sig")
itemsMain.write(json.dumps(itemsMainData, sort_keys=True, indent=4))
itemsMain.close()