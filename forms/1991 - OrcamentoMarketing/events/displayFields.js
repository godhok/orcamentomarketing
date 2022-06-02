function displayFields(form, customHTML) {
    var activity = parseInt(getValue("WKNumState"));

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
            form.setVisibleById("diretoria", false)
            break;
        case 21:
            form.setVisibleById("diretoria", false)
            form.setVisibleById("field_agendamento", false)
    }
}