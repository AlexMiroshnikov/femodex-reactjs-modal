var Femodex = Femodex || {};
Femodex.Components = Femodex.Components || {};
Femodex.Components.ModalContent = React.createClass({
    cancel: function(){
        React.unmountComponentAtNode(React.findDOMNode(this.props.parent).parentNode);
        this.props.modal.onCancel();
    },
    render: function(){
        return (
            <div>
                <p>{this.props.modal.getMessage()}</p>
                <button>{this.props.modal.getTextOk()}</button>
                <button onClick={this.cancel}>{this.props.modal.getTextCancel()}</button>
            </div>
        );
    }
});