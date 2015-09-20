var Femodex = Femodex || {};
Femodex.Components = Femodex.Components || {};
Femodex.Components.ModalContent = React.createClass({
    componentDidMount: function(){
        this._getOverlay().style.display = 'block';
    },
    _getOverlay: function(){
        return React.findDOMNode(this.props.parent).parentNode;
    },
    cancel: function(){
        var overlay = this._getOverlay();
        overlay.style.display = 'none';
        React.unmountComponentAtNode(overlay);
        this.props.modal.onCancel();
    },
    render: function(){
        return (
            <div>
                <p>{this.props.modal.getMessage()}</p>
                <button className="fmx-btn-ok">{this.props.modal.getTextOk()}</button>
                <button onClick={this.cancel} className="fmx-btn-cancel">{this.props.modal.getTextCancel()}</button>
            </div>
        );
    }
});