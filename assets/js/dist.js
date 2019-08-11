function Welcome( props ) {
    return React.createElement( 'div', null, 'Hello World' );
}

ReactDOM.render(
    React.createElement( Welcome, {}, null ),
    document.getElementById( 'app' )
);