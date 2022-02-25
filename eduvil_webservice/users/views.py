from unittest import result
from django.shortcuts import render, redirect
from django.urls import reverse
import tensorflow.compat.v1 as tf
tf.disable_v2_behavior()
import numpy as np

def main(request):
    if request.method == "GET":
        return render(request, 'users/main.html')
    elif request.method == "POST":
        tf.reset_default_graph()
        X = tf.placeholder(tf.float32, shape=[None, 10])
        Y = tf.placeholder(tf.float32, shape=[None, 1])
        W = tf.Variable(tf.random_normal([10,1]), name="weight")
        b = tf.Variable(tf.random_normal([1]), name="bias")

        hypothesis = tf.matmul(X,W) + b

        saver = tf.train.Saver()
        model = tf.global_variables_initializer()

        emotion = request.POST['emotion']
        autonomous = request.POST['autonomous']
        motivation = request.POST['motivation']
        time_management = request.POST['time_management']
        concentration = request.POST['concentration']
        reading = request.POST['reading']
        memorize = request.POST['memorize']
        test_management = request.POST['test_management']
        taking_note = request.POST['taking_note']
        focus = request.POST['focus']
        
        with tf.Session() as sess:
            sess.run(model)
            
            save_path = "./eduvil_webservice/static/model/saved_eduvil_predict.cpkt"
            saver.restore(sess, save_path)
            
            data = ((emotion, autonomous, motivation, time_management, concentration, reading, memorize, test_management, taking_note, focus),)
            arr = np.array(data, dtype=np.float32)
            
            x_data = arr[0:10]
            dict = sess.run(hypothesis, feed_dict={X: x_data})
            result = round(float(dict[0]),2)

        return render(request, 'users/predict.html', {"result": result})
    