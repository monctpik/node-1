'use strict'
const { MyMath } = require('./MyMath');
const { Component } = require('./Component');

const res1 = MyMath.sum(2, 5)


console.log('res1 = ', res1)


const compon = new Component()
compon.render()