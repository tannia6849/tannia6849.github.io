from datetime import datetime, date, time

def wrapper(f):
    def writeToFile(*args):
        #functools
        writeToFile.__doc__ = f.__doc__
        print(f.__name__, args)
        with open('data.txt', "a") as text:
            time = datetime.utcnow()
            str = f'{f.__name__}, {args}, {time}'
            text.write(str)
            text.write("\r\n")
        return f(*args)
    return writeToFile

@wrapper #wrapper(calc)
def calc(a, b, operation):
    """Calulator (a, b, ['+']|['-']|['/']|['*'])"""
    if (operation == '*'):
        return '%.2f * %.2f = %.2f' % (a, b, a*b)
    elif (operation == '/'):
        return '%.2f / %.2f = %.2f' % (a, b, a/b)
    elif (operation == '+'):
        return '%.2f + %.2f = %.2f' % (a, b, a+b)
    elif (operation == '-'):
        return '%.2f - %.2f = %.2f' % (a, b, a-b)

a = int(input('Enter a number: '))
b = int(input('Enter a number: '))
c = input('Enter a symbol: ')

print(calc(a,b,c))
print(calc.__doc__)
