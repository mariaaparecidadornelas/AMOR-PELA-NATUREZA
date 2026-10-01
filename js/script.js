// Seleciona o formulário
const formulario = document.querySelector("#formContato");


// Verifica se o formulário existe
if (formulario) {

    // Detecta quando o usuário clica em "Enviar mensagem"
    formulario.addEventListener("submit", function (event) {

        // Impede o formulário de recarregar a página
        event.preventDefault();


        // Pega os valores dos campos
        const nome = document.querySelector("#nome").value.trim();

        const email = document.querySelector("#email").value.trim();

        const mensagem = document.querySelector("#mensagem").value.trim();


        // Verifica se o nome está vazio
        if (nome === "") {

            alert("⚠️ Por favor, digite seu nome.");

            document.querySelector("#nome").focus();

            return;
        }


        // Verifica se o e-mail está vazio
        if (email === "") {

            alert("⚠️ Por favor, digite seu e-mail.");

            document.querySelector("#email").focus();

            return;
        }


        // Verifica se o e-mail possui formato válido
        if (!email.includes("@") || !email.includes(".")) {

            alert("⚠️ Digite um e-mail válido.");

            document.querySelector("#email").focus();

            return;
        }


        // Verifica se a mensagem está vazia
        if (mensagem === "") {

            alert("⚠️ Por favor, digite sua mensagem.");

            document.querySelector("#mensagem").focus();

            return;
        }


        // Se chegou aqui, todos os campos estão corretos
        alert(
            "✅ Mensagem enviada com sucesso!\n\n" +
            "Obrigado, " + nome + ", por entrar em contato com o projeto Amor pela Natureza."
        );


        // Limpa o formulário
        formulario.reset();

    });

}