/* eslint-disable max-classes-per-file */
/* eslint indent: 0 */
/* eslint react/prop-types: 0 */
/* eslint react/jsx-indent: 0 */
/* eslint react/jsx-no-bind: 0 */
/* eslint react/no-did-mount-set-state: 0 */
/* eslint react/no-multi-comp: 0 */
/* eslint react/jsx-closing-tag-location: 0 */
/* eslint no-undef: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-alert: 0 */
/* eslint react/jsx-boolean-value: 0 */
import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import moment from 'moment';
class VoteButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { votes: props.votes };
    }

    handleClick(d) {
        this.setState((prState) => ({ votes: prState.votes += d }));
    }

    render() {
        return (
            <div className="button">
                <button onClick = { this.handleClick.bind(this,1) }>{ this.props.title } </button>  
                <p>Проголосовало: { this.state.votes }</p>
            </div>
        );
    }
}

class VoteButtonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
  	 	fetch(this.props.url)
                    .then(x => x.json())
                    .then(data => this.setState({ data }));
    }
    render() {
        const buttons = this.state.data.map(function(cur){
        return <VoteButton key = { cur.id } title = { cur.title } votes = { cur.votes } />;
        });
        return (
            <div>
                <MuiThemeProvider>
                    <DatePicker
                        onChange={(n = null, date) => {
                            const dataNow = moment().format('DD.MM.YYYY').split('.');
                            dataNow[0] = Number(dataNow[0]);
                            dataNow[1] = Number(dataNow[1]);
                            dataNow[2] = Number(dataNow[2]);
                            console.log(dataNow);
                            const dataChoose = moment(date).format('DD.MM.YYYY').split('.');
                            dataChoose[0] = Number(dataChoose[0]);
                            dataChoose[1] = Number(dataChoose[1]);
                            dataChoose[2] = Number(dataChoose[2]);
                            let m = moment([dataChoose[2],dataChoose[1],dataChoose[0]]);
                            let x = [dataNow[2],dataNow[1],dataNow[0]];
                            console.log(dataChoose);
                            alert(m.to(x,'days',true));
                        }}
                        floatingLabelText="Выберите дату"
                        auto0k={true}
                        />
                </MuiThemeProvider>
                <ul>
                    { buttons }
                </ul>
            </div>
        );
       }
};    

render(
    <VoteButtonList url="https://kodaktor.ru/j/react5b_6cbf2"/>,
        document.querySelector('div')
);
