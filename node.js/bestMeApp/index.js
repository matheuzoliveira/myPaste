const questions = [
    "what i learned today?",
    "what i will do tomorrow?",
    "what can i be better than today?",
    "how old are you?",
    "how many people i can help with teching JS on my youtube channel?,"
]

const ask = (index = 0) => {
    process.stdout.write(questions[index] + "\n")
}

ask()

const answers = []
process.stdin.on("data", data =>{
    answers.push(data.toString().trim())
    if(answers.length < questions.length){
    ask(answers.length)}
    else {
        console.log(answers)
        process.exit()
    }

    
})