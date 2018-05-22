$.fn.isNear = function(distanceX, distanceY, onEnter, onLeave) {

    var $this = $(this);

    var isNear = (element, event) => {

        var top = $(element).offset().top - distanceY;
        var bottom = top + $(element).height() + ( 2 * distanceY )

        var left = $(element).offset().left - distanceX;
        var right = left + $(element).width() + ( 2 * distanceX );

        var x = event.pageX;
        var y = event.pageY;

        return x > left && x < right && y > top && y < bottom;
    }

    document.addEventListener("mousemove", _.debounce((event) => {
        $this.map((key, self) => {
            return isNear(self, event) ? onEnter(self, event) : onLeave(self, event);
        });
    }, 150), false);

    document.addEventListener("drag", _.throttle((event) => {
        $this.map((key, self) => {
            return isNear(self, event) ? onEnter(self, event) : onLeave(self, event);
        });
    }, 150), false);

    return this;
}