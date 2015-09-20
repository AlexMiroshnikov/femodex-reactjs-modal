var Femodex = Femodex || {};
Femodex.Components = Femodex.Components || {};
Femodex.Components.ModalContent = React.createClass({
    render: function(){
        console.log('props:');
        console.log(this.props);
        return (
            <div>
                <p>Content is here</p>
                <button>OK</button>
                <button>Cancel</button>
            </div>
        );
    }
});