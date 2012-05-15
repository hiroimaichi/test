# coding: utf-8

import math
print(u'三ぺんの長さ (A, B, C) を入力してください')
a = float(raw_input('A=?'))
b = float(raw_input('B=?'))
c = float(raw_input('C=?'))
s = (a+b+c)/2.0
square_S = s*(s-a)*(s-b)*(s-c)
if square_S<=0:
	print(u'三角形になっていません')
	exit()
S = math.sqrt(square_S)
print(u'面積は%fです' %(S))
