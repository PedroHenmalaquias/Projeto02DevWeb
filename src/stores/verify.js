import { toast } from 'vue3-toastify';

export class Verificar {
    verificarNome (nome){
        if(nome.length < 3){
            toast.error("Nome inválido", {position: 'top-right', autoClose: 1500})    
        }
        else{
            return true
        }
    }

    verificarEmail (email){
        if(!email.includes('@')){
            toast.error("Email Invalido", {position: 'top-right', autoClose: 1500})    
        }
        else{
            return true
        }
    }

    verificarSenha (senha){
        if(senha.length < 6){
            toast.error("Senha Invalida", {position: 'top-right', autoClose: 1500})    
        }
        else{
            return true
        }
    }

    confirmarSenha (senha, confirmarSenha){
        if(senha != confirmarSenha){
            toast.error("Senhas Não Conferem", {position: 'top-right', autoClose: 1500})    

        }
        else{
            return true
        }
    }

    verificarData (data){
        if(data.length < 10){
            toast.error("Data de Nascimento Invalida", {position: 'top-right', autoClose: 1500})    
        }
        else{
            return true
        }
    }

    verificarEndereco (endereco){
        if(endereco.length < 5){
            toast.error("Endereço Invalido", {position: 'top-right', autoClose: 1500})    
        }
        else{
            return true
        }
    }

    verificarCidade (cidade){
        if(cidade == ''){
            toast.error("Cidade Não Preenchida", {position: 'top-right', autoClose: 1500})    
        }
        else{
            return true
        }
    }

    verificarEstado (estado){
        if(estado.length == ''){
            toast.error("Insira Um Estado", {position: 'top-right', autoClose: 1500})    

        }
        else{
            return true
        }
    }

    verificarHobbies (hobbies){
        if(hobbies.length <=  0){
            toast.error("Insira ao menos 1 Hobbie", {position: 'top-right', autoClose: 1500})    
        }
        else{
            return true
        }
    }

    verificarLinguagens (linguagens){
        if(linguagens.length <= 0){
            toast.error("Insira ao menos 1 Linguagem", {position: 'top-right', autoClose: 1500})
        }
        else{
            return true
        }
    }

    verificarBiografia (biografia){
        if(biografia.length < 10){
            toast.error("Biografia Muito Curta", {position: 'top-right', autoClose: 1500})
        }
        else{
            return true
        }
    }

    verificarCampos (user){
        if(this.verificarNome(user.nome)&& 
        this.verificarEmail(user.email) && 
        this.verificarSenha(user.senha) && 
        this.confirmarSenha(user.senha, user.confirmSenha) && 
        this.verificarData(user.data) && 
        this.verificarEndereco(user.endereco) && 
        this.verificarCidade(user.cidade) && 
        this.verificarEstado(user.estado) && 
        // this.verificarHobbies(user.hobbies) && 
        // this.verificarLinguagens(user.linguagens) && 
        this.verificarBiografia(user.biografia)){   
            return ""
        }
    }
}
