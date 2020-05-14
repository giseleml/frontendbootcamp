# Estado e Ciclo de Vida

Inicialização - props e state
Montagem - componentWillMount, render e componentDidMount
Atualização - shouldComponentUpdate, componentWillUpdate, etc.
Desmontagem - componentWillUnmount

Nenhum componente pai ou filho deve saber se outro componente possui estado ou não.

O estado é apenas LOCAL ao componente e caso seja necessário enviar algum atributo 
para outro é feito via PROPS.

EXEMPLO COM STATE: 

class App extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            clock: 1000,
            copo: 'água'
        }
    }

    // Alterar valor do state
    alterarCopo = () => {
        this.setState({
            copo: 'refrigerante'
        })
    }

    render() {
        const { clock, copo } = this.state

        return {
            <div>
                <h1>{clock}</h1>
                <button onClick={alterarCopo()}>{copo}</button>
            </div>
        }
    }
}

