var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage(props) {
    var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
        <ul className='languages'>
            {languages.map(function (lang) {
                return (
                    <li key={lang}
                        style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
                        onClick={props.onSelect.bind(null, lang)}
                    >
                        {lang}
                    </li>
                )
            })}
        </ul>
    )
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component {
    constructor(props) {
        super()
        this.state = {
            selectedLanguage: 'All'
        }

        this.updateLanguage = this.updateLanguage.bind(this);
    }

    updateLanguage(lang) {
        this.setState(function () {
            return {
                selectedLanguage: lang
            }
        });
    }

    render() {
        // var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
        // console.log('Up here!', this)
        return (
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage} />
            </div>
        )
    }
}

module.exports = Popular;