import prompt from "prompt"

import mainPrompt from "./prompts/prompt-main.js"
import creteQRcode from "./services/qr-code/create.js"
import createPassword from "./services/qr-code/password/create.js"

async function main(){
    prompt.get(mainPrompt, async (err, choose) => {
        if(choose.select == 1) await creteQRcode()
        if(choose.select == 2) await createPassword()
    })

 prompt.start();
}

main()