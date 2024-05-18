import {Configuration, OpenAI} from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAI(configuration)

export async function getChatGPTJawn(prompt) {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: prompt}]
        })

        return completion.choices[0].message.content;
    }
    catch (error){
        throw new Error(error.message);
    }
}