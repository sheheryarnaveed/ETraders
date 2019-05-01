$(document).ready(function() {
  pageNumber = 0;
  itemsPerPage = 3;
  
});

function calculateTotalPages(category){
   //calculating the total number of pages
   c = 0;
   itemLength = -1;
  console.log(category);
   while(itemLength != 0){
     $.ajax({
       url: 'handleItemDisplay.php?category='+category+'&start=' +
       (c) * itemsPerPage +
       '&items=' +
       itemsPerPage,
       dataType: 'json',
       type: 'GET',
       async: false,
       success: function(result) {
         itemLength = result.items.length;
       }
     });
   c=c+1;
   }
   $('#totalPages').empty();
   $('#totalPages').append(c-1);
}

function loadCartNumber() {
  $.getJSON(
    'handleAddToCart.php?itemID=0&updateNumber=0',
    function(response) {
      $("#numItems").empty();
      $('#numItems').append(response.count);
    });
}

function loadCategories() {
  pageNumber = 0;
  itemsPerPage = 3;

  $.getJSON(
    'handleCategoryDisplay.php',
    function(response) {
      $.each(response.categories, function(i, category) {
        if(i==0){
          $('#col-left div').append(
            "<a class='active' onclick='loadCategoryFirstPage(this)'>" + category.category + "</a>"
          );
        }
        else{
          $('#col-left div').append(
            "<a onclick='loadCategoryFirstPage(this)'>" + category.category + "</a>"
          );
        }
        
      });
    }
  );
}


function loadInitialPage() {
  pageNumber = 0;
  itemsPerPage = 3;
  getItems('food');
  calculateTotalPages('food');
}

function loadCategoryFirstPage(element) {
  $('.active').removeClass('active');
  $(element).addClass('active');
  pageNumber = 0;
  getItems(element.innerHTML);
  $('#selectPage').val(pageNumber+1);
  calculateTotalPages(element.innerHTML);
}

function loadPreviousPage () {
    pageNumber -= 1;
    getItems($('.active').text());
    $('#selectPage').val(pageNumber+1);
}

function loadNextPage() {
    pageNumber += 1;
    getItems($('.active').text());
    $('#selectPage').val(pageNumber+1);
}

function loadSpecifiedPage() {
  if(parseInt($('#selectPage').val()) > 0){
  $.getJSON(
    'handleItemDisplay.php?category='+
      $('.active').text() +
      '&start=' +
      (parseInt($('#selectPage').val())-1) * itemsPerPage +
      '&items=' +
      itemsPerPage,
    function(response) {
      if (response.items.length != 0) {
        pageNumber = parseInt($('#selectPage').val()) - 1;
        getItems($('.active').text());
      }
    }
  );
  }
} 

function getItems(category) {
  $.getJSON(
    'handleItemDisplay.php?category=' +
      category +
      '&start=' +
      pageNumber * itemsPerPage +
      '&items=' +
      itemsPerPage,
    function(response) {
      $("#itemEntry").empty();
      $.each(response.items, function(i, item) {
        $('#itemEntry').append(
          "<div class='item-card'><div class='content-display'><a class='image-adjust'><img class='co1 card-img' src='" +
          item.image +
          "' alt='Bread'></a>" +
          "<div class='co2 card-body'><a class='card-title'>" +
          item.name +
          "</a><br><a class='card-price'>Price: $" + 
          item.price + 
          "</a><br><a class='card-description'>" +
          item.description +
          "</a></div><a class='co-3 add-style'><button id='"+ item.itemID +"' onclick='addToCart(this.id)' class='add'>&nbsp; Add To cart &nbsp;</button></a></div></div><br>"
        );
      });
    }
  );
  updatePageButtons(category);
}

function addToCart(itemID) {
  $.getJSON(
    'handleAddToCart.php?itemID=' +
      itemID +
      '&updateNumber=1',
    function(response) {
      $("#numItems").empty();
      $('#numItems').append(response.count);
    }
  );
}

