import { Component } from '@wordpress/element';
class Header extends Component {
    render() {
        const { toggleTheme, darkTheme } = this.props;
        const headerStyle = {
            backgroundColor: darkTheme ? '#333' : '#EEE',
            color: darkTheme ? 'white' : '#333',
            padding: '10px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        };
        return (
            <header style={headerStyle}>
                <div>Nyassobi</div>
                <button onClick={toggleTheme}>{darkTheme ? 'Light Mode' : 'Dark Mode'}</button>
            </header>
        );
    }
}
export default Header;