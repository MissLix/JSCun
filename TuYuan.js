(function(window, document) {
            if (top != self) {
                window.top.location.replace(self.location.href);
            }
            var get = function(id) {
                return document.getElementById(id);
            }
            var bind = function(element, event, callback) {
                return element.addEventListener(event, callback);
            }
            var auto = true;
            var player = get('player');
            var randomm = function() {
				player.src =items[Math.floor(Math.random()*items.length)];
                	player.play();
            }
	document.body.onkeydown = function(e) {
	          if (e.keyCode==81) {
	            	randomm();
	            }
	 }
	var items = [
	'https://cdnjson.com/images/2022/12/27/QQ20220428131753.png',
	'https://cdnjson.com/images/2022/12/27/95335569_p1.jpg',
	'https://cdnjson.com/images/2022/12/28/22001.jpg',
	'https://cdnjson.com/images/2022/12/28/22002.jpg',
	'https://cdnjson.com/images/2022/12/28/22003.jpg',
	'https://cdnjson.com/images/2022/12/28/22004.jpg',
	'https://cdnjson.com/images/2022/12/28/22005.jpg',
	'https://cdnjson.com/images/2022/12/28/22006.jpg',
	'https://cdnjson.com/images/2022/12/28/22007f071d61138eb282d.jpg',
	'https://cdnjson.com/images/2022/12/28/22008eb9618bf5df13d68.jpg',
	'https://cdnjson.com/images/2022/12/28/220091bbc1b7381b461c2.jpg',
	'https://cdnjson.com/images/2022/12/28/22010.jpg',
	'https://cdnjson.com/images/2022/12/28/22011.jpg',
	'https://cdnjson.com/images/2022/12/28/22012.jpg',
	'https://cdnjson.com/images/2022/12/28/22013.jpg',
	'https://cdnjson.com/images/2022/12/28/22014.jpg',
	'https://cdnjson.com/images/2022/12/28/22015.jpg',
	'https://cdnjson.com/images/2022/12/28/22016.jpg',
	'https://cdnjson.com/images/2022/12/28/22017.jpg',
	'https://cdnjson.com/images/2022/12/28/22018.jpg',
	'https://cdnjson.com/images/2022/12/28/22019.jpg',
	'https://cdnjson.com/images/2022/12/28/22020.jpg',
	'https://cdnjson.com/images/2022/12/28/22021.jpg',
	'https://cdnjson.com/images/2022/12/28/22025.jpg',
	'https://cdnjson.com/images/2022/12/28/22026.jpg',
	'https://cdnjson.com/images/2022/12/28/22027.jpg',
	'https://cdnjson.com/images/2022/12/28/22028.jpg',
	'https://cdnjson.com/images/2022/12/28/22029.jpg',
	'https://cdnjson.com/images/2022/12/28/22030.jpg',
	'https://cdnjson.com/images/2022/12/28/22031.jpg',
	'https://cdnjson.com/images/2022/12/28/22032.jpg',
	'https://cdnjson.com/images/2022/12/28/220033.jpg',
	'https://cdnjson.com/images/2022/12/28/220034.jpg',
	'https://cdnjson.com/images/2022/12/28/220035.jpg',
];
console.log(items);
	//var item = items[Math.floor(Math.random()*items.length)];
	//document.getElementById("player").src = item;
	
            bind(get('next'), 'click', randomm);
            bind(player, 'error', function() {
                randomm();
            });
            bind(player, 'ended', function() {
                if (auto) randomm();
            });
        })(window, document);

