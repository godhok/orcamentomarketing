function enableFields(form) {
  var activity = parseInt(getValue('WKNumState'))
  
  var disabledFields = ["nome_solicitante", "nome_fornecedor", "cnpj_fornecedor", "contato_fornecedor", "loja_destino", "produto_servico", "service_value", "data_pagamento_fornecedor", "tipo_orcamento", "obs_solicitante", "nome", "tipoconta", "numero_banco", "nome_banco", "agencia", "conta", "operacao", "tipopix", "chavepix", "obs"]

  switch (activity) {
    case 11:
      for (i in disabledFields) {
        form.setEnabled(disabledFields[i], false)
      }
      break;
    case 15:
      disabledFields.push("aprovar", "obs_aprovador")
      for (i in disabledFields) {
        form.setEnabled(disabledFields[i], false)
      }
      break;
    case 19:
      disabledFields.push("aprovar", "obs_aprovador", "agendamento", "detalhes_agendamento", "dadoscorretos")
      for (i in disabledFields) {
        form.setEnabled(disabledFields[i], false)
      }
      break;
    case 21:
      form.setEnabled("aprovar", false)
      form.setEnabled("obs_aprovador", false)
      form.setEnabled("detalhes_agendamento", false)
      form.setEnabled("dadoscorretos", false)
      break;
    case 27:
    case 29:
    case 32:
      disabledFields.push("aprovar", "obs_aprovador", "agendamento", "detalhes_agendamento", "dadoscorretos", "pagamento", "detalhes_pagamento")
      for (i in disabledFields) {
        form.setEnabled(disabledFields[i], false)
      }
      break;
  }
}

//