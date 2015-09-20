var Femodex = Femodex || {};
Femodex.Modal = new function(){
    var _mountPoint = null,
        _getMountPoint = function(){
            if (!_mountPoint) {
                _mountPoint = document.createElement('div');
                _mountPoint.id = 'femodex-modal';
                document.body.appendChild(_mountPoint);
            }

            return _mountPoint;
        };

    this.factory = function(options){
        var modal = new function(options){
            this.show = function(){
                React.render(
                    React.createElement(Femodex.Components.Modal, {modal: this}),
                    _getMountPoint()
                );
            };
        }(options);
        return modal;
    };
}();