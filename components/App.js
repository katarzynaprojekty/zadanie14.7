var contacts = [{
        id: 1,
        firstName: 'Jan',
        lastName: 'Nowak',
        email: 'jan.nowak@example.com',
    },
    {
        id: 2,
        firstName: 'Adam',
        lastName: 'Kowalski',
        email: 'adam.kowalski@example.com',
    },
	{
		id: 3,
		firstName: 'Zbigniew',
		lastName: 'Koziol',
		email: 'zbigniew.koziol@example.com',
	}
];

// var contactForm = {
//     firstName: '',
//     lastName: '',
//     email: ''
// };

var App = React.createClass({
    getInitialState: function() {
        return {
            contacts: contacts
        }
    },
    newContact: function (details) {
        this.setState({
            contact: [
                {
                    id: this.state.contacts.length + 1,
                    ...details
                }
            ],
            ...this.state.contacts
        });
    },
    render: function() {
        return (
            <div className={'app'}>
                <ContactForm onFormSubmit = { 
                    this.newContact
                }/>
                <Contacts items={this.state.contacts} />
            </div>
        );
    }
});