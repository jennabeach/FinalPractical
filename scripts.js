/* Shopping Cart */

var Module = (function () {
    var brands = [{brand: "magnet", price: 20.00},
    {brand: "plush", price: 35.00},
    {brand: "ornamanet", price: 50.00}
  ];

  /*ADD Magnet TO CART*/
  return { addItems1: function(n){
      var formerItems1 = document.getElementById("items1").innerHTML
      var formerQuantity1 = Number(formerItems1)
      var formerBrand1 = document.getElementById("detail1").innerHTML
      var nowBrand1 = brands[n].brand
      document.getElementById("items1").innerHTML = formerQuantity1 + 1
      document.getElementById("quantity1").innerHTML = formerQuantity1 + 1
      document.getElementById("detail1").innerHTML = nowBrand1
    },

    addPrice1: function(n){
      var formerPrice1 = Number(document.getElementById("total1").innerHTML)
      var itemPrice1 = brands[n].price
      var newPrice1 = formerPrice1 + itemPrice1
      document.getElementById("total1").innerHTML = newPrice1
    },

    reset: function(){
      document.getElementById("items1").innerHTML = 0
      document.getElementById("total1").innerHTML = 0
      document.getElementById("detail1").innerHTML = ""
    },


    /*ADD Plush TO CART*/
    addItems2: function(n){
        var formerItems2 = document.getElementById("items2").innerHTML
        var formerQuantity2 = Number(formerItems2)
        var formerBrand2 = document.getElementById("detail2").innerHTML
        var nowBrand2 = brands[n].brand
        document.getElementById("items2").innerHTML = formerQuantity2 + 1
        document.getElementById("quantity2").innerHTML = formerQuantity2 + 1
        document.getElementById("detail2").innerHTML = nowBrand2
      },

      addPrice2: function(n){
        var formerPrice2 = Number(document.getElementById("total2").innerHTML)
        var itemPrice2 = brands[n].price
        var newPrice2 = formerPrice2 + itemPrice2
        document.getElementById("total2").innerHTML = newPrice2
      },

      reset: function(){
        document.getElementById("items2").innerHTML = 0
        document.getElementById("total2").innerHTML = 0
        document.getElementById("detail2").innerHTML = ""
      },

      /*ADD Ornament TO CART*/
      addItems3: function(n){
        var formerItems3 = document.getElementById("items3").innerHTML
        var formerQuantity3 = Number(formerItems3)
        var formerBrand3 = document.getElementById("detail3").innerHTML
        var nowBrand3 = brands[n].brand
        document.getElementById("items3").innerHTML = formerQuantity3 + 1
        document.getElementById("quantity3").innerHTML = formerQuantity3 + 1
        document.getElementById("detail3").innerHTML = nowBrand3
      },

      addPrice3: function(n){
        var formerPrice3 = Number(document.getElementById("total3").innerHTML)
        var itemPrice3 = brands[n].price
        var newPrice3 = formerPrice3 + itemPrice3
        document.getElementById("total3").innerHTML = newPrice3
      },

      /* ORDER TOTAL
      endTotal: function(n) {

      },*/


      reset: function(){
      /*RESET Magnet VALUES*/
      document.getElementById("items1").innerHTML = ""
      document.getElementById("quantity1").innerHTML = ""
      document.getElementById("total1").innerHTML = ""
      document.getElementById("detail1").innerHTML = ""

      /*RESET Plush VALUES*/
      document.getElementById("items2").innerHTML = ""
      document.getElementById("quantity2").innerHTML = ""
      document.getElementById("total2").innerHTML = ""
      document.getElementById("detail2").innerHTML = ""

      /*RESET Ornament VALUES*/
      document.getElementById("items3").innerHTML = ""
      document.getElementById("quantity3").innerHTML = ""
      document.getElementById("total3").innerHTML = ""
      document.getElementById("detail3").innerHTML = ""
      }
    };
})();

document.getElementById("magnet").addEventListener("click", function() {
  Module.addItems1(0)
  Module.addPrice1(0)
});


document.getElementById("plush").addEventListener("click", function() {
  Module.addItems2(1)
  Module.addPrice2(1)
});


document.getElementById("ornament").addEventListener("click", function() {
  Module.addItems3(2)
  Module.addPrice3(2)
});

document.getElementById("reset").addEventListener("click", function() {
  Module.reset();
});
