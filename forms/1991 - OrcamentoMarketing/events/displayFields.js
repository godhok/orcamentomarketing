function displayFields(form, customHTML) {
    var activity = parseInt(getValue("WKNumState"));
    form.setHidePrintLink(true);

    form.setVisibleById("remover_sinal", false)
    form.setVisibleById("alerta", false)

    if (form.getValue("remover_sinal") == "sim") {
        form.setVisibleById("alerta", true)
    }

    switch (activity) {
        case 0:
            form.setVisibleById("aprovador", false)
            form.setVisibleById("contasapagar", false)
            form.setVisibleById("diretoria", false)
            break;
        case 11:
            form.setVisibleById("contasapagar", false)
            form.setVisibleById("diretoria", false)
            break;
        case 15:
            form.setHidePrintLink(false);
            form.setVisibleById("diretoria", false)
            break;
        case 21:
            form.setVisibleById("diretoria", false)
            form.setVisibleById("field_agendamento", false)
            break;
        case 29:
            form.setVisibleById("remover_sinal", true)

    }
}