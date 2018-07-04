var ContactForm = React.createClass({
    propTypes: {
        onFormSubmit: React.PropTypes.func.isRequired
    },

    handleFormSubmit: function(event) {
        event.preventDefault();
        this.props.onFormSubmit(this.state)
    },

    getInitialState: function() {
        return {
            firstName: '',
            lastName: '',
            email: ''
        }
    },

    handleChange: function(e) {
        e.preventDefault();
        console.log("zmiana");
        const target = e.nativeEvent.target;
        const field = target.name;
        const value = target.value;
      
        this.setState({
          [field]: value
        })
      },
 
    render: function() {
        console.log("dodawanie kontaktu");
        return (
            <form className= {'contactForm'} onSubmit={this.handleFormSubmit}>
                <input 
                    type='text' 
                    name='firstName'
                    placeholder='Imię' 
                    value={this.state.firstName} 
                    onChange={this.handleChange}
                />
                <input 
                    type='text' 
                    name='lastName'
                    placeholder='Nazwisko' 
                    value={this.state.lastName} 
                    onChange={this.handleChange}
                />
                <input 
                    type='email'
                    name='email' 
                    placeholder='Email' 
                    value={this.state.email} 
                    onChange={this.handleChange}
                />
                <button type='submit'> Dodaj kontakt </button>
            </form>
        )
    },
})