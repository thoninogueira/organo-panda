import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/thoni-nogueira/" target="_blank" rel="noopener noreferrer">
                        <img src="/imagens/linkedin.png" alt="Logo do Linkedin" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/thoninogueira" target="_blank" rel="noopener noreferrer">
                    <img src="/imagens/github.png" alt="Logo do GitHub" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/thoninogueira/" target="_blank" rel="noopener noreferrer">
                        <img src="/imagens/instagram.png" alt="Logo do Instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section className="gif">
            <img src="/imagens/bambutech-motion.gif" alt="Logo Organo" />
        </section>
        <section>
            <p>
                Desenvolvido por Thoni Nogueira.
            </p>
        </section>
    </footer>)
}

export default Rodape