import json


try:
    with open("data.json", "r") as read_file:
        try:
            data = json.load(read_file)
        except json.JSONDecodeError:
            print("не json")
        
        try:
            for element in data:
                for item in element:
                    try:
                        print(item,' : ',element.get(item))
                    except KeyError:
                        print('Неверное взятие по ключу')

        except IndexError:
            print('Неверное итерирование по объекту')

except FileNotFoundError:
    print("Не найден файл")
except IOError:
    print("Невозможно прочитать/записать")
