function enviarEmail() {
    gapi.load('client', function() {
      gapi.client.init({
        'apiKey': 'AIzaSyAe4_8CkS9aUFncubBdR-LO865QTI2IZXo',
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
        'clientId': '91220392585-bj0ac3pij01rofeichs64g2214odcdak.apps.googleusercontent.com',
        'scope': 'https://www.googleapis.com/auth/gmail.send'
      }).then(function() {
        return gapi.client.request({
          'path': 'https://www.googleapis.com/gmail/v1/users/me/messages/send',
          'method': 'POST',
          'headers': {
            'Content-Type': 'application/json'
          },
          'body': {
            'raw': btoa(`From: SEU_EMAIL_AQUI\r\nTo: DESTINATARIO_AQUI\r\nSubject: ASSUNTO_AQUI\r\nMIME-Version: 1.0\r\nContent-Type: text/html; charset=UTF-8\r\n\r\n<!DOCTYPE html><html><head><title>Exemplo de Email HTML</title></head><body><h1>Olá!</h1><p>Este é um exemplo de email HTML enviado através do Gmail API.</p></body></html>`)
          }
        })
      }).then(function(response) {
        console.log(response);
      }, function(reason) {
        console.error(reason);
      });
    });
  }
  