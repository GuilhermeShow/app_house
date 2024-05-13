function verificaHouseUser(dto, db) {

    if(dto !== db) {
        throw new Error("Você não possui permissão para proseguir");
    }

    return;

}