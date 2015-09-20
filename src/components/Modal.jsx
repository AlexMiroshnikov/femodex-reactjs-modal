var Femodex = Femodex || {};
Femodex.Components = Femodex.Components || {};
Femodex.Components.Modal = React.createClass({
    render: function(){
        console.log('>rendering Component Modal, props:');
        console.log(this.props);
        var content = (
            this.props.modal ?
            (<Femodex.Components.ModalContent modal={this.props.modal} />) :
            ''
        );
        return (
            <div>{content}</div>
        );
    }
});