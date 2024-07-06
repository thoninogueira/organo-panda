import './campo.css'

const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    const className = `campo ${type === 'color' ? 'color' : ''}`;
    
    return (
        <div className={className}>
            <label>{label}</label>
            <input
                type={type}
                value={valor}
                onChange={evento => aoAlterado(evento.target.value)}
                required={obrigatorio}
                placeholder={placeholder}
            /> 
        </div>
    )
}

export default Campo;
