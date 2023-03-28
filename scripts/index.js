const inputRecipientEmailRef = document.querySelector('#inputRecipient')

const inputNewEmailRef = document.querySelector('#inputNewEmail')

const inputNewPasswordRef = document.querySelector('#inputNewPassword')

const btnGerarRef = document.querySelector('#btnGerar')







btnGerarRef.addEventListener('click', (e) => {

    var newEmail = inputNewEmailRef.value
    var newPassword = inputNewPasswordRef.value

    var emailFormatado = `
    <table align="center" cellpadding="0" cellspacing="0" width="100%" height="100%">
    <tr>
        <td align="center" valign="top">
    
            <table align="center" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px;">
                <tr>
                    <td style="background-image: url(https://static.vecteezy.com/ti/vetor-gratis/p2/7931915-abstrato-jogador-fundo-moderno-tecnologia-modelo-design-conceito-metalico-azul-e-preto-cor-brilhante-quadro-em-fibra-de-carbono-grafico-jogo-layout-ilustracao-eps-vetor.jpg); background-color: #2B2B2B; background-size: cover; color: aliceblue; border-radius: 10px; padding: 2% 5%; font-family: 'Roboto', sans-serif;">
    
                        <div style="text-align: center;">
                            <img src="https://promocao.rntintas.com.br/wp-content/uploads/2021/09/logo-rntintas-branco.png" alt="logo-rn" style="width: 100px; height: 100px; object-fit: contain; display: inline-block;">
                        </div>
    
                        <div style="text-align: center; margin-top: 30px;">
                            <h2 style="font-weight: bold;">Olá,</h2>
                            <p style="font-weight: 300; width: 80%; margin: 0 auto;">
                                Abaixo, você encontrará seu novo nome de usuário e senha para acessar a plataforma <span style="color: white; font-weight: bold;">BIMACHINE</span>. Caso tenha alguma dúvida ou precise de ajuda, sinta-se à vontade para me contatar através do Spark ou responder a este e-mail. 
                            </p>
                        </div>
    
                        <div style="text-align: center; margin-top: 30px;">
                            <p style="font-weight: 300; width: 80%; margin: 0 auto;">
                                Clique <a href="http://rntintas.bimachine.com.br/login.spr" style="font-weight: bold; font-size: 20px; color:#4DEEE4;" target="_blank">AQUI</a> para acessar a plataforma e inserir suas novas credenciais.
                            </p>
                        </div>
    
    
                        <div style="background-color: #4deee334; border-radius: 10px;" >
                            <div style="text-align: center; margin-top: 50px; padding-top: 20px;">
                                <p style="font-weight: 300; width: 80%; margin: 0 auto;">
                                    <span style="font-weight: bold;">Email:</span>
                                     <span id="inputEmail">${newEmail}</span>                                            
                                    </button> 
                                </p>                                        
                            </div>
                            
            
                            <div style="text-align: center; margin-top: 5px; padding-bottom: 20px;">
                                <p style="font-weight: 300; width: 80%; margin: 0 auto;">
                                    <span style="font-weight: bold;">Senha:</span> 
                                    <span id="inputPassword">${newPassword}</span>                                            
                                    </button>  
                                </p>
                            </div>
                        </div>
    
                        
            
                        <div style="text-align: center; margin-top: 50px;">
                            <p style="font-weight: 300; width: 80%; margin: 0 auto;">
                                Se você precisar modificar sua senha, aqui está um vídeo-exemplo mostrando como fazê-lo. 
                            </p>
                        </div>
                        
        
                        <div style="text-align: center; margin-top: 50px; margin-botton: 50px;">
                            <a href="https://www.youtube.com/watch?v=0H7GTbJ55eU" target="_blank" style="font-weight: bold; font-size: 20px; color: #4DEEE4;">
                                COMO TROCAR SUA SENHA
                            </a>
                        </div>                            
                        
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    </table>    
    `

    e.preventDefault();

    var returnSectionRef = document.querySelector('#returnSection')
    returnSectionRef.innerHTML += emailFormatado

    inputNewEmailRef.value = ''
    inputNewPasswordRef.value = ''

})










const btnCopiar = document.querySelector('#btnCopiar');

btnCopiar.addEventListener('click', () => {
    const html = returnSection.outerHTML;
    navigator.clipboard.writeText(html);
    alert('Conteúdo copiado para a área de transferência!');
  });







