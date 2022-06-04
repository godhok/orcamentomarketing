function validateForm(form) {
    var activity = parseInt(getValue("WKNumState"));

    var msg = "";

    var solicitanteFields = ['nome_solicitante', 'nome_fornecedor', 'cnpj_fornecedor', 'contato_fornecedor', 'loja_destino', 'produto_servico', 'service_value', 'data_pagamento_fornecedor', 'tipo_orcamento', 'obs_solicitante', 'obs']
    var aprovadorFields = ['aprovar', 'obs_aprovador']
    var contasaPagarFields = ['data_agendamento', 'detalhes_agendamento', 'dadoscorretos']
    var diretoriaFields = ['data_pagamento', 'detalhes_pagamento']



    for (i in solicitanteFields) {
        if (form.getValue(solicitanteFields[i]) == "") {
            msg += 'O Campo ' + solicitanteFields[i] + ' não foi preenchido' + "<br>";
        }
    }

    switch (activity) {
        case 11:
            for (i in aprovadorFields) {
                if (form.getValue(aprovadorFields[i]) == "") {
                    msg += 'O Campo ' + aprovadorFields[i] + ' não foi preenchido' + "<br>";
                }
            }
            break;
        case 15:
            for (i in contasaPagarFields) {
                if (form.getValue(contasaPagarFields[i]) == "") {
                    msg += 'O Campo ' + contasaPagarFields[i] + ' não foi preenchido' + "<br>";
                }
            }
            break;
        case 19:
            for (i in diretoriaFields) {
                if (form.getValue(diretoriaFields[i]) == "") {
                    msg += 'O Campo ' + diretoriaFields[i] + ' não foi preenchido' + "<br>";
                }
            }
            break;
        case 29:
            var attachments = hAPI.listAttachments();
            if (!attachments.size() > 0) {
                msg += "É preciso anexar o comprovante de pagamento para continuar o processo!";
            }
            break;
    }

    if (msg !== "") {
        throw '<br>' + msg;
    }
}