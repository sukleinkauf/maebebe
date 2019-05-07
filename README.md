# Projeto MãeBebe - Universidade Feevale

# O projeto é um aplicativo híbrido, construido utilizando o framework Ionic, versão 4.

Para executar o projeto em seu computador:
- Fazer download ou git clone "https://github.com/feevale-pesquisa/maebebe.git"
- O projeto utiliza dependências do NPM, então é necessário instalar o Node JS (LTS): https://nodejs.org/en/
- Executar na pasta do projeto o comando "npm install" 
- O Ionic deve estar instalado globalmente: npm install -g ionic
- Abrir o projeto no navegador "ionic serve"

Para gerar builds para Android (APK):
- Seguir o tutorial descrito em: https://ionicframework.com/docs/installation/android
- O Java deve estar instalado (JDK8)
- Instalar o Android Studio e Android SDK
- Definir variável de ambiente ANDROID_SDK_ROOT=<local onde está o ANDROID SDK> (ex: C:\Users\0190690\AppData\Local\Android\Sdk\)
- Adicionar no PATH pastas do Android SDK (Por exemplo: C:\Users\0190690\AppData\Local\Android\Sdk\):
  - diretorio-android-sdk/tools/bin
  - diretorio-android-sdk/platform-tools
  - diretorio-android-sdk/emulator
  
Para verificar se está tudo certo para gerar a APK rodar o comando "ionic cordova requirements", que vai verificar se está tudo instalado no computador
- Gerar a APK: ionic cordova build android 
- Rodar no emulador: ionic cordova emulate android (emulador deve estar aberto no Android Studio)
- Executar no celular pela USB: ionic cordova run android
