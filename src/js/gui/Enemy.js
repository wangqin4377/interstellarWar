var Enemy = (function () {
	function Enemy (index) {
		var  s = this;
		var bmpd = new LBitmapData(dataList["enemy" + index]),
		frameList = aircraft_animation_data["enemy" + index];
		LExtends(s, Aircraft, [bmpd, frameList]);

		s.x = LGlobal.width + 100;
		s.y = 100 + ((Math.random() * (LGlobal.height - 100)) >>> 0);

		s.step = 3;
		s.angle = 0;

		s.addEventListener(LEvent.ENTER_FRAME, s.loop);
	}

	Enemy.prototype.loop = function (e) {
		var s = e.currentTarget;

		s.x -= s.step;

		if (s.x < -100) {
			s.remove();
		}
	};

	return Enemy;
})();