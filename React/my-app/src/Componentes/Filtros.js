import React, { useState } from 'react';

export default function Filtros() {

 
    return (
        <ul class="tabs list-unstyled">
        <li data-tab-target="#all" class="active tab">All</li>
        <li data-tab-target="#shoes" class="tab">Shoes</li>
        <li data-tab-target="#tshirts" class="tab">Tshirts</li>
        <li data-tab-target="#pants" class="tab">Pants</li>
        <li data-tab-target="#hoodie" class="tab">Hoodie</li>
        <li data-tab-target="#outer" class="tab">Outer</li>
        <li data-tab-target="#jackets" class="tab">Jackets</li>
        <li data-tab-target="#accessories" class="tab">Accessories</li>
      </ul>
    );
}
