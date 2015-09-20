var Femodex = Femodex || {};
Femodex.Components = Femodex.Components || {};
Femodex.Components.Modal = React.createClass({
    componentDidMount: function(){
        this._getOverlay().style.display = 'block';
    },
    _getOverlay: function(){
        return React.findDOMNode(this).parentNode;
    },
    cancel: function(){
        var overlay = this._getOverlay();
        overlay.style.display = 'none';
        React.unmountComponentAtNode(overlay);
        this.props.modal.onCancel();
    },
    render: function(){
        var content = (
            this.props.modal ?
            (<Femodex.Components.ModalContent modal={this.props.modal} parent={this} />) :
            ''
        );
        return (
            <div className="fmx-modal-container">
                <a href="#" onClick={this.cancel} className="fmx-link-cancel">&times;</a>
                {content}
                <div className="fmx-modal-control">
                    <button className="fmx-btn-ok">{this.props.modal.getTextOk()}</button>
                    <button className="fmx-btn-cancel" onClick={this.cancel}>{this.props.modal.getTextCancel()}</button>
                </div>
            </div>
        );
    }
});