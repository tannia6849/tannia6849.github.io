import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import math
    
df = pd.read_csv('data.tsv', sep='\t', header=None)

X, Y = df[0], df[1]

x = list(X)
y = list(Y)

for i in range(len(y)):
    if math.isnan(y[i]):
        y[i] = 0
    else:
        y[i] = y[i]

plt.scatter(x, y, c ='b', label = u'Данные из файла')

#print(df)

numpy_x = np.array(x)
numpy_y = np.array(y)

func1 = np.poly1d(np.polyfit(numpy_x, numpy_y, 3))
plt.plot(x1, func1(x1),"r", label = u'Изображение полинома 3-ей степени')
func2 = np.poly1d(np.polyfit(numpy_x, numpy_y, 4))
plt.plot(x1, func2(x1),'y', label = u'Изображение полинома 4-ой степени')
func3 = np.poly1d(np.polyfit(numpy_x, numpy_y, 10))
plt.plot(x1, func3(x1), 'w',label = u'Изображение полинома 10-ой степени')

plt.title('Графики')
plt.grid(False)
plt.legend()
plt.xlabel('Ось x')
plt.ylabel('Ось y')
plt.show()
