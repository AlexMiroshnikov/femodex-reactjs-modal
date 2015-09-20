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
            var _id = options.id || 'fmx-modal-'+(new Date()).getTime(),
                _message = options.message || 'Default message',
                _textOk = options.textOk || 'OK',
                _textCancel = options.textOk || 'Cancel';

            this.getId = function(){
                return _id;
            };
            this.getMessage = function(){
                return _message;
            };
            this.getTextOk = function(){
                return _textOk;
            };
            this.getTextCancel = function(){
                return _textCancel;
            };

            this.onCancel = function(){
                options.onCancel && options.onCancel();
            };

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