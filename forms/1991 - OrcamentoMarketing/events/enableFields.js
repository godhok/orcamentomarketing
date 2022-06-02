function enableFields(form) {
  var activity = parseInt(getValue('WKNumState'))
  
  var disabledFields = ["nome_solicitante", "nome_fornecedor", "cnpj_fornecedor", "contato_fornecedor", "loja_destino", "produto_servico", "service_value", "data_pagamento", "tipo_orcamento", "obs_solicitante", "nome", "tipoconta", "numero_banco", "nome_banco", "agencia", "conta", "tipopix", "chavepix", "obs"]

  switch (activity) {
    case 0:
      form.setEnabled(disabledFields[0], false)
      form.setEnabled(disabledFields[1], false)
      form.setEnabled(disabledFields[2], false)

      break
  }
}

//