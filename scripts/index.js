const inputRecipientEmailRef = document.querySelector('#inputRecipient')

const inputNewEmailRef = document.querySelector('#inputNewEmail')

const inputNewPasswordRef = document.querySelector('#inputNewPassword')

const btnGerarRef = document.querySelector('#btnGerar')







btnGerarRef.addEventListener('click', (e) => {

    var newEmail = inputNewEmailRef.value
    var newPassword = inputNewPasswordRef.value

    var emailFormatado = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Emissor de email</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
        <script src="https://apis.google.com/js/api.js"></script>
        
    
    </head>
    <body style="padding: 0; margin: 0;">
    
        <table align="center" cellpadding="0" cellspacing="0" width="100%" height="100%">
            <tr>
                <td align="center" valign="top">
            
                    <table align="center" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px;">
                        <tr>
                            <td style=" background: rgb(2,0,36);
                            background: linear-gradient(125deg, rgba(2,0,36,1) 0%, rgba(8,8,69,1) 35%, rgba(0,71,85,1) 100%); background-size: cover; color: aliceblue; border-radius: 10px; padding: 2% 5%; font-family: 'Roboto', sans-serif;">   
            
                                <div style="text-align: center;">
                                    <img src="https://promocao.rntintas.com.br/wp-content/uploads/2021/09/logo-rntintas-branco.png" alt="logo-rn" style="width: 100px; height: 100px; object-fit: contain; display: inline-block;">
                                </div>
            
                                <div style="text-align: center; margin-top: 30px;">
                                    <h2 style="font-weight: bold;">Olá,</h2>
                                    <p style="font-weight: 300; width: 80%; margin: 0 auto;">
                                    Aqui estão suas novas informações de login para acessar a plataforma <span style="color: white; font-weight: bold;">BIMACHINE</span>. Se você tiver alguma dúvida ou precisar de ajuda, por favor, não hesite em entrar em contato comigo por meio do Spark, telefone (35) 2105-3070, ou respondendo a este e-mail. 
                                    </p>
                                </div>
            
                                <div style="text-align: center; margin-top: 30px;">
                                    <p style="font-weight: 300; width: 80%; margin: 0 auto;">
                                        Clique <a href="http://rntintasng.bimachine.com.br/login.spr" style="font-weight: bold; font-size: 20px; color:#00D1E6;" target="_blank">AQUI</a> para acessar a plataforma e inserir suas novas credenciais.
                                    </p>
                                </div>
            
            
                                <div style="background-color: #00d3e631; border-radius: 10px;" >
                                    <div style="text-align: center; margin-top: 50px; padding-top: 20px;">
                                        <p style="font-weight: 300; width: 80%; margin: 0 auto;">
                                            <span style="font-weight: bold;">Email:</span>
                                            <span id="inputEmail" style="color: white; text-decoration: none; font-weight: bold;">${newEmail}</span>
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
                                
                
                                <div style="text-align: center; margin-top: 50px; margin-bottom: 50px;">
                                    <a href="https://www.youtube.com/watch?v=0H7GTbJ55eU" target="_blank" style="font-weight: bold; font-size: 20px; color: #00D1E6;">
                                        COMO TROCAR SUA SENHA
                                    </a>
                                </div>                            
                                
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            </table>    
        
    </body>
    </html>  
    `

    e.preventDefault();

    var returnSectionRef = document.querySelector('#returnSection')
    returnSectionRef.innerHTML = emailFormatado

    inputNewEmailRef.value = ''
    inputNewPasswordRef.value = ''

})










const btnCopiar = document.querySelector('#btnCopiar');

btnCopiar.addEventListener('click', () => {
    const html = returnSection.outerHTML;
    navigator.clipboard.writeText(html);
    alert('Conteúdo copiado para a área de transferência!');
  });







