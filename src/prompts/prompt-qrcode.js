

const promptQRcode = [
    {
        name: "link",
        description: "Digite o link para gerar o QRCODE",
    },
    {
        name: "type",
        description: "Escolha entre o tipo (1 - Normal) ou (2 - Terminal)",
        pettern: /^[1-2]+$/,
        message: "Escolha apenas entre 1 e 2",
        require: true,
    }
]

export default promptQRcode