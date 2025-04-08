// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
    function calcArea() {
        let baseA = parseFloat(document.getElementById("base-a").value);
        let baseB = parseFloat(document.getElementById("base-b").value);
        let height = parseFloat(document.getElementById("height").value);
        let area = 0.5*(baseA+baseB)*height
        document.getElementById("answer").innerHTML = "Answer:" + area +" cm^2";
}