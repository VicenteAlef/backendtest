const API_URL = "https://personal-94zkstob.outsystemscloud.com/ColaboradoresApi/rest/ColaboradoresAPI";

// Função para listar colaboradores (GET)
async function getColaboradores() {
    try {
        const response = await fetch(`${API_URL}/GetColaboradores`);
        const data = await response.json();
        console.log("Colaboradores:", data);
    } catch (error) {
        console.error("Erro ao buscar colaboradores:", error);
    }
}

// Função para criar um colaborador (POST)
async function createColaborador(nome, email, telefone) {
    try {
        const response = await fetch(`${API_URL}/CreateColaborador`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ Nome: nome, Email: email, Telefone: telefone })
        });

        const data = await response.json();
        console.log("Colaborador criado:", data);
    } catch (error) {
        console.error("Erro ao criar colaborador:", error);
    }
}

// Função para deletar um colaborador (DELETE)
async function deleteColaborador(id) {
    try {
        const response = await fetch(`${API_URL}/DeleteColaborador?Id=${id}`, {
            method: "DELETE"
        });

        if (response.ok) {
            console.log(`Colaborador com ID ${id} deletado.`);
        } else {
            console.error("Erro ao deletar colaborador:", await response.text());
        }
    } catch (error) {
        console.error("Erro ao deletar colaborador:", error);
    }
}

// Chamando funções de teste
getColaboradores();