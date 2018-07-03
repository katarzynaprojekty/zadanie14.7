var ContactForm = React.createClass({
    propTypes: {
        onFormSubmit: React.PropTypes.func.isRequired
    },

    handleFormSubmit: function(event) {
        event.preventDefault();
        this.props.onFormSubmit(this.state)
    },

    
    render: function() {
        return (
            <form className= {'contactForm'} onSubmit={this.handleFormSubmit}>
                <input type='text' placeholder='Imię' value={this.firstName} onChange={this.change('firstName')}/>
                <input type='text' placeholder='Nazwisko' value={this.lastName} onChange={this.change('lastName')}/>
                <input type='email' placeholder='Email' value={this.email} onChange={this.change('email')}/>
                <button type='submit'> Dodaj kontakt </button>
            </form>
        )
    },
})