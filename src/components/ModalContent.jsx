var Femodex = Femodex || {};
Femodex.Components = Femodex.Components || {};
Femodex.Components.ModalContent = React.createClass({
    render: function(){
        return (<div className="fmx-modal-content">{this.props.modal.getMessage()}</div>);
    }
});