function loadShoppingCart() {
    $.getJSON(
      'handleCartContent.php',
      function(response) {
        $("#tab").empty();
        $('#tab').append('<div class="cartHeader"><a class="title-i">Shopping Cart</a></div>');
        $("#dynamicSection").empty();
        $('#dynamicSection').append(
          "<div id='cartContent'><table id='quantityTable' style='width:100%'>"+
          "<tr>"+
            "<th></th>"+
            "<th></th>"+
            "<th style='font-size:1.8vw;font-weight:bold'>Price:</th>"+
            "<th style='font-size:1.8vw;font-weight:bold'>Quantity:</th>"+
          "</tr>"+
              "</table>"+
              "<div id='navCheckout'>"+
                "<p>Cart Subtotal(<span id='totalItems'></span> Item(s)): $<span id='totalPrice'></span></p>"+
                "<button onclick='proceedToCheckout()'>Proceed to checkout</button>"+
              "</div>"+
          "</div>"
          );
        $.each(response.items, function(i, item) {
          $('#quantityTable').append(
            "<tr>"+ 
            "<td style='width:35%' class='cartImage'><img class='cart-img' src='"+
            item.image
            +"'></td>"+
            "<td style='width:40%; vertical-align:top; padding-top:10px;'>"+
              "<table>"+
                  "<tr>"+
                      "<td style='font-size:1.5rem;padding-bottom:10px;' >Item Name:<span style='font-weight:bold' class='itemName'>"+
                      item.name
                      +"</span></td>"+
                  "</tr>"+
                  "<tr>"+
                      "<td style='font-size:1.5rem;'>Item Description:<span style='font-weight:bold' class='itemDescription'>"+
                      item.description
                      +"</span></td>"+
                  "</tr>"+
                "</table>"+
            "</td> "+
            "<td style='width:12.5%;text-align:center;font-size:1.8vw;font-weight:bold'><span class='cartPrice'>$"+
            item.price
            +"</span></td>"+
            "<td style='width:12.5%'><input type='number' class='selector' id='"+
            item.itemID
            +"' min='0' value='"+
            item.value
            +"' onchange='changeQuantity(this.id)'></td>"+
          "</tr>"
          );

        });
        $('#totalPrice').append(response.price);
        $('#totalItems').append(response.quantity);
      }
    );
}

function changeQuantity(ID) {
  if(parseInt($('#'+ID.toString()).val()) < 0){
    quantity = 0;
  }
  else{
    quantity = parseInt($('#'+ID.toString()).val());
  }
    $.getJSON(
      'handleCartContent.php',
      function(response) {
        $.each(response.items, function(i, item) {
          if(item.itemID == ID){
            prevValue = item.value;
          }
        });
        newVal = quantity;
        updateNumber = newVal - prevValue;
        $.getJSON(
          'handleAddToCart.php?itemID=' +
            ID +
            '&updateNumber=' + updateNumber,
          function(response) {
            $("#numItems").empty();
            $('#numItems').append(response.count);
            loadShoppingCart();
          }
        );
        }
    );
}

function proceedToCheckout() {
  $.getJSON(
    'handleCartContent.php',
    function(response) {
      $("#dynamicSection").empty();
      $('#dynamicSection').append(
        "<div id='cartContent' >"+
        "<table style='width:100%'>"+
        "<tr>"+
        "<td style='font-size:2rem;text-align:center;padding-top:6rem;'><i class='fas fa-check-circle' style='font-size:48px;color:green'></i>&nbsp;&nbsp;You have successfully placed order for <span id='finalQuantity' style='font-weight:bold'></span> item(s)</td>"+
        "</tr>"+
        "<tr>"+
        "<td style='font-size:2rem; text-align:center;padding-bottom:10rem;'><span id='finalTotalPrice' style='font-weight:bold'>$</span> paid</td>"+
        "</tr>"+
        "</table>"+
        "<div id='navCheckout'>"+
        "<button><a href='index.html' style='text-decoration:none; color:black;'>Continue Browsing></a></button>"+
        "</div>"+
        "</div>"
      );
      $('#finalQuantity').append(response.quantity);
      $('#finalTotalPrice').append(response.price);
      $.getJSON(
        'handleAddToCart.php?itemID=-1&updateNumber=0',
        function(response) {
          $("#numItems").empty();
          $('#numItems').append(response.count);
        });
      }
  );
}


function updatePageButtons(category) {
  $('#nav-buttons input').prop('disabled', false);
  $.getJSON(
    'handleItemDisplay.php?category='+
      category
      +
      '&start=' +
      (pageNumber + 1) * itemsPerPage +
      '&items=' +
      itemsPerPage,
    function(response) {
      if (response.items.length == 0) {
        $('#next').prop('disabled', true);
      } else {
        $('#next').prop('disabled', false);
      }
    }
  );
  if (pageNumber == 0) {
    $('#prev').prop('disabled', true);
  } else {
    $('#prev').prop('disabled', false);
  }
  
}