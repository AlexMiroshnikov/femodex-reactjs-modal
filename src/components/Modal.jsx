var Femodex = Femodex || {};
Femodex.Components = Femodex.Components || {};
Femodex.Components.Modal = React.createClass({
    render: function(){
        var content = (
            this.props.modal ?
            (<Femodex.Components.ModalContent modal={this.props.modal} parent={this} />) :
            ''
        );
        return (
            <div>{content}</div>
        );
    }
});