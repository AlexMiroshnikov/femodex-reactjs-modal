var Femodex = Femodex || {};
Femodex.Modal = new function(){
    var _stack = [],
        _Roverlay = React.createClass({
            render: function(){
                console.log('>render _Roverlay');
                var display = (this.props.stack.length ? 'block' : 'none'),
                    currentModal = (this.props.stack.length ? this.props.stack.pop().getRcomponent() : null);

                console.log('currentModal');
                console.log(currentModal);

                return (
                    <div id="femodex-modal-overlay" style={{display: display}}>{currentModal.render()}</div>
                );
            }
        });

    /**
     * @param options
     *  id
     *  message
     *  textOk
     *  textCancel
     *  onOk
     *  onCancel
     */
    this.factory = function(options){
        var modal = new function(options){
            var _id = options.id,
                _message = options.message,
                _textOk = options.textOk || 'OK',
                _textCancel = options.textCancel || 'Cancel',
                _Rcomponent = React.createClass({
                    render: function(){
                        console.log('>render');
                        return (
                            <div class="femodex-modal-container">
                                <p>{_message}</p>
                                <div><button>{_textOk}</button><button>{_textCancel}</button></div>
                            </div>
                        );
                    }
                });

            this.getId = function(){
                return _id;
            };

            this.getRcomponent = function(){
                return _Rcomponent;
            };

            this.show = function(){
                console.log('>show');
                //console.log(_Rcomponent);
                //_Rcomponent.render();
                //React.render(<_Rcomponent />);
                console.log('_Roverlay');
                console.log(_Roverlay);
                console.log('mountPoint');
                console.log(mountPoint);
                React.render(
                    <_Roverlay stack={_stack} />,
                    mountPoint
                );
            };
        }(options);

        _stack.push(modal);
        return modal;
    };

    this.getStack = function(){
        return _stack;
    };

    var mountPoint = document.createElement('div');
    mountPoint.id = 'femodex-modal';
    document.body.appendChild(mountPoint);

    /*
    React.render(
        <_Roverlay stack={_stack} />,
        mountPoint
    );
    //*/
}();