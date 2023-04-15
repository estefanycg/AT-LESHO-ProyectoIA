import cv2
def condicionalesLetras(dedos):
    nuevo_contenido = ''
    if dedos == [1, 1, 0, 0, 0, 0]:
            nuevo_contenido = 'A'
    elif dedos == [0, 0, 0, 0, 0, 0]:
            nuevo_contenido = 'E'
    elif dedos == [0, 0, 1, 0, 0, 0]:
            nuevo_contenido = 'I'

    elif dedos == [1, 0, 1, 0, 0, 0]:
            nuevo_contenido = 'O'

    #elif dedos == [0, 0, 1, 0, 0, 1]:
     #       nuevo_contenido = 'U'
    # abecedario
        # if dedos ==[1,0,1,0,0,0]:
        #     cv2.rectangle(frame,(0,0),(100,100),(255,255,255), -1)
        #     cv2.putText(frame,'C',(20,80),font,3,(0,0,0),2,cv2.LINE_AA)
        #     print("C")
    elif dedos == [0, 0, 0, 0, 0, 1]:
            nuevo_contenido = 'D'
    elif dedos == [1, 1, 0, 0, 1, 1]:
            nuevo_contenido = 'K'
    elif dedos == [1, 1, 0, 0, 0, 1]:
            nuevo_contenido = 'L'
    elif dedos == [0, 1, 0, 1, 1, 1]:
            nuevo_contenido = 'W'
    #elif dedos == [0, 1, 0, 0, 1, 1]:
#       nuevo_contenido = 'N'
    elif dedos == [1, 1, 1, 0, 0, 0]:
            nuevo_contenido = 'Y'
    elif dedos == [1, 1, 1, 1, 1, 0]:
            nuevo_contenido = 'F'
    elif dedos == [0, 1, 1, 1, 1, 1]:
            nuevo_contenido = 'B'
    elif dedos == [0, 1, 0, 0, 1, 1]:
            nuevo_contenido = 'V'
    elif dedos == [1, 1, 1, 1, 1, 1]:
            nuevo_contenido = 'HOLA'

#     else:
#         nuevo_contenido = ''
    return dedos, nuevo_contenido
