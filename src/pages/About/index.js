import './about.css'

function About(){
    return(
        <div className='sobre-container'>
            <h1>Sobre o Projeto</h1>
            <p>Este é um projeto React que lista filmes em cartaz nos cinemas brasileiros.</p>
            <p>Ele consome a API do site <strong>TMDB</strong>, disponível no <a target="blank" rel="external" href='https://www.themoviedb.org/'>link.</a></p>
            <p>Na Página Inicial, Você pode ver os 10 principais filmes atuais. Ao clicar em algum, é gerada uma tela com os detalhes do filme. Nela, existem dois botões: Salvar e Trailer.</p>
            <p className='explanation'><strong>Salvar:</strong> Salva o filme no localStorage do seu navegador.</p>
            <p className='explanation'><strong>Trailer:</strong> Busca o Trailer do filme no youtube.</p>
            <p>Ao cliclar em <strong>Meus Filmes</strong>, você verá os filmes que salvou, com duas opções:</p>
            <p className='explanation'><strong>Ver detalhes</strong>: Acessa a página de detalhes do filme.</p>
            <p className='explanation'><strong>Excluir</strong>: exclui o filme da sua lista.</p>
            
            <h2>Tecnologias utilizadas neste projeto:</h2>
            <li className='tecnologies'><strong>React</strong></li>
            <li className='tecnologies'><strong>Axios</strong></li>
            <li className='tecnologies'><strong>React-Toastfy</strong></li>
            
            <h2>Detalhes do Desenvolvedor</h2>
            <p>Olá! Meu nome é Andre Oliveira. Sou um desenvolvedor apaixonado por tecnologia e filmes.</p>
            <p>Você pode me encontrar no LinkedIn, entrar em contato por e-mail ou conferir o repositório deste projeto no GitHub.</p>
            <br/>
            <ul className="contato-links">
                <li><a href="https://www.linkedin.com/in/andre-fc-oliveira/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="mailto:dev.andrefc@gmail.com">E-mail</a></li>
                <li><a href="https://github.com/devAndreFC/primeflix" target="_blank" rel="noopener noreferrer">Repositório</a></li>
            </ul>

        </div>
    )
}

export default About