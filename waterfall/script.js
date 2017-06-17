/**
 * script.js
 *
 * Created by ice on 2017/6/17 上午8:33.
 */


window.onload = function () {
  waterfall();
  window.onscroll = function () {

    var data = {
      'data': [
        {'src': Math.floor(Math.random() * 97) + '.jpg'},
        {'src': Math.floor(Math.random() * 97) + '.jpg'},
        {'src': Math.floor(Math.random() * 97) + '.jpg'},
        {'src': Math.floor(Math.random() * 97) + '.jpg'},
        {'src': Math.floor(Math.random() * 97) + '.jpg'}]
    };

    if (checkScroll()) {
      var main = document.getElementById('main');
      for (var i = 0; i < data.data.length; i++) {
        var box = document.createElement('div');
        box.className = 'box';
        main.appendChild(box);
        var pic = document.createElement('div');
        pic.className = 'pic';
        box.appendChild(pic);
        var img = document.createElement('img');
        img.src = 'images/' + data.data[i].src;
        pic.appendChild(img);
      }
      waterfall();
    }
  };

};

function waterfall () {
  var boxes = document.querySelectorAll('#main .box');

  var boxWidth = boxes[0].offsetWidth;
  var cols = Math.floor(document.documentElement.clientWidth / boxWidth);
  document.getElementById('main').style.cssText = 'width:' + boxWidth * cols + 'px;margin:0 auto';

  var heightArr = [];
  for (var i = 0; i < boxes.length; i++) {
    if (i < cols) {
      heightArr.push(boxes[i].offsetHeight);
    } else {
      var minHeight = Math.min.apply(null, heightArr);
      var index = heightArr.indexOf(minHeight);
      boxes[i].style.position = 'absolute';
      boxes[i].style.top = minHeight + 'px';
      boxes[i].style.left = boxWidth * index + 'px';
      heightArr[index] += boxes[i].offsetHeight;
    }
  }
}

function checkScroll () {
  var boxes = document.querySelectorAll('#main .box');
  var lastBox = boxes[boxes.length - 1];
  var lastBoxTopHeight = lastBox.offsetTop + Math.floor(lastBox.offsetHeight / 2);
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.body.clientHeight || document.documentElement.clientHeight;
  return lastBoxTopHeight < (scrollTop + height);
}