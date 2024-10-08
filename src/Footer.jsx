import { Component } from '@wordpress/element';

class Footer extends Component {
    render() {
        const { darkTheme } = this.props;
        const footerStyle = {
            backgroundColor: darkTheme ? '#333' : '#EEE',
            color: darkTheme ? 'white' : '#333',
            padding: '20px',
            textAlign: 'center',
        };
        return (
            <footer> style={footerStyle}>
                © {new Date().getFullYear()} Nyassobi
            </footer>
        );
    }
}
export default Footer;